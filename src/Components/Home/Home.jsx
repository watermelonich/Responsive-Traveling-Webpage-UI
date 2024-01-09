import React, {useEffect} from 'react'
import './Home.css'

//Imported Assets
import Video from '../../Assets/Video.mp4'
import img2 from '../../Assets/img2.jpg'
import img3 from '../../Assets/img3.jpg'
import img4 from '../../Assets/img4.jpg'
import img5 from '../../Assets/img5.jpg'

import Aos from 'aos'
import 'aos/dist/aos.css'

//Imported Icons
import { AiOutlineSwapRight } from 'react-icons/ai'

const Home = () => {
  useEffect(()=>{
    Aos.init({duration: 2000})
  },[])
    return <div className='Home'>
      <div className="videoBg">
        <video src={Video} autoPlay loop muted></video>
      </div>

      <div className="sectionText">
        <h1 data-aos='fade-up'>Unlock Your Travel Dreams With Us!</h1>
        <p data-aos='fade-up'>
          Discover the World's Most Adventurous nature,
          life is so short for a trip
        </p>
        <button className='btn flex' data-aos='fade-up'>
          GET STARTED<AiOutlineSwapRight className='icon'/>
        </button>
      </div>

      <div className="popularPlaces">
        <div className="content">
          <h3 data-aos='fade-up'>Popular Places</h3>
          <div className="images flex" data-aos='fade-up'>
            <img src={img2} alt="Destination Images" />
            <img src={img3} alt="Destination Images" />
            <img src={img4} alt="Destination Images" />
            <img src={img5} alt="Destination Images" />
          </div>
        </div>
      </div>
    </div>
  
}

export default Home