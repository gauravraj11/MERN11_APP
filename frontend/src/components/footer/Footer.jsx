import React from 'react'
import './Footer.css'
import { NavLink } from 'react-router-dom'

export default function Footer() {

  console.log("Footer");
  
  return (
    <div id='footer'>
      <NavLink to={'/home'}>Home</NavLink>
      <NavLink to={'/about'}>About</NavLink>
      <NavLink to={'/contact'}>Contact</NavLink>
      <NavLink to={'/login'}>Login</NavLink>

    </div>
  )
}
