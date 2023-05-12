import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import {
  setLoading,
  setPageType,
  setToken,
  setUser,
} from "../../state/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { BeatLoader } from "react-spinners";
export default function Login() {
  const loading = useSelector((state) => state.checkUser.loading);
  const [logUser, setLogUser] = useState({ email: "", password: "" });
  const dispatch = useDispatch();
  dispatch(setPageType("login"));
  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(setLoading(true));
    const response = await fetch("http://localhost:3001/api/user/login", {
      method: "POST",
      body: JSON.stringify(logUser),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();
    if (data.status === "success") {
      dispatch(setUser(data.user));
      dispatch(setToken(data.token));
      navigate("/home");
    } else {
      console.log("Incorrect creds");
    }
    dispatch(setLoading(false));
  };
  const navigate = useNavigate();
  return (
    <div className="login">
      <div className="half-page-l"></div>
      <div className="half-page-r">
        <div className="login-wrapper">
          <BeatLoader
            color={"#000"}
            loading={loading}
            cssOverride={override}
            size={20}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
          <span className="login-title">Login</span>
          <hr />
          <form className="login-form" onSubmit={handleSubmit}>
            <label>Email</label>
            <input
              autoComplete="on"
              type="text"
              value={logUser.email}
              placeholder="Enter your email..."
              onChange={(e) =>
                setLogUser({
                  ...logUser,
                  email: e.target.value,
                })
              }
            />
            <label>Password</label>
            <input
              autoComplete="on"
              type="password"
              value={logUser.password}
              placeholder="Enter your password..."
              onChange={(e) =>
                setLogUser({
                  ...logUser,
                  password: e.target.value,
                })
              }
            />
            <button className="login-button" type="submit">
              Login
            </button>
            <span className="no-account">Dont have an account..</span>
            <button
              className="register-button"
              onClick={() => navigate("/register")}
            >
              Register
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
