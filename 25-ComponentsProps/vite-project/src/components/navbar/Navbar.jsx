import React from 'react'
import Logo from '../logo/Logo'
import NavList from '../navlist/NavList'
import "./Navbar.css"

const Navbar = () => {
  return (
    <div className= "navbar container">
        <Logo/>
        <NavList/>
    </div>
  )
}

export default Navbar