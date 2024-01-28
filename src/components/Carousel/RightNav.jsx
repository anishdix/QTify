import React, { useEffect, useState } from 'react'
import { useSwiper } from 'swiper/react'
import { ReactComponent as RightArrow } from '../../assets/RightNav.svg';
import styles from "./Carousel.module.css"

const RightNav = () => {
    const swiper=useSwiper();
    const [End,setEnd]=useState(swiper.isEnd)

useEffect(()=>{
    swiper.on("slideChange",function(){
      console.log("in right")
        setEnd(swiper.isEnd)
    })
},[swiper])

  return (
    <div className={styles.RightNav}>
      {!End&&<RightArrow onClick={()=>swiper.slideNext()}/>}
    </div>
  )
}

export default RightNav
