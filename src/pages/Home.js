import halfmoon from 'halfmoon'
import { useEffect } from 'react';
import { Link, Router, useNavigate } from 'react-router-dom';
import Discord from '../components/Discord';
import Header from '../components/Header';

const Home = () => {

  const navigate = useNavigate();

  // useEffect(() => {
  //   const auth = localStorage.getItem("authenticated");

  //   if (!auth) {
  //     navigate('/login')
  //   }
  // }, [navigate])

  return (
    <div className="page-wrapper with-navbar with-sidebar" data-sidebar-type="overlayed">

      <div className="sticky-alerts"></div>

      <Header headerTitle={"App Name"}/>

      <div className="sidebar">
        <div className="sidebar-menu">
          <a href="#" className='sidebar-brand'>App Name</a>
        </div>
        <h5 className="sidebar-title">Integrations</h5>
        <Link className='sidebar-link'>Discord</Link>
        <Link className='sidebar-link'>Slack</Link>
        <Link className='sidebar-link'>Telegram</Link>
      </div>
      <div className="content-wrapper">
      </div>

    </div >
  )
}

export default Home;