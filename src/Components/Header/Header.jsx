import { Link, useNavigate } from "react-router-dom";
import { AUTH_TOKEN } from "../../Constants/AuthConstants";
import { useAuth } from "../../Contexts/AuthContext"
import "./Header.css";
const Header = () => {
  const { authState, authDispatch } = useAuth();
  const { token } = authState;
  const navigate = useNavigate();

  const logOutHandler = () => {
    localStorage.removeItem("token");
    authDispatch({
      type: AUTH_TOKEN,
      payload: null
    });
    navigate("/");
  };
  return (
    <div className="navbar-container">
      <div className="nav-link header-title">
        <h2>Let's Nacho</h2>
      </div>
      <div className="search-box-container margin-auto">
        <div className="search-box flex-center">
          <input
            className="search-txt"
            type="search"
            name="search"
            placeholder="Type to search"
          />
          <div className="search-btn flex-center">
            <i className="fas fa-search"></i>
          </div>
        </div>
      </div>

      <ul className="nav-list nav-social-media">
        <li className="nav-item">
        {!token ? (
            <Link to="/login" className="nav-link btn btn-primary">
              <button className="btn btn-primary">LogIn</button>
            </Link>
          ) : (
            <div className="nav-link">
              <button 
              className="btn btn-primary"
              onClick={logOutHandler}>Logout</button>
            </div>
          )}
        </li>
      </ul>
    </div>
  );
};
export { Header };
