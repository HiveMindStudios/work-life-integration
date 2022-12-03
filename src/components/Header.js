import halfmoon from 'halfmoon';
import { useTheme } from '../contexts/ThemeContext'
import { setColorHSLA } from '../utils/color'
import React from 'react'

const Header = () => {
  const {theme} = useTheme()
  

  return (
    <nav className="navbar" style={{background: setColorHSLA(theme)}}>
      <div className="sidebar-overlay" onClick={halfmoon.toggleSidebar()}></div>
      <span style={{color: "white", fontWeight: 600}}>Notify App</span>
    </nav>
  )
}

export default Header;