import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";

export const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <div className="sidebar-list-wrapper">
        <Link to="/" className="sidebar-link">
          {" "}
          <i className="fas fa-home"></i>Home
        </Link>
        <Link to="/playlist" className="sidebar-link">
          <i className="fas fa-play-circle"></i>Playlist
        </Link>
        <Link to="/history" className="sidebar-link">
          {" "}
          <i className="fas fa-history"></i>History
        </Link>
        <Link to="/watchlater" className="sidebar-link">
          <i className="fas fa-clock"></i>Watch Later{" "}
        </Link>
        <Link to="/liked" className="sidebar-link">
          <i className="fas fa-heart"></i>Liked
        </Link>
      </div>
    </div>
  );
};
