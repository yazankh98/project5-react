import React from 'react'
import './Section1-Container.css'
const Section1_Container = (props) => {
  return (
    <div className='Section1_Container'>
      {props.children}
    </div>
  )
}

export default Section1_Container