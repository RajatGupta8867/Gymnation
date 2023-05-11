import React from "react";
import "./Topbar.css";
import Typewriter from "typewriter-effect";
export default function AuthTopbar() {
  return (
    <div className="top">
      <div className="top-left" style={{ flex: "2" }}>
        <i className="top-icon fa-brands fa-facebook"></i>
        <i className="top-icon fa-brands fa-twitter"></i>
        <i className="top-icon fa-brands fa-github"></i>
        <i className=" top-icon fa-brands fa-instagram"></i>
      </div>
      <div className="top-center">
        <h1 className="topbar-title">Title</h1>
      </div>
      <div
        className="top-right"
        style={{ justifyContent: "end", margin: "0 20px" }}
      >
        <button
          className="auth-topbar-button"
          style={{ "margin-right": "10px" }}
        >
          Login/Signup
        </button>
      </div>
    </div>
  );
}
