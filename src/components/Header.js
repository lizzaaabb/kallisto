import React from 'react'
import { useState } from 'react'; 
import './Header.css'

export default function Header() {


    const [isOpen, setIsOpen] = useState(false);

    // Toggle function for the hamburger menu
    const toggleMenu = () => {
      setIsOpen(!isOpen); // Flip the state value
    };

  return (
    <div className='body'>



        <div className="header-container">
            <div className="logo-container">
                <img src="diamondwhite.png" alt="diamond logo" className='header-logo' />
            </div>

            <div className="headerTitle-container">

                <p className='header-title'>KALLISTO</p>
                <p className='title-description'>OASIS BREEZE BY THE SEA</p>

                </div>


            <div className="menu-container">
                <div className="forcontact"><p className='contact'>CONTACT US</p></div>
                <div className="formenu">
                    <div className={`hamburger ${isOpen ? 'open' : ''}`} id="hamburger-icon" onClick={toggleMenu}>
                              <div className="bar"></div>
                              <div className="bar"></div>
                    </div>
                </div>
            </div>
        </div>


        <div className="sidebar-container"  style={{
                                                    transform: isOpen ? 'translateX(0)' : 'translateX(-100%)',
                                                    opacity: isOpen ? 1 : 0,
                                                    pointerEvents: isOpen ? 'auto' : 'none', // Prevent clicks when hidden
                                                    }}>

            <div className="sidebar-menu">

                <div className="sidebarlogo-container">

                  <img src="diamond.png" alt="diamond logo" className='sidebar-logo'/>
                  <div className="sidebartitle-container">
                    <p className='sidebar-title'>KALLISTO</p>
                    <p className='sidebar-description'>OASIS BREEZE BY THE SEA</p>
                 </div>

                </div>

                <div className="sidebarlists">
                    <div className="links">
                    <a className='link'>HOME</a>
                    <a className='link'>GALLERY</a>
                    </div>
                </div>

                <div className="line">

                </div>

                <div className="terms-container">
                    <a href="" className='term'>Terms & Conditions</a>
                    <a href="" className='term'>Privacy Policy</a>

                </div>

                <div className="social-container">

                    <p className='social'>Follow us on social media</p>
                    <img src="instaicon1.png" alt="social media" className='instaicon' />

                </div>

            </div>



        </div>





      
    </div>
  )
}
