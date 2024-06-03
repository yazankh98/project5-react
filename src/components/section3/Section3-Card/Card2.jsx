import React from 'react'
import './Card2.css'
const Card2 = (props) => {
    return (
        <div className='card2'>
            <div className='Card2-img'>
                <img className='card2-img-bg' src={props.img} alt="" />
                <img className='swis' src={props.flag} alt="" />
            </div>
            <div className="title">
                <div className="title-left">
                    {<i className="fa-solid fa-calendar"></i>}
                    <p>{props.days} days</p>
                </div>
                <div className="title-right">
                    {<i className="fa-regular fa-user"></i>}
                    <p>{props.count} People going</p>
                </div>
            </div>
            <div className="nameCountry">
                <h2>
                    {props.countryName}
                </h2>
                <div className="stars">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                </div>

            </div>
            <p className='desc'>{props.des}</p>
            <button className='exploerNow' >Explore Now</button>
        </div>
    )
}

export default Card2