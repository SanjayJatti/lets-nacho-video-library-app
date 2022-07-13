import { useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { AUTH_TOKEN } from "../../Constants/AuthConstants";
import { useAuth } from "../../Contexts/AuthContext";
import "./Header.css";
const Header = () => {
  const [slider, setSlider] = useState(false);
  const { authState, authDispatch } = useAuth();
  const { token } = authState;
  const navigate = useNavigate();

  const logOutHandler = () => {
    localStorage.removeItem("token");
    authDispatch({
      type: AUTH_TOKEN,
      payload: null,
    });
    navigate("/");
  };
  return (
    <>
      <div className="navbar-container">
        <div
          className="hamburger cursor-pointer margin-l-sm"
          onClick={() => setSlider(!slider)}
        >
          <i className={` ${slider ? "fas fa-times" : "fas fa-bars"}`}></i>
        </div>
        {slider && (
          <div className="mobile-navigation">
            <NavLink
              to="/"
              className="mob-navigation-link"
              onClick={() => {
                setSlider(false);
              }}
            >
              <i className="fas fa-home"></i>Home
            </NavLink>
            <NavLink
              to="/history"
              className="mob-navigation-link"
              onClick={() => {
                setSlider(false);
              }}
            >
              <i className="fas fa-history"></i>History
            </NavLink>

            <NavLink
              to="/liked"
              className="mob-navigation-link"
              onClick={() => {
                setSlider(false);
              }}
            >
              <i className="fas fa-heart"></i>Liked
            </NavLink>
            <NavLink
              to="/playlist"
              className="mob-navigation-link"
              onClick={() => {
                setSlider(false);
              }}
            >
              <i className="fas fa-play-circle"></i>PlayList
            </NavLink>
            <NavLink
              to="/watchLater"
              className="mob-navigation-link"
              onClick={() => {
                setSlider(false);
              }}
            >
              <i className="fas fa-clock"></i>Watch Later
            </NavLink>
          </div>
        )}
        <h2 className="margin-l-xl">Let's <span className="text-primary font-inherit">Nacho</span></h2>
        {!token ? (
          <Link to="/login" className="nav-link margin-r-lg">
            <button className="btn btn-primary">LogIn</button>
          </Link>
        ) : (
          <button
            className="btn btn-primary margin-r-xl"
            onClick={logOutHandler}
          >
            Logout
          </button>
        )}
      </div>
    </>
  );
};
export { Header };
