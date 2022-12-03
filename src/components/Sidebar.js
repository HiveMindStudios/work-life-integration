import { Link } from "react-router-dom";
import Discord from '../assets/discord.svg'
import Setajngs from '../assets/gear-solid.svg'
import Slack from '../assets/slack.svg'
import Telegram from '../assets/telegram.svg'
import Key from '../assets/key.svg'
import Lock from '../assets/lock.svg'
import User from '../assets/user.svg'
import All from '../assets/all.svg'
import { useAuth } from "../contexts/AuthContext"
import { motion } from 'framer-motion';


const Sidebar = () => {
  const { currentUser, handleSignOut } = useAuth()

  return (
    <>
      <div className="sidebar" style={{ position: "static" }}>
        <div className="sidebar-divider"></div>
        <Link className='sidebar-link sidebar-link-with-icon' to="/">
          <motion.span whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} className="sidebar-icon bg-primary text-white rounded-circle">
            <img src={All} className="link-icon" alt="All applications" title="All messenges" />
          </motion.span>
          All messenges
        </Link>
        <div className="sidebar-divider"></div>
        <h5 className="sidebar-title">Integrations</h5>
        <div className="sidebar-divider"></div>
        <Link className='sidebar-link sidebar-link-with-icon' to="/discord">
          <motion.span whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} className="sidebar-icon bg-primary text-white rounded-circle">
            <img src={Discord} className="link-icon" alt="Discord" title="Discord" />
          </motion.span>
          Discord
        </Link>
        <Link className='sidebar-link sidebar-link-with-icon' to="/slack">
          <motion.span whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} className="sidebar-icon bg-primary text-white rounded-circle">
            <img src={Slack} className="link-icon" alt="Slack" title="Slack" />
          </motion.span>
          Slack
        </Link>
        <Link className='sidebar-link sidebar-link-with-icon' to="/telegram">
          <motion.span whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} className="sidebar-icon bg-primary text-white rounded-circle">
            <img src={Telegram} className="link-icon" alt="Telegram" title="Telegram" />
          </motion.span>
          Telegram
        </Link>
        <div className="sidebar-divider"></div>
        <h5 className="sidebar-title">Application Settings</h5>
        <div className="sidebar-divider"></div>
        <Link className='sidebar-link sidebar-link-with-icon' to="/settings">
          <motion.span whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} className="sidebar-icon dark text-white rounded-circle">
            <img src={Setajngs} className="link-icon" alt="Setajngs" title="Setajngs" />
          </motion.span>
          Settings
        </Link>
        <Link className='sidebar-link sidebar-link-with-icon' to="/profile">
          <motion.span whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} className="sidebar-icon dark rounded-circle">
            <img src={User} className="link-icon" alt="User" />
          </motion.span>
          Profile
        </Link>
        <Link className='sidebar-link sidebar-link-with-icon' to="/signin" onClick={() => {
          if (currentUser) handleSignOut()
        }}>
          <motion.span whileHover={{scale: 1.1}} whileTap={{scale: 0.9}} className="sidebar-icon dark rounded-circle">
            <img src={currentUser ? Lock : Key} className="link-icon" alt="Setajngs" />
          </motion.span>
          {!currentUser ? "Sign In" : "Sign Out"}
        </Link>
        <div className="sidebar-divider"></div>
      </div>
    </>
  )
}

export default Sidebar;