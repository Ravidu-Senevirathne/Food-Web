import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer'id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
            <h1 className='logo'>FOOD.LK</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis dolore quae voluptatem iusto quo soluta exercitationem mollitia suscipit quam maxime? Magni excepturi iusto at ea, voluptatum labore voluptate iste harum?</p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
            </div>
            <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
              <li>Home</li>
              <li>About us</li>
              <li>Delivery</li>
              <li>Privacy policy</li>  
            </ul>
            </div>
            <div className="footer-content-right">
                <h2>Get In Touch</h2>
                <ul>
                    <li>0720181875</li>
                    <li>senevirathneravidu@gmail.com</li>
                </ul>
            </div>

        </div>
        <hr />
        <p className="footer-copyright">© 2024 Ravidu. All rights reserved.</p>

    </div>
  )
}

export default Footer