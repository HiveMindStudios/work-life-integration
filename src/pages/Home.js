import halfmoon from 'halfmoon'
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';

const Home = () => {

  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem("authenticated");

    if (!auth) {
      navigate('/login')
    }
  }, [navigate])

  return (
    <div className="page-wrapper with-navbar with-sidebar" data-sidebar-type="full-height overlayed-sm-and-down">

      <div className="sticky-alerts"></div>

      <Header />
      <div className="sidebar-overlay" onClick={() => halfmoon.toggleSidebar()}></div>

      <div className="sidebar">
      </div>
      <div className="content-wrapper">
      </div>

    </div >
  )
}

export default Home;