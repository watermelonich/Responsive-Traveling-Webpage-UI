import React, {useEffect} from 'react'
import './Portfolio.css'

import Aos from 'aos'
import 'aos/dist/aos.css'

//Import Assets
import icon1 from '../../Assets/icon1.png'
import icon2 from '../../Assets/icon2.png'
import icon3 from '../../Assets/icon3.png'
import image from '../../Assets/gridimage.jpg'


const Portfolio = () => {
  useEffect(()=>{
    Aos.init({duration: 2000})
  },[])
  return (
    <div className='portfolio section container'>
      <div className="secContainer grid">
        <div className="leftContent">
          <div className="secHeading">
            <h3 data-aos='fade-up'>Why Should You Choose Us</h3>
            <p data-aos='fade-up'>
              we have extensive knowledge and experience in travel industry.
            </p>
          </div>

          <div className="grid">
            <div className="singlePortfolio flex" data-aos='fade-up'>
              <div className="iconDiv">
                <img src={icon1} alt="Icon Image" />
              </div>

              <div className="infor">
                <h4 data-aos='fade-up'>Safety And Support</h4>
                <p data-aos='fade-up'>
                  Our top priority is the safety andwell-being of our clients.
                  We maintain high safety standards and have emergency support
                  available during the trip.
                </p>
              </div>
            </div>
            

            <div className="singlePortfolio flex" data-aos='fade-up'>
              <div className="iconDiv">
                <img src={icon2} alt="Icon Image" />
              </div>

              <div className="infor">
                <h4 data-aos='fade-up'>24/7 Customer Supportt</h4>
                <p data-aos='fade-up'>
                  Our Dedicated Customer Support Team is available round the clock
                  to address any queries or concerns before,during and after the trip.
                </p>
              </div>
            </div>

            <div className="singlePortfolio flex" data-aos='fade-up'>
              <div className="iconDiv">
                <img src={icon3} alt="Icon Image" />
              </div>

              <div className="infor">
                <h4 data-aos='fade-up'>Diverse Range Of Destination</h4>
                <p data-aos='fade-up'>
                  Whether its a domestic or internasional tour we cover a wide range of direction to cater
                  to different interest and preferences.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="rightContent" data-aos='fade-down'>
          <img src={image} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Portfolio