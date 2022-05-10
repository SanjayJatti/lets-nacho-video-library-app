import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

const navlinkStyle = {
  color: "var(--secondary-color",
  fontWeight: "500",
  fontSize: "inherit",
  display: "flex",
  flexDirection: "column"
};
export const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <div className="sidebar-list-wrapper">
        <Link to="/" style={navlinkStyle}>
          {" "}
          <i className="fas fa-home"></i>Home
        </Link>
        <Link to="/playlist" style={navlinkStyle}>
          <i className="fas fa-play-circle"></i>Playlist
        </Link>
        <Link to="/history" style={navlinkStyle}>
          {" "}
          <i className="fas fa-history"></i>History
        </Link>
        <Link to="/watchlater" style={navlinkStyle}>
          <i className="fas fa-clock"></i>Watch Later{" "}
        </Link>
        <Link to="/liked" style={navlinkStyle}>
          <i className="fas fa-heart"></i>Liked
        </Link>
      </div>
    </div>
  );
};
