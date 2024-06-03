import React from 'react'
import './NavBarstyle.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
const NavBar = ({ menu, btn, img }) => {
    const [showMenu, setshowMenu] = useState(true)
    return (
        <div className='NavBar'>
            <img className='logo' src={img} alt="" />
            <button onClick={()=> {setshowMenu(!showMenu)}}  className='menu' ><img src="/img/Menu.png" alt="" /></button>
            <div className="pages"   >
            <ul>
                <button onClick={()=> {setshowMenu(!showMenu)}} className='exit' ><img src="/img/exit.png" alt="" /></button>
                {
                    menu.map((Element, index) => {
                        return <li key={index}><Link to={Element.path} > {Element.title} </Link></li>
                    })}
                    <button className='getInTouch' >{btn}</button>
                    
            </ul>
            </div>
            <div className="NavBarMobile">
            
            <div className="pages" style={{display: (showMenu) ? "none" : "block"}}  >
            <ul>
                <button onClick={()=> {setshowMenu(!showMenu)}} className='exit' ><img src="/img/exit.png" alt="" /></button>
                {
                    menu.map((Element, index) => {
                        return <li key={index}><Link to={Element.path} > {Element.title} </Link></li>
                    })}
                    <button className='getInTouch' >{btn}</button>
                    
            </ul>
            </div>
            </div>
        </div>
    )
}

export default NavBar
