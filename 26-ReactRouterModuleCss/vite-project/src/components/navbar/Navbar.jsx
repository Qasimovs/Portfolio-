import React from 'react'
import NavList from '../navlist/NavList'
import Logo from '../logo/Logo'
import "./Navbar.css"

const Navbar = () => {
  return (
    <div className='nav container'>
        <Logo/>
        <NavList/>
    </div>
  )
}

export default Navbar