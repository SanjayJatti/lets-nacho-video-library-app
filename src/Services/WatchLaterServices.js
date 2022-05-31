import axios from "axios";
import { WATCH_LATER_DATA } from "../Constants/ActionsConstants";

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
    console.log(error);
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
  } catch (error) {
    console.log(error);
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
  } catch (error) {
    console.log(error);
  }
};

export { getWatchLaterVideos, addToWatchLater, removeFromWatchLater };
