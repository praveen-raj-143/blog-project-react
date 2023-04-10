import React from 'react'
import './Topcomp.css'
const Topcomp = ({image, name}) => {
  return (
    <div className="container">
        <div className="topbox">
          <h3>{name}</h3>
          <div className='topbollyimg'><img src={image} alt="toppost" /></div>
        </div>
    </div>
  )
}

export default Topcomp
