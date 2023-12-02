import React from 'react'
import './NewsLetter.css'

const NewLetter = () => {
  return (
    <div className='newsletter'>
      <div>
      <h1>Get Exclusive Offers On Your Email</h1>
        <p>Subscribe to our newletter and stay updated</p>
        <div className='img'>
          <input type="email" placeholder='Your Email Adress' />
          <button>Subscribe</button>
        </div>
        </div>

    </div>
  )
}

export default NewLetter