import { createContext, useContext, useReducer, useEffect } from "react";
import { ActionsReducer } from "../Reducer/ActionsReducer";
import { getLikedVideos } from "../Services/LikeVideoServices";
import { getHistory } from "../Services/HistoryServices";
import { useAuth } from "./AuthContext";

const actionsContext = createContext();

function ActionsProvider({ children }) {
  const { authState } = useAuth();
  const { token } = authState;
  const initialActionsState = {
    likesData: [],
    historyData: [],
    watchLaterData: [],
    error: "",
  };
  const [actionsState, actionsDispatch] = useReducer(
    ActionsReducer,
    initialActionsState
  );
  useEffect(() => {
    if (token) {
      getLikedVideos(actionsDispatch, token);
      getHistory(actionsDispatch, token);
    }
  }, [token]);
  return (
    <actionsContext.Provider value={{ actionsState, actionsDispatch }}>
      {children}
    </actionsContext.Provider>
  );
}

const useActions = () => useContext(actionsContext);

export { ActionsProvider, useActions };
