import React from "react";
import "./Topbar.css";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
export default function AuthTopbar() {
  const navigate = useNavigate();
  const pageType = useSelector((state) => state.checkUser.pageType);
  const handleClick = () => {
    if (pageType === "login") {
      navigate("/register");
    } else {
      navigate("/login");
    }
  };
  return (
    <div className="top">
      <div className="top-left" style={{ flex: "2" }}>
        <i className="top-icon fa-brands fa-facebook"></i>
        <i className="top-icon fa-brands fa-twitter"></i>
        <i className="top-icon fa-brands fa-github"></i>
        <i className=" top-icon fa-brands fa-instagram"></i>
      </div>
      <div className="top-center">
        <h1 className="topbar-title">
          <i className="fa-solid fa-dumbbell"></i>  Gymnation
        </h1>
      </div>
      <div
        className="top-right"
        style={{ justifyContent: "end", margin: "0 20px" }}
      >
        <button
          onClick={handleClick}
          className="auth-topbar-button"
          style={{ "margin-right": "10px" }}
        >
          {pageType === "login"
            ? "Create your Account"
            : "Already a user? Login Here!"}
        </button>
      </div>
    </div>
  );
}
