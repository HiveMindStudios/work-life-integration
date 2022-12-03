import { Link } from "react-router-dom";
import Discord from '../assets/discord.svg'
import Setajngs from '../assets/gear-solid.svg'
import Slack from '../assets/slack.svg'
import Telegram from '../assets/telegram.svg'
import Key from '../assets/key.svg'
import Lock from '../assets/lock.svg'
import User from '../assets/user.svg'
import All from '../assets/all.svg'
import {useAuth} from "../contexts/AuthContext"

const Sidebar = () => {
  const {currentUser, handleSignOut} = useAuth()

  return (
    <>
      <div className="sidebar" style={{position: "static"}}>
      <div className="sidebar-divider"></div>
        <Link className='sidebar-link sidebar-link-with-icon' to="/">
          <span className="sidebar-icon bg-primary text-white rounded-circle">
            <img src={All} className="link-icon" alt="All applications" title="All messenges" />
          </span>
          All messenges
        </Link>
        <div className="sidebar-divider"></div>
        <h5 className="sidebar-title">Integrations</h5>
        <div className="sidebar-divider"></div>
        <Link className='sidebar-link sidebar-link-with-icon' to="/discord">
          <span className="sidebar-icon bg-primary text-white rounded-circle">
            <img src={Discord} className="link-icon" alt="Discord" title="Discord" />
          </span>
          Discord
        </Link>
        <Link className='sidebar-link sidebar-link-with-icon' to="/slack">
          <span className="sidebar-icon bg-primary text-white rounded-circle">
            <img src={Slack} className="link-icon" alt="Slack" title="Slack" />
          </span>
          Slack
        </Link>
        <Link className='sidebar-link sidebar-link-with-icon' to="/telegram">
          <span className="sidebar-icon bg-primary text-white rounded-circle">
            <img src={Telegram} className="link-icon" alt="Telegram" title="Telegram" />
          </span>
          Telegram
        </Link>
        <div className="sidebar-divider"></div>
        <br />
        <br />
        <h5 className="sidebar-title">Application Settings</h5>
        <div className="sidebar-divider"></div>
        <Link className='sidebar-link sidebar-link-with-icon' to="/settings">
          <span className="sidebar-icon dark text-white rounded-circle">
            <img src={Setajngs} className="link-icon" alt="Setajngs" title="Setajngs" />
          </span>
          Settings
        </Link>
        <Link className='sidebar-link sidebar-link-with-icon' to="/settings">
          <span className="sidebar-icon dark rounded-circle">
            <img src={User} className="link-icon" alt="User"  />
          </span>
          Profile
        </Link>
        <Link className='sidebar-link sidebar-link-with-icon' to="/signin" onClick={() => {
          if(currentUser) handleSignOut()
        }}>
          <span className="sidebar-icon dark rounded-circle">
            <img src={currentUser ? Lock : Key} className="link-icon" alt="Setajngs" />
          </span>
          {!currentUser ? "Sign In" : "Sign Out"}
        </Link>
        <div className="sidebar-divider"></div>
      </div>
    </>
  )
}

export default Sidebar;