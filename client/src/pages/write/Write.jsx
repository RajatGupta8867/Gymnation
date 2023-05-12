import React from "react";
import "./Write.css";
export default function Write() {
  return (
    <div className="write">
        <img src="./assets/GymLogo.png" alt="" className="write-image"/>
      <form className="write-form">
        <div className="write-form-group">
          <label htmlFor="file-input">
            <i className="write-icon fa-solid fa-plus"></i>
          </label>
          <input type="file" id="file-input" style={{ display: "none" }} />
          <input
            type="text"
            id="text-input"
            placeholder="Title"
            className="write-input"
            autoFocus={true}
          />
        </div>
        <div className="write-form-group">
          <textarea
            placeholder="Write to us here..."
            type="text"
            className="write-input write-text"
          ></textarea>
        </div>
        <button className="write-submit">Submit</button>
      </form>
    </div>
  );
}
