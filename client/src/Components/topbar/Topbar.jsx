import React from "react";
import "./Topbar.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setLogout } from "../../state/userSlice";
export default function Topbar() {
  const user = useSelector((state) => state.checkUser.user);
  const dispatch = useDispatch();
  const logout = () => {
    dispatch(setLogout());
  };
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
            <Link className="topbar-link" to={"/home"}>
              HOME
            </Link>
          </li>
          <li className="top-list-item">
            <Link className="topbar-link" to={"/about"}>
              TRAINERS
            </Link>
          </li>
          <li className="top-list-item">
            <Link className="topbar-link" to={"/write"}>
              WRITE US
            </Link>{" "}
          </li>
          <li className="top-list-item">
            <Link className="topbar-link" to={"/gallery"}>
              GALLERY
            </Link>
          </li>
          <li className="top-list-item">
            <Link className="topbar-link" to={"/membership"}>
              MEMBERSHIP
            </Link>
          </li>
        </ul>
      </div>
      <div className="top-right">
        <div className="profile-wrapper">
          <img
            className="top-image"
            src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?cs=srgb&dl=pexels-simon-robben-614810.jpg&fm=jpg"
            alt="face"
          ></img>

          <span className="user-name">{user.username}</span>
          <i
            onClick={logout}
            class="logout-button fa-solid fa-right-from-bracket"
          ></i>
        </div>
      </div>
    </div>
  );
}
