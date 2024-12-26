import "./login.scss";
const Login = () => {
  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Hello Folks.</h1>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur vel temporibus rerum tempore a explicabo nisi repudiandae dolore fuga saepe?</p>
          <span>Dont you have an account?</span>
          <button>Register</button>
        </div>
        <div className="right">
          <h2>Login</h2>
          <div className="formContainer">
            <form>
              <input type="text" placeholder="Username" />
              <input type="text" placeholder="Password" />
              <button>login</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
