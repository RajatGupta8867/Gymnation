import React from "react";
import "./Setting.css";
import Sidebar from "../../Components/sidebar/Sidebar";
export default function Setting() {
  return (
    <div className="setting">
      <div className="setting-wrapper">
        <div className="setting-title">
          <span className="setting-update-title">Update your account</span>
          <span className="setting-delete-title">Delete your account</span>
        </div>
        <form className="setting-form">
          <label>Profile Picture</label>
          <div className="setting-profile-picture">
            <img
              src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-614810.jpg&fm=jpg"
              alt=""
              className="setting-pp"
            />
          <label htmlFor="file-input">
            <i class="setting-pp-icon fa-solid fa-user"></i>
          </label>
          </div>
          <input type="file" id="file-input" style={{ display: "none" }} />
          <label>Username</label>
          <input type="text" placeholder="Safak" />
          <label>Email</label>
          <input type="email" placeholder="safak@gmail.com" />
          <label>Password</label>
          <input type="password" placeholder="********" />
          <button className="setting-submit">Update</button>
        </form>
      </div>
      <Sidebar />
    </div>
  );
}
