import React, { useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { setToken, setUser } from "../../state/userSlice";
import { useDispatch } from "react-redux";
import AuthTopbar from "../../Components/topbar/AuthTopbar";
export default function Login() {
  const [logUser, setLogUser] = useState({ email: "", password: "" });
  const dispatch = useDispatch();
  const handleSubmit = async (e) => {
    e.preventDefault();
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
  };
  const navigate = useNavigate();
  return (
    <div className="login">
      <div className="login-wrapper">
        <span className="login-title">Login</span>
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
  );
}
