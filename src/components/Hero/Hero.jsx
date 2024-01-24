import React from 'react'
import styles from "./Hero.module.css"
import HeroImg from "../../assets/HeroImg.png"

const Hero = () => {
  return (
    <div className={styles.hero}>
        <div >
            <h1>100 Thousand Songs, ad-free</h1>
            <h1>Over thousands podcast episodes</h1>
        </div>
        <div>
            <img width={212}  src={HeroImg} alt="Headphone" />
        </div>
      
    </div>
  )
}

export default Hero
