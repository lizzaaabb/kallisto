import React from 'react'
import './Service.css'

function Service() {
  return (
    <div className='sbody'>

        <div className="service-container">
            <div className="service-pic" style={{backgroundImage: `url(${process.env.PUBLIC_URL}/gallery8.webp)`}}>

            </div>
            <div className="services-text">
                <p className='stitle1'>WHAT WE OFFER</p>
                <h3 className='stitle2'>Our Services</h3>
                <p className='sdesc'>Have a look on our exclusive services that will<br></br> 
                make you enjoy your stay on Corfu to the<br></br> fullest.</p>
                <p className='s1'>- Welcome Pack</p>
                <p className='s1'>- Luggage Storage</p>
                <p className='s1'>- Bed Linens & Towels </p>
                <p className='s1'>- Daily Pool Checks</p>
                <p className='s1'>- Fire Extinguisher</p>
                <p className='s1'>- First Aid Kit</p>
                <p className='s1'>- Wine Cellar (upon request)</p>
                <p className='s1'>- Baby Cot & High Chair </p>
                <p className='s1'>- Pet Bed (upon request)</p>
                <p className='s1'>- Daily Cleaning (upon request)</p>

                <p className='slink'>VIEW EXTRA SERVICES</p>

            </div>
        </div>
      
    </div>
  )
}

export default Service
