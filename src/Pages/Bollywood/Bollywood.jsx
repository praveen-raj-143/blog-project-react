import React from 'react'
import Bollycomp from './Bollycomp/Bollycomp'
import Advertisment from '../Home/Advertisment/Advertisment'
import { Name } from '../../Details/Details'
const Bollywood = () => {
  return (
    <>
    <h1>MOVIES</h1>
      {Name.map((item)=>{
        return(
          <Bollycomp key={item.id} image={item.imageurl} name={item.name} discription={item.discription} />
        )
      })}
      <Advertisment/>
      
    </>
  )
}

export default Bollywood
