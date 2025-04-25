import React from 'react'
import Navbar from '../navbar/Navbar'
import style from"./Header.module.css"

const Header = () => {
  return (
    <div className={style.header}>
        <Navbar/>
    </div>
  )
}

export default Header