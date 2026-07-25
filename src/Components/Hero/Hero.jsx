import React from 'react'
import './Hero.css'
import hand_icon from '../Assets/hand_icon.jpeg'
import arrow_icon from '../Assets/arrow_icon.jpg'
import hero_image from '../Assets/Hero_image.jpg' 


const Hero = () => {
  return (
    <div className='hero'>
        <div className='hero-left'>
           <h2> OUR RECENT COLLECTIONS ONLY</h2>
           <div>
             <div className='hero-hand-icon'>
                <p>new</p>
                <img src={hand_icon} alt=''/>
             </div>
             <p>Designs that Reflect Your Essence</p>
           </div>
           <div className='hero-latest-btn'>
             <div>Latest Collection</div>
             <img src={arrow_icon} alt=''/>
           </div>
    
        </div>
        <div className='hero-right'>
            <img src={hero_image} alt=''/>

        </div>

    </div>
  )
}
export default Hero;