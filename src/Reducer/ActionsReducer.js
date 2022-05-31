import { LIKES_DATA, HISTORY_DATA, WATCH_LATER_DATA } from "../Constants/ActionsConstants";

const ActionsReducer = (state, action) => {
  switch (action.type) {
    case LIKES_DATA: {
      return { ...state, likesData: action.payload };
    }
    case HISTORY_DATA: {
      return { ...state, historyData: action.payload };
    }
    case WATCH_LATER_DATA: {
      return { ...state, watchLaterData: action.payload };
    }
    default:
      return state;
  }
};
export { ActionsReducer };
