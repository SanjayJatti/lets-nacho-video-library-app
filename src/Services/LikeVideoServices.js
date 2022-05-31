import axios from "axios";
import { LIKES_DATA } from "../Constants/ActionsConstants";

const getLikedVideos = async (token, actionsDispatch) => {
  try {
    const response = await axios.get("/api/user/likes", {
      headers: {
        authorization: token,
      },
    });
    actionsDispatch({ type: LIKES_DATA, payload: response.data.likes });
  } catch (error) {
    console.log(error);
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
  } catch (error) {
    console.log(error);
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
  } catch (error) {
    console.log(error);
  }
};

export { getLikedVideos, addToLikedVideo, removeFromLikedVideo };
