import React from "react";
import { useSwiper } from "swiper/react";
import styles from "./CarouselLeftNav.module.css";

function CarouselLeftNav() {
  const swiper = useSwiper();

  return (
    <img
      className={styles.carouselNav}
      src={require("../../../assets/prevNav.png")}
      alt="prevNav"
      onClick={() => swiper.slidePrev()}
    />
  );
}

export default CarouselLeftNav;
