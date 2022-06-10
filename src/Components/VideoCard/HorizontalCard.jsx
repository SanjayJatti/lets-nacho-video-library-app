import "./HorizontalCard.css";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../../Contexts/AuthContext";
import { useActions } from "../../Contexts/ActionsContext";
import {
  addToLikedVideo,
  removeFromLikedVideo,
} from "../../Services/LikeVideoServices";
import { removeFromHistory } from "../../Services/HistoryServices";
import {
  addToWatchLater,
  removeFromWatchLater,
} from "../../Services/WatchLaterServices";
import { PlaylistModal } from "../PlaylistModal/PlaylistModal";


const HorizontalCard = ({ video }) => {
  const [ modal, setModal ] = useState(false)
  const { _id, title, channel } = video;
  const navigate = useNavigate();
  const { actionsState, actionsDispatch } = useActions();
  const { likesData, watchLaterData, playlistModal } = actionsState;
  const { authState } = useAuth();
  const { token } = authState;
  const { pathname } = useLocation();
  return (
    <div>
      {modal && <PlaylistModal video={video} setModal={setModal} />}
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
                  token
                    ? removeFromLikedVideo(video._id, token, actionsDispatch)
                    : navigate("/login")
                }
              ></i>
            ) : (
              <i
                className="far fa-heart"
                onClick={() =>
                  token
                    ? addToLikedVideo(video, token, actionsDispatch)
                    : navigate("/login")
                }
              ></i>
            )}
            {watchLaterData.find(
              (watchLaterVideo) => watchLaterVideo._id === _id
            ) ? (
              <i
                className="fas fa-clock"
                onClick={() =>
                  token
                    ? removeFromWatchLater(video._id, token, actionsDispatch)
                    : navigate("/login")
                }
              ></i>
            ) : (
              <i
                className="far fa-clock"
                onClick={() =>
                  token
                    ? addToWatchLater(video, token, actionsDispatch)
                    : navigate("/login")
                }
              ></i>
            )}
            <i
              className="far fa-plus-square"
              onClick={() =>
                token
                  ? setModal(true)
                  : navigate("/login")
              }
            ></i>
          </div>
        </div>
      </div>
    </div>
  );
};
export { HorizontalCard };
