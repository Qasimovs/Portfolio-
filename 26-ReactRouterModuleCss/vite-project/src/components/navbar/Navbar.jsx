import React from 'react'
import NavList from '../navlist/NavList'
import Logo from '../logo/Logo'
import style from "./Navbar.module.css"

const Navbar = () => {
  return (
    <div className={`${style.nav}  container`}>
        <Logo/>
        <NavList/>
    </div>
  )
}

export default Navbar