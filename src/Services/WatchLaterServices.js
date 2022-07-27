import axios from "axios";
import { WATCH_LATER_DATA } from "../Constants/ActionsConstants";
import toast from "react-hot-toast";
import { ToastStyle } from "../Components/ToastStyle/ToastStyle";

const getWatchLaterVideos = async (token, actionsDispatch) => {
  try {
    const response = await axios.get("/api/user/watchlater", {
      headers: {
        authorization: token,
      },
    });
    actionsDispatch({
      type: WATCH_LATER_DATA,
      payload: response.data.watchlater,
    });
  } catch (error) {
    console.error(error);
  }
};

const addToWatchLater = async (video, token, actionsDispatch) => {
  try {
    const response = await axios.post(
      "/api/user/watchlater",
      { video },
      {
        headers: {
          authorization: token,
        },
      }
    );
    actionsDispatch({
      type: WATCH_LATER_DATA,
      payload: response.data.watchlater,
    });
    toast.success("Added to watch later",ToastStyle)
  } catch (error) {
    toast.error("failed to add to watch later",ToastStyle)
  }
};

const removeFromWatchLater = async (id, token, actionsDispatch) => {
  try {
    const response = await axios.delete(`/api/user/watchlater/${id}`, {
      headers: {
        authorization: token,
      },
    });
    actionsDispatch({
      type: WATCH_LATER_DATA,
      payload: response.data.watchlater,
    });
    toast.success("Removed from watch later",ToastStyle)
  } catch (error) {
    toast.error("Failed to remove from watch later")
  }
};

export { getWatchLaterVideos, addToWatchLater, removeFromWatchLater };
