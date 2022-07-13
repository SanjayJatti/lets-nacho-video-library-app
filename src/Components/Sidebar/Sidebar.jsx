import React from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";

export const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <div className="sidebar-list-wrapper">
        <NavLink to="/" className="sidebar-link">
          <i className="fas fa-home"></i>Home
        </NavLink>
        <NavLink to="/playlist" className="sidebar-link">
          <i className="fas fa-play-circle"></i>Playlist
        </NavLink>
        <NavLink to="/history" className="sidebar-link">
          <i className="fas fa-history"></i>History
        </NavLink>
        <NavLink to="/watchlater" className="sidebar-link">
          <i className="fas fa-clock"></i>Watch Later{" "}
        </NavLink>
        <NavLink to="/liked" className="sidebar-link">
          <i className="fas fa-heart"></i>Liked
        </NavLink>
      </div>
    </div>
  );
};
