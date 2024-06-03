import React from 'react'
import './Section2.css'
const Section2 = () => {
    return (
        <div className='Section2'>
            <div className="Section2-left">

                <img src="./img/sec2-1.png" alt="" />

                <div className='section2-Bg'> </div>

                <div className="Section2-left-details">
                    <p>Promotion</p>
                    <h1>Explore Nature</h1>
                    <a href="#"><span>View Packages</span></a>
                </div>
            </div>
            <div className="section2-right">
                <img src="./img/sec2-2.png" alt="" />
                <div className='section2-Bg'> </div>
                <div className="Section2-right-details">
                    <p>Promotion</p>
                    <h1>Explore Nature</h1>
                    <a href="#"><span>View Packages</span></a>
                </div>
            </div>
        </div>
    )
}

export default Section2