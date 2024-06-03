import React from 'react'
import './PackagesHero.css'
const PackagesHero = ({ img, title }) => {
    return (
        <div>
            <div className='PackagesHero' >
                <img src={img} alt="" />

                <h1>{title}</h1>
            </div>
            </div>
            )
}

            export default PackagesHero