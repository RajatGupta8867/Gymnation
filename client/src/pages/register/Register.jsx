import React, { useState } from "react";
import "./Register.css";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setPageType } from "../../state/userSlice";
export default function Register() {
  const [user, setUser] = useState({
    name: "",
    username: "",
    password: "",
    email: "",
    location: "",
    occupation: "",
  });

  const createUser = async (e) => {
    // e.preventDefault();
    console.log(user);
  };
  const dispatch = useDispatch();
  dispatch(setPageType("register"));
  const navigate = useNavigate();

  return (
    <div className="register">
      <div className="half-page-l">
        <div className="register-wrapper">
          <span className="register-title">Register</span>
          <hr />
          <form className="register-form" onSubmit={createUser}>
            <label>Email</label>
            <input
              type="text"
              placeholder="Enter your email..."
              name="email"
              onChange={(e) =>
                setUser({
                  ...user,
                  email: e.target.value,
                })
              }
            />
            <label>Usename</label>
            <input
              value={user.username}
              onChange={(e) =>
                setUser({
                  ...user,
                  username: e.target.value,
                })
              }
              type="text"
              placeholder="Enter your Useraname..."
              name="username"
            />
            <label>Name</label>
            <input
              type="text"
              placeholder="Enter your Name..."
              name="name"
              value={user.name}
              onChange={(e) =>
                setUser({
                  ...user,
                  name: e.target.value,
                })
              }
            />
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password..."
              name="password"
              value={user.password}
              onChange={(e) =>
                setUser({
                  ...user,
                  password: e.target.value,
                })
              }
            />
            <label>Location</label>
            <input
              type="text"
              placeholder="Enter your Location..."
              name="location"
              value={user.location}
              onChange={(e) =>
                setUser({
                  ...user,
                  location: e.target.value,
                })
              }
            />
            <label>Occupation</label>
            <input
              type="text"
              placeholder="Enter your Occupation..."
              name="occupation"
              value={user.occupation}
              onChange={(e) =>
                setUser({
                  ...user,
                  occupation: e.target.value,
                })
              }
            />
            <button className="register-button" type="submit">
              Register
            </button>
            <span className="have-account">Already have an account..</span>
            <button className="login-button" onClick={() => navigate("/login")}>
              Login
            </button>
          </form>
        </div>
      </div>
      <div className="half-page-r"></div>
    </div>
  );
}
