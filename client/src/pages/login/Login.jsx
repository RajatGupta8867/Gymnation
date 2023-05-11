import React from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  return (
    <div className="login">
      <div className="login-wrapper">
        <span className="login-title">Login</span>
        <form className="login-form">
          <label>Email</label>
          <input type="text" placeholder="Enter your email..."></input>
          <label>Password</label>
          <input type="password" placeholder="Enter your password..."></input>
          <button className="login-button">Login</button>
          <span className="no-account">Dont have an account..</span>
          <button
            className="register-button"
            onClick={() => navigate("/register")}
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
