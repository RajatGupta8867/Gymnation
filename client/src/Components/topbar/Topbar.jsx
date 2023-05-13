import React from "react";
import "./Topbar.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setLogout } from "../../state/userSlice";
export default function Topbar() {
  const user = useSelector((state) => state.checkUser.user);
  const dispatch = useDispatch();
  const logout = () => {
    dispatch(setLogout());
  };
  const navigate = useNavigate();
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
              MEMBERSHIPS
            </Link>
          </li>
        </ul>
      </div>
      <div className="top-right">
        <div className="profile-wrapper">
          <img
            onClick={() => navigate("/profile")}
            className="top-image"
            src="assets/profileM.png"
            alt="face"
          ></img>

          <span onClick={() => navigate("/profile")} className="user-name">
            {user.username}
          </span>
          <i
            onClick={logout}
            class="logout-button fa-solid fa-right-from-bracket"
          ></i>
        </div>
      </div>
    </div>
  );
}
