import React from 'react'
import style from "./NavList.module.css"
import { Link } from "react-router-dom";

const NavList = () => {
  return (
    <div>
      <ul className={style.lists}>
        <li className='list'><Link to={"/"} >Home</Link></li>
        <li className='list'><Link to={"/about"}>About</Link></li>
        <li className='list'><Link to={"/contact"}>Contact</Link></li>
        <li className='list'><Link to={"/services"}>Services</Link></li>
      </ul>
    </div>
  )
}

export default NavList