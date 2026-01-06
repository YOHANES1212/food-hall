import React from 'react'
import "./Footer.css"
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum ducimus deleniti voluptatem, voluptate iste officiis animi eveniet enim! Enim dicta dignissimos magnam asperiores ad consectetur nobis neque quasi blanditiis ullam.</p>
                <div className="footer-social-icon">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon_} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>Get In Touch</h2>
                <ul>
                    <li>+08-571-900-213</li>
                    <li>contact@foodhall.com</li>
                </ul>
            </div>    
        </div>
        <hr />
        <p className="footer-copyright">
            Copyright © 2025 Food Hall. All Rights Reserved.
        </p>
    </div>
  )
}

export default Footer