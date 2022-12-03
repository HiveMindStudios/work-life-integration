import halfmoon from 'halfmoon';

const Header = ({ headerTitle }) => {
  return (
    <nav className="navbar">
      <div class="sidebar-overlay" onClick={halfmoon.toggleSidebar()}></div>
      <span>{headerTitle}</span>
    </nav>
  )
}

export default Header;