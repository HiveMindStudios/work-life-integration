import halfmoon from 'halfmoon';
import { useTheme } from '../contexts/ThemeContext'
import { setColorHSLA } from '../utils/color'
import {Link} from 'react-router-dom'
import React from 'react'
import User from '../assets/user.svg'

const Header = () => {
  const {theme} = useTheme()
  

  return (
    <nav className="navbar" style={{background: setColorHSLA(theme)}}>
      <div className="sidebar-overlay" onClick={halfmoon.toggleSidebar()}></div>
      <span style={{color: "white", fontWeight: 600}}>Notify App</span>
      <div style={{flex: 1}}></div>
      <Link to='/profile' className="profile-hdr" style={{color: "white", fontSize: "small", displat: "grid", gridTemplateColumns: "1fr 1fr"}}>
        <img src={User} alt="profile" className="profile-img" />
        <span>Profile</span>
      </Link>
    </nav>
  )
}

export default Header;