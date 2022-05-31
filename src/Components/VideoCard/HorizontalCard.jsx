import "./HorizontalCard.css";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../../Contexts/AuthContext";
import { useActions } from "../../Contexts/ActionsContext";
import {
  addToLikedVideo,
  removeFromLikedVideo,
} from "../../Services/LikeVideoServices";
import { removeFromHistory } from "../../Services/HistoryServices";
import { addToWatchLater, removeFromWatchLater } from "../../Services/WatchLaterServices";

const HorizontalCard = ({ video }) => {
  const { _id, title, channel } = video;
  const navigate = useNavigate();
  const { actionsState, actionsDispatch } = useActions();
  const { likesData, watchLaterData } = actionsState;
  const { authState } = useAuth();
  const { token } = authState;
  const { pathname } = useLocation();
  return (
    <div className="Horizontal-card">
      {pathname === "/history" && (
        <i
          className="fas fa-times-circle delete-btn"
          onClick={() => removeFromHistory(_id, token, actionsDispatch)}
        ></i>
      )}
      <img
        className="Horizontal-card-img"
        src={`https://img.youtube.com/vi/${_id}/maxresdefault.jpg`}
        alt="img"
        onClick={() => navigate(`/${_id}`)}
      />
      <div className="video-info">
        <h5 className="cursor-pointer" onClick={() => navigate(`/${_id}`)}>
          {title}
        </h5>
        <p
          className="text-small cursor-pointer"
          onClick={() => navigate(`/${_id}`)}
        >
          {channel}
        </p>
        <div className="footer-actions">
          {likesData.find((likedVideo) => likedVideo._id === _id) ? (
            <i
              className="fas fa-heart"
              onClick={() =>
                removeFromLikedVideo(video._id, token, actionsDispatch)
              }
            ></i>
          ) : (
            <i
              className="far fa-heart"
              onClick={() => addToLikedVideo(video, token, actionsDispatch)}
            ></i>
          )}
          {watchLaterData.find(
            (watchLaterVideo) => watchLaterVideo._id === _id
          ) ? (
            <i
              className="fas fa-clock"
              onClick={() =>
                removeFromWatchLater(video._id, token, actionsDispatch)
              }
            ></i>
          ) : (
            <i
              className="far fa-clock"
              onClick={() => addToWatchLater(video, token, actionsDispatch)}
            ></i>
          )}
          <i className="far fa-plus-square"></i>
        </div>
      </div>
    </div>
  );
};
export { HorizontalCard };
