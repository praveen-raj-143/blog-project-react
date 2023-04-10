import React from 'react'
import Foodcomp from './Foodcomp/Foodcomp'
import Advertisment from '../Home/Advertisment/Advertisment'
import food from '../../Details/Fooddata'
const Food = () => {
  return (
    <div>
      <h1>FOOD</h1>
      {food.map((item)=>{
        return(
          <Foodcomp key={item.id} image={item.imageurl} name={item.name} discription={item.discription} />
        )
      })}
      <Advertisment/>
    </div>
  )
}

export default Food
