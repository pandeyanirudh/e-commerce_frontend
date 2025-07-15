import React from 'react'
import './footer.css'
import { assets } from '../../assets/assets'

// first well mount this footer component into app component
const footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer_content">
            <div className='footer_content_left'>
                {/* <img src={assets.logo} alt="" /> */}
                <h2>Book Now</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cum maxime tenetur iste, doloribus commodi, ut architecto deleniti, vero maiores aliquid cumque minus praesentium ipsum quae harum dolor iure. Fugiat, deserunt.</p>
                <div className="footer_social_icon">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className='footer_content_center'>
                <h2>Company</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>
            </div>
            <div className='footer_content_right'>
                <h2>Get in Touch</h2>
                <ul>
                    <li>+91-999999999</li>
                    <li>bookNow@bookNow.com</li>
                </ul>
            </div>
        </div>
        <hr />
        <p className="footer_copyright">Copyright 2025 bookNow.com - ALL RIGHT RESERVED</p>
    </div>
  )
}

export default footer