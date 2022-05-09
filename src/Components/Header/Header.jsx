import "./Header.css"
const Header = () => {
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
            <div className="nav-link btn btn-primary">
              <p>LogIn</p>
            </div>
          </li>
      </ul>
    </div>
  )
}
export { Header }
