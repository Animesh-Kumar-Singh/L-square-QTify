import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import styles from "./Carousel.module.css";
import "swiper/css";
import CarouselLeftNav from "./CarouselLeftNav/CarouselLeftNav";
import CarouselRightNav from "./CarouselRightNav/CarouselRightNav";

function Carousel({ data, componentToRender }) {

  // const swiper = useSwiper();

   const [removeLeftNav, setRemoveLeftNav] = useState(true);

   const [removeRightNav, setRemoveRightNav] = useState(false);

  

  return (
    <div className={styles.parentCarousel}>
      <Swiper
        spaceBetween={40}
        slidesPerView={"auto"}
        onSlideChange={(swiperCore) =>{console.log("slide change")
        const {
          isBeginning,
          isEnd
        } = swiperCore;
        console.log({ isBeginning,isEnd });
        if(isBeginning){
          setRemoveLeftNav(isBeginning)
        }else{
          setRemoveLeftNav(false)
        }

        if(isEnd){
          setRemoveRightNav(isEnd)
        }else{
          setRemoveRightNav(false)
        }

        
      }}
        // onSwiper={(swiper) => console.log(swiper,"hmm")}
        className={styles.mainCarousel}
        // onClick={(swiper)=> {
        //   console.log(swiper,"current result")
        // }}
      >
        {
          !removeLeftNav ? <CarouselLeftNav  /> : null
        }
        {
          !removeRightNav? <CarouselRightNav /> : null
        }
        
          {/* <CarouselLeftNav  />
          <CarouselRightNav /> */}
  
        {data.map((ele) => (
          <SwiperSlide  key={ele.id}>{componentToRender(ele)}</SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Carousel;
