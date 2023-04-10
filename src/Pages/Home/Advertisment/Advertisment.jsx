import React from 'react'
import './Advertisment.css'
import Topcomp from '../../Bollywood/TopComp/Topcomp';
import top from '../../../Details/Topdata';
const Advertisment = () => {
  return (
    <div className='toppos'>
      <div className='add' >
   <div className='rot'><h2>Advertisment</h2></div>
  </div>
  <h1>Top Posts</h1>
  {top.map((item)=>{
        return(
          <Topcomp key={item.id} image={item.imageurl} name={item.name} />
        )
      })}
    </div>
  )
}

export default Advertisment
