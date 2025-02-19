import "./register.css";
import { Link } from "react-router-dom";
export default function Register() {
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
          <div className="loginBox">
            <input placeholder="Username" className="loginInput" />
            <input placeholder="Email" className="loginInput" />
            <input placeholder="Password" className="loginInput" />
            <input placeholder="Password Again" className="loginInput" />
            <button className="loginButton">
              <Link className="n1" to="/">Sign up</Link>
            </button>
            <button className="loginRegisterButton">
              <Link className="n1" to="/">Already have account</Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}