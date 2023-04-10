import React from 'react'
import Fitnesscomp from './Fitnesscomp/Fitnesscomp'
import Advertisment from '../Home/Advertisment/Advertisment'
import fitness from '../../Details/Fitnessdata'
const Fitness = () => {
  return (
    <div>
      <h1>FITNESS</h1>
      {fitness.map((item)=>{
        return(
          <Fitnesscomp key={item.id} image={item.imageurl} name={item.name} discription={item.discription} />
        )
      })}
      <Advertisment/>
    </div>
  )
}

export default Fitness
