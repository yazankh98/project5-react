import React from 'react'
import './Footer.css'
const Footer = () => {
    return (
        <div className='Footer'>
            <div className="Footer-left">
                <img src="./img/FooteLogo.png" alt="" />
                <p>Travel helps companies manage payments easily.</p>
                <div className="Footer-icons">
                    <img src="./img/linkdin.png" alt="" />
                    <img src="./img/messenger.png" alt="" />
                    <img src="./img/twitter.png" alt="" />
                    <img src="./img/twoo.png" alt="" />
                </div>
            </div>
            <div className="Footer-middle">
                <h2>Company</h2>
                <p>About Us</p>
                <p>Careers</p>
                <p>Blog</p>
                <p>Pricing</p>
            </div>
            <div className="Footer-right">
                <h2>Destinations</h2>
                <p>Maldives</p>
                <p>Los Angelas</p>
                <p>Las Vegas</p>
                <p>Torronto</p>
            </div>


        </div>
    )
}

export default Footer