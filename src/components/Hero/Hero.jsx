import React from 'react'
import styles from "./Hero.module.css"
import {ReactComponent as HeroImg} from "../../assets/HeroImg"

const Hero = () => {
  return (
    <div>
        <div>
            <h1></h1>
        </div>
        <div>
            <img width={212} src={HeroImg} alt="Headphone" />
        </div>
      
    </div>
  )
}

export default Hero
