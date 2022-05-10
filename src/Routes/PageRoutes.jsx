import React from "react";
import { Routes, Route } from "react-router-dom";
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
      </Routes>
    </>
  );
};
export { PageRoutes };