import React, {useEffect} from 'react'
import './Subscribe.css'

import image from '../../Assets/subs.png'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Subscribe = () => {
  useEffect(()=>{
    Aos.init({duration: 2000})
  },[])
  return (
    
    <div className="subscribe section container">
      <div className="secContainer grid" data-aos='fade-down'>
        <img src={image} alt="" />

        <div className="textDiv">
        <h4 data-aos='fade-up'>Best Way To Start Your Journey!</h4>
        <p data-aos='fade-up'>
          We Are Personalized itineraries tailored to individual preferences and interests.
        </p>
        <button className="btn" data-aos='fade-up'>Start Here</button>
      </div>
      </div>
    </div>
    )
}

export default Subscribe