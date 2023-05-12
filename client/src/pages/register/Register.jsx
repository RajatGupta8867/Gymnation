import React, { useState } from "react";
import "./Register.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setLoading, setPageType } from "../../state/userSlice";
import { RingLoader } from "react-spinners";
export default function Register() {
  const loading = useSelector((state) => state.checkUser.loading);
  const dispatch = useDispatch();
  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };
  const [user, setUser] = useState({
    name: "",
    username: "",
    password: "",
    email: "",
    location: "",
    occupation: "",
  });

  const createUser = async (e) => {
    e.preventDefault();
    dispatch(setLoading(true));
    const response = await fetch("http://localhost:3001/api/user/register", {
      method: "POST",
      body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    if (data.status === "success") {
      navigate("/login");
    } else {
      console.log("Something went wronge.");
    }
    dispatch(setLoading(false));
  };
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
            <button
              className="login-button-register"
              onClick={() => navigate("/login")}
            >
              Login
            </button>
          </form>
        </div>
      </div>
      <div className="half-page-r">
        <RingLoader
          color={"#89551d"}
          loading={loading}
          cssOverride={override}
          size={220}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    </div>
  );
}
