import React, {useEffect} from 'react'
import './Reviews.css'

//Imported Icons
import { AiFillStar } from 'react-icons/ai'

import Aos from 'aos'
import 'aos/dist/aos.css'

//Import Image
import client1 from '../../Assets/client1.jpg'
import client2 from '../../Assets/client2.jpg'
import client3 from '../../Assets/client3.jpg'
import client4 from '../../Assets/client4.jpg'
import image from '../../Assets/img1.jpg'

const Reviews = () => {
  useEffect(()=>{
    Aos.init({duration: 2000})
  },[])
  return (
    <div className="review section container">
    <div className="secContainer grid">
      <div className="textDiv">
        <span className="redText" data-aos='fade-up'>FROM OUR CLIENTS</span>
          <h3 data-aos='fade-up'>
            Real Travel History From Our Beloved Clients
          </h3>
          <p data-aos='fade-up'>
            By Choosing us as their tour agency, costumers can expect an enriching and enjoyable Travel
            Experience, filled with unforgettable memories that will last a lifetime
          </p>

          <span className="stars flex" data-aos='fade-right'>
            <AiFillStar className='icon'/>
            <AiFillStar className='icon'/>
            <AiFillStar className='icon'/>
            <AiFillStar className='icon'/>
            <AiFillStar className='icon'/>
          </span>

          <div className="clientImages flex" data-aos='fade-up'>
            <img src={client1} alt="" />
            <img src={client2} alt="" />
            <img src={client3} alt="" />
            <img src={client4} alt="" />
          </div>
      </div>
      <div className="imgDiv" data-aos='fade-down'>
        <img src={image} alt="" />
      </div>
    </div>
    </div>

  )
}

export default Reviews