import './Navbar.css';
import logo from '../../assets/logo.png';

function Navbar() {
  return (
    <nav className="navbar">
      <img src={logo} alt="" />
      <h1>Polaroid</h1>
    </nav>
  );
}

export default Navbar;
