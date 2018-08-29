import * as React from 'react';
import './Login.css'
import "roboto-fontface"

class Login extends React.Component {
  public render() {
    return (
      <div className="loginBody">
        <section className="loginContainer" id="c1">
          <h1 className="loginTitle">
            脱盲 TuoMang
          </h1>
          <h2 className="loginTitle" id="t2">
            Welcome
          </h2>
          <section className="loginForm">
            <form className="">
              <input type="text" placeholder="Username" className="loginInput" /> <br />
              <input type="password" placeholder="Password" className="loginInput" /> <br />
              <input type="submit" value="Login" className="loginSubmit" /> <br />
            </form>
          </section>
          <p id="goBack">
            <a href="javascript:history.back()" >
              ← Go back
            </a>
            &nbsp; | &nbsp;
            <a>
              Create Account
            </a>
          </p>
        </section>
      </div>
    );
  }
}

export default Login;