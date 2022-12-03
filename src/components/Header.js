import { FaBars } from 'react-icons/fa';

const Header = ({ headerTitle }) => {
  return (
    <nav className="navbar">
      <button className="btn btn-action" type="button">
        <FaBars />
      </button>
      <span>{headerTitle}</span>
    </nav>
  )
}

export default Header;