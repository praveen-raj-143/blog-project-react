import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../Pages/Home/Home'
import Bollywood from '../Pages/Bollywood/Bollywood'
import Hollywood from '../Pages/Hollywood/Hollywood'
import Technology from '../Pages/Technology/Technology'
import Fitness from '../Pages/Fitness/Fitness'
import Food from '../Pages/Food/Food'
import Article from '../Pages/Article/Article'
const Routfile = () => {
  return (
    
    <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/bollywood' element={<Bollywood/>} />
      <Route path='/hollywood' element={<Hollywood/>} />
      <Route path='/technology' element={<Technology/>} />
      <Route path='/fitness' element={<Fitness/>} />
      <Route path='/food' element={<Food/>} />
      <Route path='/article' element={<Article/>}/>
    </Routes>
    
  )
}

export default Routfile
