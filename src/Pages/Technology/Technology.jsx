import React from 'react'
import Techcomp from './Techcomp/Techcomp'
import Advertisment from '../Home/Advertisment/Advertisment'
import Drift from '../../Details/Techdata'
const Technology = () => {
  return (
    <div>
      <h1>TECHNOLOGY</h1>
      {Drift.map((item)=>{
        return(
          <Techcomp key={item.id} image={item.imageurl} name={item.name} discription={item.discription} />
        )
      })}
      <Advertisment/>
    </div>
  )
}

export default Technology
