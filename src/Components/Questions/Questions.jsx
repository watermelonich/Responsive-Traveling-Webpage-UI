import React, { useState , useEffect} from 'react'
import './Questions.css'
import Accordion from './Accordion'

import Aos from 'aos'
import 'aos/dist/aos.css'

const Questions = () => {
  useEffect(()=>{
    Aos.init({duration: 2000})
  },[])
  const [active,setActive] = useState("How do i choose the right destination for me?");
  return (
    <div className="questions section container">
      <div className="secHeading">
        <h3 data-aos='fade-up'>Frequently Asked Question</h3>
      </div>
      <div className="secContainer grid">
        <div className="accordion grid">
          <Accordion title="How do i choose the right destination for me?" desc="Consider Your Interest,Budget,desired experiences, and the type of environment you enjoy.
            Research destinations that align with your preferences and offer abstractions or activities you find appealing." 
            active={active} 
            setActive={setActive}/>
          <Accordion title="How much money do i need to travel to some destination?" desc="Consider Your Interest,Budget,desired experiences, and the type of environment you enjoy.
            Research destinations that align with your preferences and offer abstractions or activities you find appealing." 
            active={active} 
            setActive={setActive}/>
          <Accordion title="What are the best times to visit specific destinations?" desc="Consider Your Interest,Budget,desired experiences, and the type of environment you enjoy.
            Research destinations that align with your preferences and offer abstractions or activities you find appealing." 
            active={active} 
            setActive={setActive}/>
          <Accordion title="What essentials item should i pack for my trip" desc="Consider Your Interest,Budget,desired experiences, and the type of environment you enjoy.
            Research destinations that align with your preferences and offer abstractions or activities you find appealing." 
            active={active} 
            setActive={setActive}/>
          </div>
        <div className="form">
          <div className="secHeading">
            <h4 data-aos='fade-up'>Do you have any question?</h4>
            <p data-aos='fade-up'>
              Please Fill The Form Below and our dedicated team
              will get intouch as soon as possible
            </p>
          </div>

          <div className="formContent grid">
            <input type="email" placeholder='Enter email address 'data-aos='fade-up'/>
            <textarea placeholder='Enter Your Question here' data-aos='fade-up'></textarea>
            <button className="btn" data-aos='fade-up'>Submit Inquery</button>
          </div>
        </div>
      </div>
    </div>
    )
}

export default Questions