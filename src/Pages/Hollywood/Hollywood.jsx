import React from 'react'
import Hollycomp from './Hollycomponent/Hollycomp'
import Advertisment from '../Home/Advertisment/Advertisment'
import { Data } from '../../Details/Hollydetails'
const Hollywood = () => {
  return (
    <div>
      <h1>MOVIES</h1>
      {Data.map((item)=>{
        return(
          <Hollycomp key={item.id} image={item.imageurl} name={item.name} discription={item.discription} />
        )
      })}
      <Advertisment/>
    </div>
  )
}

export default Hollywood
