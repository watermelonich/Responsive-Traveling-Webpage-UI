import React, { useState } from 'react'
import './Navbar.css'

// Imported Logos
import {BiLogoMediumOld} from 'react-icons/bi'
import {AiFillCloseCircle} from 'react-icons/ai'
import {PiDotsNineBold} from 'react-icons/pi'

const Navbar = () => {

  const [navBar, setnavBar] = useState("menu");

  const showNavBar = () => {
    setnavBar('menu showNavBar')
  };

  const removeNavBar = () => {
    setnavBar("menu")
  };

  return (
    <div className='navBar'>
      <div className="logoDiv">
        <BiLogoMediumOld className='icon'/>
        <span>OU-TRIPS</span>
      </div>
      
      <div className={navBar}>
        <ul>
          <li className='navList'>Destination</li>
          <li className='navList'>About Us</li>
          <li className='navList'>Testimonial</li>
          <li className='navList'>Gallery</li>
        </ul>

        {/* Icons to Close Navbar */}
        <AiFillCloseCircle className="icon closeIcon" onClick={removeNavBar}/>
      </div>
      <button className="signUpBtn btn">SignUp</button>
      {/* Icons to Toogle Navbar */}
      <PiDotsNineBold className="icon menuIcon" onClick={showNavBar} />
    </div>
  )
}

export default Navbar