import React, { useState } from "react";
import "./Write.css";
import { useDispatch, useSelector } from "react-redux";
import emailjs from "emailjs-com";
export default function Write() {
  const user = useSelector((state) => state.checkUser.user);
  const sendEmail = (e) => {
    e.preventDefault();
    console.log(e.target);
    emailjs
      .sendForm(
        "gymnationbokaro",
        "template_xnkc94r",
        e.target,
        "VBVZ4LukYG0GY6LK_"
      )
      .then(
        (result) => {
          alert(
            "Email sent successfully to the admin. We will contact you asap."
          );
        },
        (error) => {
          console.log("Something went wronge", "Error: ", error.message);
        }
      );
  };
  return (
    <div className="write">
      <img src="./assets/GymLogo.png" alt="" className="write-image" />
      <form className="write-form" onSubmit={sendEmail}>
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
            name="TITLE"
            autoFocus={true}
          />
          <input
            style={{ display: "none" }}
            type="text"
            id="text-input"
            placeholder="Title"
            className="write-input"
            value={user.username}
            name="SENDER"
            autoFocus={true}
          />
        </div>
        <div className="write-form-group">
          <textarea
            placeholder="Write to us here..."
            type="text"
            name="MESSAGE"
            className="write-input write-text"
          ></textarea>
        </div>
        <button className="write-submit" type="submit">
          Send mail <i className="fa-solid fa-paper-plane-top"></i>
        </button>
      </form>
    </div>
  );
}
