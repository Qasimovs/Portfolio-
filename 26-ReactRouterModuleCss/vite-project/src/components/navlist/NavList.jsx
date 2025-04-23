import React from 'react'
import "./NavList.css"
import { Link } from "react-router-dom";

const NavList = () => {
  return (
    <div>
        <ul className='lists'>
            <li className='list'> <Link to="/" >Home</Link></li>
            <li className='list'><Link to="/about">About</Link>About</li>
            <li className='list'><Link to="/contact">Contact</Link></li>
            <li className='list'><Link to="/services">Services</Link></li>
        </ul>
    </div>
  )
}

export default NavList