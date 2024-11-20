import React from 'react'
import './Explore.css'

function Explore() {
  return (
    <div className='body'>

        <div className="explore-container" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/gallery6.jpg)`}}>
            <div className="explore-description">
                <p className='title1'>VILLA’S GALLERY</p>
                <h3 className='title2'>Explore the Villa</h3>
                <p className='title3'>Explore every corner of Villa Kallisto, a functional<br></br>
                 accommodation with high-aesthetic features<br></br> and modern design.</p>
                 <a href="#" className='title4'>View Gallery</a>
            </div>
        </div>
      
    </div>
  )
}

export default Explore

