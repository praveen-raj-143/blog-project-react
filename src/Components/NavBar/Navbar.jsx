import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'
const Navbar = () => {
  return (
    <div>
      <ul className='Nav'>
        <li><NavLink to='/' className={({isActive})=>(isActive ? 'active-class' : 'notactive-class')}>HOME</NavLink></li>
        <li><NavLink to='/bollywood' className={({isActive})=>(isActive ? 'active-class' : 'notactive-class')}>BOLLYWOOD</NavLink></li>
        <li><NavLink to='/hollywood' className={({isActive})=>(isActive ? 'active-class' : 'notactive-class')}>HOLLYWOOD</NavLink></li>
        <li><NavLink to='/technology' className={({isActive})=>(isActive ? 'active-class' : 'notactive-class')}>TECHNOLOGY</NavLink></li>
        <li><NavLink to='/fitness' className={({isActive})=>(isActive ? 'active-class' : 'notactive-class')}>FITNESS</NavLink></li>
        <li><NavLink to='/food' className={({isActive})=>(isActive ? 'active-class' : 'notactive-class')}>FOOD</NavLink></li>
        </ul>
    </div>
  )
}

export default Navbar
