import { Link, useNavigate } from "react-router-dom";
import {
  USER_FIRST_NAME,
  USER_LAST_NAME,
  USER_EMAIL,
  USER_PASSWORD,
  USER_CONFIRM_PASSWORD,
} from "../../Constants/AuthConstants";
import { useAuth } from "../../Contexts/AuthContext";
import "./Auth.css";
import toast from "react-hot-toast";
import { ToastStyle } from "../../Components/ToastStyle/ToastStyle";
import { signUpHandler } from "../../Services/AuthServices";

export const Signup = () => {
  const { authState, authDispatch } = useAuth();
  const { userInfo, error } = authState;
  const { firstName, lastName, email, password, confirmPassword } = userInfo;
  const navigate = useNavigate();

  const signupSubmit = (e) => {
    e.preventDefault();
    password === confirmPassword
      ? signUpHandler(
          firstName,
          lastName,
          email,
          password,
          confirmPassword,
          authDispatch,
          navigate
        )
      : toast.error("Passwords must be same", ToastStyle);
  };
  const guestSignupHandler = (e) => {
    e.preventDefault();
    signUpHandler(
      "Sanjay",
      "Jatti",
      "jattisanjay.r@gmail.com",
      "sanjay123",
      "sanjay123",
      authDispatch,
      navigate
    );
  };
  return (
    <>
      <div className="auth-page">
        <form className="form-container" onSubmit={(e) => signupSubmit(e)}>
          <h1 className="form-title">Sign Up</h1>
          <div className="input-container">
            <label htmlFor="firstname">First Name*</label>
            <input
              required
              type="text"
              name="firstname"
              id="firstname"
              onChange={(e) =>
                authDispatch({ type: USER_FIRST_NAME, payload: e.target.value })
              }
            />
          </div>
          <div className="input-container">
            <label htmlFor="lastname">Last Name*</label>
            <input
              required
              type="text"
              name="lastname"
              id="lastname"
              onChange={(e) =>
                authDispatch({ type: USER_LAST_NAME, payload: e.target.value })
              }
            />
          </div>
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
          <div className="input-container">
            <label htmlFor="password-confirm">Confirm Password*</label>
            <input
              required
              type="password"
              name="password-confirm"
              id="password-confirm"
              onChange={(e) =>
                authDispatch({
                  type: USER_CONFIRM_PASSWORD,
                  payload: e.target.value,
                })
              }
            />
          </div>
          <button type="submit" className="btn btn-primary btn-long">
            Create New Account
          </button>
          <button
            className="btn btn-secondary btn-long"
            onClick={(e) => guestSignupHandler(e)}
          >
            Guest Signup
          </button>
          <div className="flex-center gap-sm">
            <p className="text-medium">Have an account?</p>
            <Link to="/login" className="text-medium text-primary">
              LogIn
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};
