import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Auth.css";
import { useAuth } from "../../Contexts/AuthContext";
import { USER_EMAIL, USER_PASSWORD } from "../../Constants/AuthConstants";
import { logInHandler } from "../../Services/AuthServices";

const Login = () => {
  const { authState, authDispatch } = useAuth();
  const { email, password } = authState.userInfo;
  const navigate = useNavigate();

  const logInSubmit = (e) => {
    e.preventDefault();
    logInHandler(email, password, authDispatch, navigate);
  };
  const guestLoginHandler = (e) => {
    e.preventDefault();
    logInHandler("sanjayjatti@gmail.com", "sanjay123", authDispatch, navigate);
  };
  return (
    <>
      <div className="auth-page">
        <form className="form-container" onSubmit={(e) => logInSubmit(e)}>
          <h1 className="form-title">Log In</h1>
          <div className="input-container">
            <label htmlFor="email">Email*</label>
            <input
              required
              type="email"
              name="email"
              id="email"
              placeholder="example@xyz.com"
              onChange={(e) =>
                authDispatch({ type: USER_EMAIL, payload: e.target.value })
              }
            />
          </div>
          <div className="input-container">
            <label htmlFor="password">Password*</label>
            <input
              required
              type="password"
              name="password"
              id="password"
              onChange={(e) =>
                authDispatch({ type: USER_PASSWORD, payload: e.target.value })
              }
            />
          </div>
          <div className="flex-column gap-md">
            <button type="submit" className="btn btn-primary btn-long">
              Log In
            </button>
            <button
              className="btn btn-secondary btn-long"
              onClick={(e) => guestLoginHandler(e)}
            >
              Guest Log In
            </button>
          </div>
          <div className="flex-center gap-sm">
            <p className="text-medium ">Don't have an account?</p>
            <Link to="/signup" className="text-primary text-medium">
              Create an account
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export { Login };
