import React from 'react'
import './AboutSection3.css'
const AboutSection3 = ({ title, title1, description, img }) => {
    return (
        <div>
            <div className="AboutSection3Container">
                <div className="AboutSection3Left">
                    <img src={img} alt="" />
                </div>
                <div className="AboutSection3Right">
                    <p className='AboutSection3Title' >{title}</p>
                    <h1>{title1}</h1>
                    <p className='AboutSection3Des' >{description}</p>
                    <div className="AboutSection3Percent">
                        <div className="AboutSection3PercentLeft">
                            <h2>78%</h2>
                            <p>Vacations</p>
                        </div>
                        <div className="AboutSection3PercentRight">
                        <h2>55%</h2>
                        <p>Honeymoon</p>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default AboutSection3