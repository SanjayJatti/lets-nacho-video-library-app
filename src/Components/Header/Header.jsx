import { useState } from "react";
import { NavLink, Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../Contexts/AuthContext";
import { useTheme } from "../../Contexts/ThemeContext";
import { logOutHandler } from "../../Services/AuthServices";
import "./Header.css";

const Header = () => {
  const [slider, setSlider] = useState(false);
  const { authState, authDispatch } = useAuth();
  const { token } = authState;
  const { theme, themeToggle } = useTheme();
  const navigate = useNavigate();

  return (
    <>
      <div className="navbar-container">
        <div
          className="hamburger cursor-pointer"
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
        <Link to="/" className="nav-title cursor-pointer">
          <h2 className="margin-l-xl">
            Let's <span className="text-primary font-inherit">Nacho</span>
          </h2>
        </Link>
        <div className="flex-center gap-lg">
          <button className="btn-icon" onClick={themeToggle}>
            {theme === "darkTheme" ? (
              <i className="fas fa-sun theme text-white toggle-light"></i>
            ) : (
              <i className="fas fa-moon theme toggle-dark"></i>
            )}
          </button>

          {!token ? (
            <Link to="/login" className="nav-link margin-r-lg">
              <button className="btn btn-primary">LogIn</button>
            </Link>
          ) : (
            <button
              className="btn btn-primary margin-r-xl"
              onClick={() => logOutHandler(authDispatch, navigate)}
            >
              Logout
            </button>
          )}
        </div>
      </div>
    </>
  );
};
export { Header };
