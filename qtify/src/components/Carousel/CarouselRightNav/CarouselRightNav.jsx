import React from 'react'
import { useSwiper } from 'swiper/react'
import styles from './CarouselRightNav.module.css'

function CarouselRightNav() {

    const swiper = useSwiper()

  return (
    <img
    className={styles.carouselNavForward}
    src={require("../../../assets/forwardNav.png")}
    alt="prevNav"
    onClick={() => swiper.slideNext()}
  />
  )
}

export default CarouselRightNav