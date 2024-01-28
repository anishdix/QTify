import React, { useEffect, useState } from 'react'
import { useSwiper } from 'swiper/react'
import { ReactComponent as LeftArrow } from '../../assets/LeftNav.svg';
import styles from "./Carousel.module.css"

const LeftNav = () => {
    const swiper=useSwiper();
    const [isBeginning,setIsBeginning]=useState(swiper.isBeginning)

useEffect(()=>{
    swiper.on("slideChange",function(){
        setIsBeginning(swiper.isBeginning)
    })
},[swiper])

  return (
    <div className={styles.LeftNav}>
      {!isBeginning&&<LeftArrow onClick={()=>swiper.slidePrev()}/>}
    </div>
  )
}

export default LeftNav
