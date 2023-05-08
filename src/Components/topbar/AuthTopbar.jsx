import React from "react";
import "./Topbar.css";
export default function AuthTopbar() {
  return (
    <div className="top">
      <div className="top-left" style={{ flex: "2" }}>
        <i className="top-icon fa-brands fa-facebook"></i>
        <i className="top-icon fa-brands fa-twitter"></i>
        <i className="top-icon fa-brands fa-github"></i>
        <i className=" top-icon fa-brands fa-instagram"></i>
      </div>
      <div style={{ flex: "5" }}></div>
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
        <img
          className="top-image"
          src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-614810.jpg&fm=jpg"
          alt="face"
        ></img>
      </div>
    </div>
  );
}
