import React from "react";
import "./Register.css";
export default function Register() {
  return (
    <div className="register">
      <div className="register-wrapper">
        <span className="register-title">Register</span>
        <form className="register-form">
          <label>Email</label>
          <input type="text" placeholder="Enter your email..."></input>
          <label>Password</label>
          <input type="password" placeholder="Enter your password..."></input>
          <button className="register-button">Register</button>
          <span className="have-account">Already have an account..</span>
          <button className="login-button">Login</button>
        </form>
      </div>
    </div>
  );
}
