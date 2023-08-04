import './Signup.scss';
import { Link } from 'react-router-dom';

function Signup() {
  return (
    <div className="signup">
      <div className="card">
        <div className="left">
          <h3>Welcome to</h3>
          <h1>Polaroid</h1>
          <div>
            <span>Do you have an account?</span>
            <Link to="/login">
              <button>Login</button>
            </Link>
          </div>
        </div>
        <div className="right">
          <h1>Signup</h1>
          <form>
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Username" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button>Signup</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
