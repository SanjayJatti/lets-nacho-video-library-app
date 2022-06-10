import React from "react";
import { Routes, Route } from "react-router-dom";
import { PlaylistFile } from "../Components/PlaylistFile/PlaylistFile.jsx";
import { PrivateRoute } from "../Components/Privateroute/PrivateRoute.jsx";
import {
  Home,
  Playlist,
  History,
  WatchLater,
  LikedVideos,
  SingleVideoPage,
  Login,
  Signup,
} from "../Pages/index.js";

const PageRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<SingleVideoPage />} />
        <Route
          path="/playlist"
          element={
            <PrivateRoute>
              <Playlist />
            </PrivateRoute>
          }
        />
        <Route
          path="/playlist/:playlistId"
          element={
            <PrivateRoute>
              <PlaylistFile />
            </PrivateRoute>
          }
        />
        <Route
          path="/history"
          element={
            <PrivateRoute>
              <History />
            </PrivateRoute>
          }
        />
        <Route
          path="/watchlater"
          element={
            <PrivateRoute>
              <WatchLater />
            </PrivateRoute>
          }
        />
        <Route
          path="/liked"
          element={
            <PrivateRoute>
              <LikedVideos />
            </PrivateRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
};
export { PageRoutes };
