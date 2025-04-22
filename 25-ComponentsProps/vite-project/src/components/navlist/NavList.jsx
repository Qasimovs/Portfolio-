import React from 'react'
import "./NavList.css"

const NavList = () => {
  return (
    <div>
        <ul className="ullist">
            <li className='list'><a href="#">SERVICES</a></li>
            <li className='list'><a href="#">PORTFOLIO</a></li>
            <li className='list'><a href="#">ABOUT</a></li>
            <li className='list'><a href="#">TEAM</a></li>
            <li className='list'><a href="#">CONTACT</a></li>
        </ul>
    </div>
  )
}

export default NavList