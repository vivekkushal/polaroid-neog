import './Navbar.scss';
import logo from '../../assets/logo.png';
import userOne from '../../assets/users-photos/user-one.jpg';
import Avatar from '@mui/material/Avatar';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import SearchIcon from '@mui/icons-material/Search';
// import AccountBoxIcon from '@mui/icons-material/AccountBox';
import { Link } from 'react-router-dom';
import { lightBlue } from '@mui/material/colors';
import { useContext } from 'react';
import { ModeContext } from '../../contexts/ModeContext';
import { AuthContext } from '../../contexts/AuthContext';

function Navbar() {
  const { mode, toggleMode } = useContext(ModeContext);
  const { user } = useContext(AuthContext);

  return (
    <nav className="navbar">
      <div className="left">
        <Link style={{ textDecoration: 'none' }}>
          <span>
            <img src={logo} alt="" />
            <h1>Polaroid</h1>
          </span>
        </Link>
      </div>
      <div className="middle">
        <SearchIcon />
        <input type="text" placeholder="Search" />
      </div>
      <div className="right">
        {mode === 'light' ? (
          <DarkModeIcon onClick={toggleMode} />
        ) : (
          <LightModeIcon onClick={toggleMode} />
        )}
        {/* <AccountBoxIcon /> */}
        <div className="user">
          {/* <img src="" alt="" /> */}
          <Avatar
            sx={{ bgcolor: lightBlue, borderRadius: '5px' }}
            src={userOne}
            variant="square"
          >
            VK
          </Avatar>
          <span>{user.name}</span>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
