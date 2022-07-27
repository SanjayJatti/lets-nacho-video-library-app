import axios from "axios";
import { HISTORY_DATA } from "../Constants/ActionsConstants";
import toast from 'react-hot-toast';
import { ToastStyle } from "../Components/ToastStyle/ToastStyle";

const getHistory = async (token, actionsDispatch) => {
  try {
    const response = await axios.get("/api/user/history", {
      headers: {
        authorization: token,
      },
    });
    actionsDispatch({ type: HISTORY_DATA, payload: response.data.history });
  } catch (error) {
    console.error(error);
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
    console.error(error);
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
    toast.success("Deleted from history",ToastStyle)
  } catch (error) {
   toast.error("Failed to delete from history", ToastStyle)
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
    toast.success("Cleared all history",ToastStyle)
  } catch (error) {
    toast.error(" Failed to clear all history", ToastStyle)
  }
};

export { getHistory, addToHistory, removeFromHistory, clearAllHistory };
