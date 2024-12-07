import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'
export default function Navbar() {

  console.log("Navbar");
  
  return (
    <div id='navbar'>

      <NavLink to={'/home'}>Home</NavLink>
      <NavLink to={'/about'}>About</NavLink>
      <NavLink to={'/contact'}>Contact</NavLink>
      <NavLink to={'/login'}>Login</NavLink>
    </div>
  )
}
