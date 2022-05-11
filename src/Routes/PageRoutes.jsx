import React from "react";
import { Routes, Route } from "react-router-dom";
import { Home, Playlist, History, WatchLater, LikedVideos, SingleVideoPage, Login, Signup} from "../Pages/index.js"

const PageRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/:id" element={<SingleVideoPage/>}/>
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