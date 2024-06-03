import React from 'react'
import './FooterContainer.css'
const FooterContainer = (props) => {
    return (
        <div className='FooterContainer'>
            {props.children}
        </div>
    )
}

export default FooterContainer