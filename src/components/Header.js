import halfmoon from 'halfmoon';
import { useTheme } from '../contexts/ThemeContext'
import { setColorHSLA } from '../utils/color'
import React, { useState } from 'react'

const Header = ({title}) => {
  const {theme} = useTheme()
  

  return (
    <nav className="navbar" style={{background: setColorHSLA(theme)}}>
      <div className="sidebar-overlay" onClick={halfmoon.toggleSidebar()}></div>
      <span style={{color: "white", fontWeight: 600}}>{title}</span>
    </nav>
  )
}

export default Header;