import React from "react";
import "./Topbar.css";
import { Link } from "react-router-dom";
export default function Topbar() {
  return (
    <div className="top">
      <div className="top-left">
        <i className="top-icon fa-brands fa-facebook"></i>
        <i className="top-icon fa-brands fa-twitter"></i>
        <i className="top-icon fa-brands fa-github"></i>
        <i className=" top-icon fa-brands fa-instagram"></i>
      </div>
      <div className="top-center">
        <ul className="top-list">
          <li className="top-list-item">
          <Link to={"/home"}>HOME</Link>
          </li>
          <li className="top-list-item">ABOUT</li>
          <li className="top-list-item">CONTACT </li>
          <li className="top-list-item">WRITE </li>
          <li className="top-list-item">GALLERY</li>
        </ul>
      </div>
      <div className="top-right">
        <img
          className="top-image"
          src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-614810.jpg&fm=jpg"
          alt="face"
        ></img>
        <i className="top-search-icon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
}
