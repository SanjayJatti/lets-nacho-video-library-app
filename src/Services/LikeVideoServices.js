import axios from "axios";
import { LIKES_DATA } from "../Constants/ActionsConstants";
import toast from 'react-hot-toast';
import { ToastStyle } from "../Components/ToastStyle/ToastStyle"

const getLikedVideos = async (token, actionsDispatch) => {
  try {
    const response = await axios.get("/api/user/likes", {
      headers: {
        authorization: token,
      },
    });
    actionsDispatch({ type: LIKES_DATA, payload: response.data.likes });
  } catch (error) {
    console.error(error);
  }
};

const addToLikedVideo = async (video, token, actionsDispatch) => { 
  try {
    const response = await axios.post(
      "/api/user/likes",
      { video },
      {
        headers: {
          authorization: token,
        },
      }
    );
    actionsDispatch({ type: LIKES_DATA, payload: response.data.likes });
    toast.success("Added to the liked videos", ToastStyle)
  } catch (error) {
    toast.error(" Failed to add to the liked videos", ToastStyle)
  }
};

const removeFromLikedVideo = async (id, token, actionsDispatch) => {
  try {
    const response = await axios.delete(`/api/user/likes/${id}`, {
      headers: {
        authorization: token,
      },
    });
    actionsDispatch({ type: LIKES_DATA, payload: response.data.likes });
    toast.success("Removed from the liked videos", ToastStyle)
  } catch (error) {
    toast.error(" Failed to remove from the liked videos", ToastStyle)
  }
};

export { getLikedVideos, addToLikedVideo, removeFromLikedVideo };
