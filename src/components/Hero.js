import React from 'react'
import './Hero.css'

function Hero() {
  return (
    <div className='body'> 

    <div className="welcome-container">
        <div className="picture-container">
            <div className="hotelpic" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/gallery4.jpg)`}}>{/*picture*/}</div>
        
        </div>

        <div className="description-container">
            <div className="header-description-container">
                <h2 className='description-header'>Welcome to Villa Kallisto</h2>
                <p className='villadesc'>Nestled in the scenic area of Corfu, Villa Kallisto embodies the perfect blend of modern
                 architecture and luxurious comfort. Every room within the villa, with its elegant design and attention to detail, offers an exceptional living experience, making it the ideal choice for those seeking modern sophistication in a serene environment.</p>

            </div>
            <div className="icons-container">
                <div className="icon-container">
                    <img src={`${process.env.PUBLIC_URL}/blueprint.png`} alt="blueprint"className='icon1' />
                    <p className='icon-description'>250 m²</p>

                </div>
                <div className="icon-container">
                <img src={`${process.env.PUBLIC_URL}/check-in.png`} alt="blueprint"className='icon1' />
                <p className='icon-description'>Sleeps 6<br></br> people</p>
                    
                </div>
                <div className="icon-container">
                <img src={`${process.env.PUBLIC_URL}/swimming-pool.png`} alt="blueprint"className='icon1' />
                <p className='icon-description'>Swimming <br></br>Pool</p>
                    
                </div>
            </div>

        </div>
    </div>

    <div className="welcome-container2">
        <div className="picture-container2">
            <div className="hotelpic2" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/gallery5.webp)`}}>{/*picture*/}</div>
        
        </div>

        <div className="description-container2">
            <div className="header-description-container2">
                <h2 className='description-header2'>This seaside villa – perfectly situated just a 30-minute drive from Corfu town and the airport – offers stunning views of the Ionian Sea.</h2>
                <p className='villadesc2'>Natural light pours through the expansive windows in the living room, guiding you to a private pool and creating a peaceful sanctuary. Furthermore, the villa's bedrooms redefine comfort, each featuring an en-suite, ensuring restful nights in luxury.</p>

            </div>
        </div>
    </div>


      
    </div>
  )
}

export default Hero
