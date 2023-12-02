import React from 'react'
import './Footer.css'
import { FaPinterestSquare, FaInstagramSquare, FaWhatsappSquare } from "react-icons/fa";
import footer_logo from '../Assets/logo_big.png'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={footer_logo} alt="" />
            <p>SHOOPER</p>
        </div>
        <ul className="footer-links">
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className="footer-react-icon">
            <FaPinterestSquare size={40}/> 
            <FaInstagramSquare size={40}/>
           <FaWhatsappSquare size={40}/> 
        </div>
            

        
        <div className="footer-copyright">
            <hr/>
            <p>Copyright @ 2023 - All Right Reserved</p>
        </div>
    </div>
  )
}

export default Footer