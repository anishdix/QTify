import React, { useEffect } from 'react'

import {Swiper,SwiperSlide, useSwiper } from 'swiper/react'

import styles from "./Carousel.module.css"
import RightNav from './RightNav.jsx'
import LeftNav from './LeftNav.jsx'
import "swiper/css"


const Controls=({data})=>{
  const swiper = useSwiper(data);
  useEffect(() => {
    swiper.slideTo(0, null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
}, [data]);
return <></>
  

}

const Carousel = ({data,renderComponent}) => {
  return (
    <div className={styles.wrapper}>
        <Swiper 
        style={{padding:"0px 20px"}} 
        initialSlide={0} 
        slidesPerView={"auto"}
        spaceBetween={40} 
        allowTouchMove >
            <Controls data={data}/>
            <LeftNav/>
            <RightNav/>
            {
              data.map((ele)=>{
                return (
                  <SwiperSlide key={ele.id}>{renderComponent(ele)}</SwiperSlide>
                )
              })
            }
            </Swiper>
      
    </div>
  )
}

export default Carousel



