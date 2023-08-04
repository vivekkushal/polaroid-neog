import './Login.scss';

function Login() {
  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h3>Welcome to</h3>
          <h1>Polaroid</h1>
          <div>
            <span>Do you have an account?</span>
            <button>Register</button>
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
