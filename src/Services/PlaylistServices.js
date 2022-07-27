import axios from "axios";
import { PLAYLIST_DATA, SINGLE_PLAYLIST } from "../Constants/ActionsConstants";
import toast from "react-hot-toast";
import { ToastStyle } from "../Components/ToastStyle/ToastStyle";


const getPlaylistData = async (token, actionsDispatch) => {
  try {
    const response = await axios.get("/api/user/playlists", {
      headers: {
        authorization: token,
      },
    });
    actionsDispatch({
      type: PLAYLIST_DATA,
      payload: response.data.playlists,
    });
  } catch (error) {
    console.error(error);
  }
};

const createNewPlaylist = async (newPlaylist, token, actionsDispatch) => {
  try {
    const response = await axios.post(
      "/api/user/playlists",
      {
        playlist: newPlaylist,
      },
      {
        headers: {
          authorization: token,
        },
      }
    );
    actionsDispatch({
      type: PLAYLIST_DATA,
      payload: response.data.playlists,
    });
    toast.success("Created a new playlist", ToastStyle)
  } catch (error) {
    toast.error(" Failed to create a new playlist", ToastStyle)
  }
};

const deletePlaylist = async (id, token, actionsDispatch) => {
  try {
    const response = await axios.delete(`/api/user/playlists/${id}`, {
      headers: {
        authorization: token,
      },
    });
    actionsDispatch({
      type: PLAYLIST_DATA,
      payload: response.data.playlists,
    });
    toast.success("Playlist is deleted", ToastStyle)
  } catch (error) {
    toast.error(" Failed to delete the playlist", ToastStyle)
  }
};

const getPlaylistByID = async (playlistID, token) => {
  try {
    const response = await axios.get(`/api/user/playlists/${playlistID}`, {
      headers: {
        authorization: token,
      },
    });
    return response.data.playlist;
  } catch (error) {
    console.error(error);
  }
};

const addVideoInPlaylist = async (
  playlistID,
  video,
  actionsDispatch,
  token
) => {
  try {
    const response = await axios.post(
      `/api/user/playlists/${playlistID}`,
      {
        video,
      },
      {
        headers: {
          authorization: token,
        },
      }
    );
    actionsDispatch({
      type: SINGLE_PLAYLIST,
      payload: response.data.playlist
    });
    toast.success("Video added to the playlist",ToastStyle)
  } catch (error) {
    toast.error(" Unable to add to the playlist", ToastStyle)
  }
};

const deletePlaylistVideo = async (
  playlistID,
  videoID,
  actionsDispatch,
  token
) => {
  try {
    const response = await axios.delete(
      `/api/user/playlists/${playlistID}/${videoID}`,

      {
        headers: {
          authorization: token,
        },
      }
    );

    actionsDispatch({
      type: SINGLE_PLAYLIST,
      payload: response.data.playlist
    });
    toast.success("Removed from the playlist", ToastStyle)
  } catch (error) {
    toast.error("Failed to remove from the playlist",ToastStyle)
  }
};

export {
  getPlaylistData,
  createNewPlaylist,
  deletePlaylist,
  getPlaylistByID,
  addVideoInPlaylist,
  deletePlaylistVideo,
};
