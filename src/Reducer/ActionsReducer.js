import { LIKES_DATA, HISTORY_DATA } from "../Constants/ActionsConstants";

const ActionsReducer = (state, action) => {
  switch (action.type) {
    case LIKES_DATA: {
      return { ...state, likesData: action.payload };
    }
    case HISTORY_DATA: {
      return { ...state, historyData: action.payload };
    }
    default:
      return state;
  }
};
export { ActionsReducer };
