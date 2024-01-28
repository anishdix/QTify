import React, { useState } from 'react'
import styles from "./Section.module.css"
import {  CircularProgress } from '@mui/material'
import Card from '../Card/Card'
import Carousel from '../Carousel/Carousel'

const Section = ({data,title,type}) => {
  const [carouselToggel,setCarouselToggel]=useState(true)
  const handleToggle=()=>{
    setCarouselToggel(!carouselToggel)
  }
  return (
    <div>
      <div className={styles.header}>
        <h3>{title}</h3>
        <h4 className={styles.toggleText} onClick={handleToggle}>
          {!carouselToggel?"Collapse All":"Show All"}
          
        </h4>
        </div>
        {
          data.length===0?(
            <CircularProgress/>
          ):(
            <div className={styles.cardWrapper}>
              {
                !carouselToggel?(<div className={styles.wrapper}>{
                data.map((ele)=>{return (<Card data={ele} type={type} key={ele.id}/> )})
                }
                </div>)
                :
                (<Carousel data={data} renderComponent={(data)=><Card data={data} type={type} key={data.id}/>}/>)
              
            }
            </div>
          )
        }
      
    </div>
  )
}

export default Section
