import "./Sidebar.css";

import React from "react";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-item">
        <span className="sidebar-title">About Me</span>
        <img
          src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-614810.jpg&fm=jpg"
          alt=""
        />
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim optio
          soluta, officiis, modi animi dignissimos ad facere .
        </p>
      </div>

      <div className="sidebar-item">
        <span className="sidebar-title">Categories</span>
        <ul className="sidebar-list">
          <li className="sidebar-list-item">Life</li>
          <li className="sidebar-list-item">Music</li>
          <li className="sidebar-list-item">Style</li>
          <li className="sidebar-list-item">Sport</li>
          <li className="sidebar-list-item">Tech</li>
          <li className="sidebar-list-item">Cinema</li>
        </ul>
      </div>
      <div className="sidebar-item">
        <span className="sidebar-title">Follow Us</span>
      </div>
      <div className="sidebar-social">
        <div className="sidebar-left">
          <i className="sidebar-icon fa-brands fa-facebook"></i>
          <i className="sidebar-icon fa-brands fa-twitter"></i>
          <i className="sidebar-icon fa-brands fa-github"></i>
          <i className=" sidebar-icon fa-brands fa-instagram"></i>
        </div>
      </div>
    </div>
  );
}
