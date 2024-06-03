import React from 'react'
import './AboutSection1.css'
const AboutSection1 = ({title , title1 ,description ,btn , img}) => {
    return (
        <div>
            <div className="AboutSection1Container">
                <div className="AboutSection1Left">
                    <p className='Promotion' >{title}</p>
                    <h1>{title1}</h1>
                    <p className='Et' >{description}</p>
                    <button className='AboutSection1Btn' >{btn}</button>
                </div>
                <div className="AboutSection1Right">
                <img src={img} alt="" />
                </div>
            </div>
        </div>
    )
}

export default AboutSection1
