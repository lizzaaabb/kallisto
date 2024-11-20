import React from 'react'
import './Contact.css'

function Contact() {
  return (
    <div className='contact-body'>

        <div className="contact-container">
            <div className="left-pic" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/capture.jpg)`}}>
            </div>

            <div className="contact-form">
                <h3 className='ctitle1'>Contact Us</h3>
                <p className='cdesc'>We are looking forward to<br></br> 
                welcoming you at our villa. <br></br> 
                Please contact us for further <br></br> 
                information.</p>

                <p className='email'>Email</p>
                <p className='info'>Info@villakallisto.com</p>

                <p className='phoneinfo'>Phone</p>
                <p className='phone'>(+30) 123 456 789</p>

                <p className='address'>Address</p>
                <p className='adinfo'>Corfu Greece</p>

                <p className='map'>FIND US ON MAP</p>

            </div>

            <div className="right-pic"  style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/gallery3.jpg)`}}>
            </div>
        </div>

      
    </div>
  )
}

export default Contact
