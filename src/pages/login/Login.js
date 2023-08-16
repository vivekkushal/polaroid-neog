import './Login.scss';
import { AuthContext } from '../../contexts/AuthContext';
import { useContext } from 'react';
import { Link } from 'react-router-dom';

function Login() {
  const { login } = useContext(AuthContext);

  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h3>Welcome to</h3>
          <h1>Polaroid</h1>
          <div>
            <span>Don't have an account?</span>
            <Link to="/signup">
              <button>Signup</button>
            </Link>
          </div>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button onClick={login}>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
