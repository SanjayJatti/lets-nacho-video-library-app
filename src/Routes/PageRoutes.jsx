import React from "react";
import { Routes, Route } from "react-router-dom";
import { Login } from "../Pages/Authentication/Login.jsx";
import { Signup } from "../Pages/Authentication/Signup.jsx";
import { Home, Playlist, History, WatchLater, LikedVideos} from "../Pages/index.js"

const PageRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/playlist" element={<Playlist/>}/>
        <Route path="/history" element={<History/>}/>
        <Route path="/watchlater" element={<WatchLater/>}/>
        <Route path="/liked" element={<LikedVideos/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
      </Routes>
    </>
  );
};
export { PageRoutes };