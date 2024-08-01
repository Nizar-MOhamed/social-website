
import {  useRef } from "react";
import "./login.css";
import { Link } from 'react-router-dom'

export default function Login() {
  const email = useRef();
  const password = useRef();


  

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo">Facebook</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on FACEBOOK.
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox" >
            <input
              placeholder="Email"
              type="email"
              required
              className="loginInput"
              ref={email}
            />
            <input
              placeholder="Password"
              type="password"
              required
              minLength="6"
              className="loginInput"
              ref={password}
            />
            <button className="loginButton" type="submit" >
              <Link className="n1" to="profile">Login</Link>
            </button>
            <span className="loginForgot">Forgot Password?</span>
            <button className="loginRegisterButton">
              <Link className="n1" to="/register">Register new account</Link>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}