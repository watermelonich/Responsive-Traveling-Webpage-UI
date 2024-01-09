import React, {useEffect} from 'react'
import './Destinations.css'

//Imported Icons
import { MdLocationPin } from 'react-icons/md'
import { BsFillCreditCardFill } from 'react-icons/bs'
import { BsFillCalendarDateFill } from 'react-icons/bs'
import { BiSearchAlt } from 'react-icons/bi'
import { TiLocation } from 'react-icons/ti'

import Aos from 'aos'
import 'aos/dist/aos.css'

//Imported Images
import img1 from '../../Assets/img1.jpg'
import img2 from '../../Assets/img2.jpg'
import img3 from '../../Assets/img3.jpg'
import img4 from '../../Assets/img4.jpg'
import img5 from '../../Assets/img5.jpg'
import img6 from '../../Assets/img6.jpg'
import img7 from '../../Assets/img7.jpg'
import img8 from '../../Assets/img8.jpg'


//array to contain all destinations data and loop trough

const destinations = [
  {
    id: 1,
    img: img1,
    name: 'Cancun Delfines',
    location: 'Merseyside',
    rating: 4.7,
  },
  {
    id: 2,
    img: img2,
    name: 'The Azores',
    location: 'Portugal',
    rating: 4.9,
  },
  {
    id: 3,
    img: img3,
    name: 'Arashiyama Bamboo Grove',
    location: 'Japan',
    rating: 4.2,
  },
  {
    id: 4,
    img: img4,
    name: 'Na Pali Coast',
    location: 'Hawaii',
    rating: 4.8,
  },
  {
    id: 5,
    img: img5,
    name: 'Reynsjifra',
    location: 'Iceland',
    rating: 4.6,
  },
  {
    id: 6,
    img: img6,
    name: 'Capri Matadoria',
    location: 'Italy',
    rating: 4.3,
  },
  {
    id: 7,
    img: img7,
    name: 'Cappadocia',
    location: 'Turkey',
    rating: 4.8,
  },
  {
    id: 8,
    img: img8,
    name: 'Angel Fallas',
    location: 'Venezuela',
    rating: 3.7,
  },
];

const Destinations = () => {
  useEffect(()=>{
    Aos.init({duration: 2000})
  },[])
  return (
    <div className='destinations section container'>
      <div className="secContainer">
        <div className="secTitle">
          <span className="redText" data-aos='fade-up'>Explore Now</span>
          <h3 data-aos='fade-up'>Find Your Destination</h3>
          <p data-aos='fade-up'>Fill in the fields below to find the best place for your trip</p>
        </div>
        <div className="searchfield grid">

          <div className="inputfield flex" data-aos='fade-up'>
            <MdLocationPin className='icon'/>
            <input type="text" placeholder='Location' />
          </div>

          <div className="inputfield flex" data-aos='fade-up'>
            <BsFillCreditCardFill className='icon'/>
            <input type="text" placeholder='Budget' />
          </div>

          <div className="inputfield flex" data-aos='fade-up'>
            <BsFillCalendarDateFill className='icon'/>
            <input type="text" placeholder='Date' />
          </div>

          <button className="btn flex" data-aos='fade-up'>
          <BiSearchAlt className='icon'/>Search
          </button>
        </div>

        <div className="secMenu">
          <ul className="flex" data-aos='fade-up'>
            <li className="active">All</li>
            <li>Recommend</li>
            <li>Beach</li>
            <li>Sea</li>
            <li>Nature</li>
            <li>Mountain</li>
          </ul>
        </div>
        
        <div className="destinationContainer grid">
          {destinations.map(destination =>{
            return(
              <div className="singleDestination" key={destination.id} data-aos='fade-up'>
              <div className="imgDiv" data-aos='fade-up'>
                <img src={destination.img} alt="Destination Image" />
                <div className="descInfo flex">
                  <div className="text">
                    <span className="name">{destination.name}</span>
                    <p className='flex'>
                      <TiLocation className="icon"/>{destination.location}
                    </p>
                  </div>
                  <span className="rating">
                  {destination.rating}
                  </span>
                </div>
              </div>
            </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default Destinations