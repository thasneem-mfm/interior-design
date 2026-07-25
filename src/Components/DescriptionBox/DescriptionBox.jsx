import React from 'react'
import './DescriptionBox.css'


 const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className='descriptionbox-navigator'>
             <div className='descriptionbox-nav-box'>Description</div>
             <div className='descriptionbox-nav-box fade'>Reviews(122)</div>
        </div>
      <div className='descriptionbox-description'>
        <p>Bring Your Dream Space to Life with Our Interior Design Services
           We don’t just design spaces — we create experiences tailored to your lifestyle.
           Whether you're renovating your home, designing a new office, or simply upgrading your space,
           our expert team is here to guide you every step of the way. From personalized consultations to professional execution,
            we offer top-notch design solutions that suit your budget and taste. Let’s work together to transform your vision into 
            reality — contact us today for a free consultation!</p>
            <p>Designed by Experts, Inspired by You
               Our creative team carefully plans every space by understanding your lifestyle and preferences.
             From concept to completion, we work closely with you to deliver personalized designs that reflect your taste,
              ensuring every corner feels truly yours.</p>
      </div>

    </div>
  )
}
export default DescriptionBox
