import React from 'react'
import './Footer.css'

function Footer() {
  return (
    <div className='footer-body'>

        <div className="footer-container">
            <div className="logo-container">

            <p className='footer-title'>KALLISTO</p>
            <p className='footer-description'>OASIS BREEZE BY THE SEA</p>
            </div>

            <div className="links-container">
                <p className='link-footer'>Home</p>
                <p className='link-footer'>Gallery</p>
                <p className='link-footer'>Contact</p>
                <p className='link-footer'>Privacy Policy</p>
                <p className='link-footer'>Terms & Conditions</p>

            </div>

            <div className="insta-container">
            <img src={`${process.env.PUBLIC_URL}/footer.png`} alt="instagram logo" className='footer-logo' />
            </div>

            <div className="copyright-container">
                <div className="line"></div>
                <div className="copyright">
                    <p className='ctext'>Copyright 2024 ©VILLA THINALO | All Rights Reserved</p>
                    <p className='ctext'>Designed & Developed by lorem</p>
                </div>

            </div>

        </div>
      
    </div>
  )
}

export default Footer
