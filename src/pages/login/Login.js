import './Login.scss';
import { Link } from 'react-router-dom';

function Login() {
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
            <button>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
