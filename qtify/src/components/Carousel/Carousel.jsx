import React, { useState } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import styles from "./Carousel.module.css";
import "swiper/css";
import CarouselLeftNav from "./CarouselLeftNav/CarouselLeftNav";
import CarouselRightNav from "./CarouselRightNav/CarouselRightNav";

function Carousel({ data, componentToRender }) {

  const swiper = useSwiper()
  
  // const [dropCarouselLogo, setdropCarouselLogo] = useState(false);

  // const handelDropCarousel = () => {
  //   setdropCarouselLogo(!dropCarouselLogo);
  // };

  // console.log("data from carousel", data);
  let makeItInvisible = true
  return (
    <div className={styles.parentCarousel}>
      <Swiper
        spaceBetween={40}
        slidesPerView={"auto"}
        onSlideChange={(swiper) =>console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper,"hmm")}
        className={styles.mainCarousel}
        onClick={(swiper)=> {
          console.log(swiper.isBeginning,"current result")
        }}
      >
          <CarouselLeftNav  />
          <CarouselRightNav />
  
        {data.map((ele) => (
          <SwiperSlide  key={ele.id}>{componentToRender(ele)}</SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Carousel;
