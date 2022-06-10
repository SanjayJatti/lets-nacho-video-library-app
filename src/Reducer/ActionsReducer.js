import {
  LIKES_DATA,
  HISTORY_DATA,
  WATCH_LATER_DATA,
  PLAYLIST_DATA,
  SINGLE_PLAYLIST
} from "../Constants/ActionsConstants";

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
    case PLAYLIST_DATA: {
      return {
        ...state, playlistData: action.payload,
      };
    }
    case SINGLE_PLAYLIST: {
      return {
        ...state, playlistData: state.playlistData.map( (playlist) =>  playlist._id === action.payload._id ? action.payload : playlist ) 
      }
    }
    default:
      return state;
  }
};
export { ActionsReducer };
