import axios from "axios";
import { HISTORY_DATA } from "../Constants/ActionsConstants";

const getHistory = async (token, actionsDispatch) => {
  try {
    const response = await axios.get("/api/user/history", {
      headers: {
        authorization: token,
      },
    });
    actionsDispatch({ type: HISTORY_DATA, payload: response.data.history });
  } catch (error) {
    console.log(error);
  }
};

const addToHistory = async (video, token, actionsDispatch) => {
  try {
    const response = await axios.post(
      "/api/user/history",
      { video },
      {
        headers: {
          authorization: token,
        },
      }
    );
    actionsDispatch({ type: HISTORY_DATA, payload: response.data.history });
  } catch (error) {
    console.log(error);
  }
};

const removeFromHistory = async (id, token, actionsDispatch) => {
  try {
    const response = await axios.delete(`/api/user/history/${id}`, {
      headers: {
        authorization: token,
      },
    });
    actionsDispatch({ type: HISTORY_DATA, payload: response.data.history });
  } catch (error) {
    console.log(error);
  }
};

const clearAllHistory = async (token, actionsDispatch) => {
  try {
    const response = await axios.delete("/api/user/history/all", {
      headers: {
        authorization: token,
      },
    });
    actionsDispatch({ type: HISTORY_DATA, payload: response.data.history });
  } catch (error) {
    console.log(error);
  }
};

export { getHistory, addToHistory, removeFromHistory, clearAllHistory };
