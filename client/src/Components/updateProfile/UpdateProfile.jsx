import React from "react";
import "./UpdateProfile.css";
export default function UpdateProfile() {
  return (
    <div className="update-profile">
      <form className="profile-form">
        <label>Profile Picture</label>
        <div className="profile-profile-picture">
          <img
            src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-614810.jpg&fm=jpg"
            alt=""
            className="profile-pp"
          />
          <label htmlFor="file-input">
            <i className="profile-pp-icon fa-solid fa-user"></i>
          </label>
        </div>
        <input type="file" id="file-input" style={{ display: "none" }} />
        <label>Username</label>
        <input type="text" placeholder="Safak" />
        <label>Email</label>
        <input type="email" placeholder="safak@gmail.com" />
        <label>Password</label>
        <input type="password" placeholder="********" />
        <button className="profile-submit">Update</button>
      </form>{" "}
      */
    </div>
  );
}


// const response=await fetch("http://localhost:3001/api/user",{
//   method:"PATCH",
//   body:req.body,
  
// })