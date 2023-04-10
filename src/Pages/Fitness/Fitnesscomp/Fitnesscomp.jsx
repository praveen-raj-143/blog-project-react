import React from 'react'
import './Fitnesscomp.css'
import {Link} from 'react-router-dom'
const Fitnesscomp = ({image, name, discription}) => {
 
  return (
       <div className='box'>
        <Link to="/article"><div className='bollyimg '><img src={image} alt="fitness" /></div></Link>
          <div className='bollytxt'>
            <h2>{name}</h2>
            <p>{discription}</p>
          </div>
        </div>
  )
}

export default Fitnesscomp