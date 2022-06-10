import "./VideoCard.css";
import { useNavigate } from "react-router-dom";
import { useActions } from "../../Contexts/ActionsContext";
import {
  addToLikedVideo,
  removeFromLikedVideo,
} from "../../Services/LikeVideoServices";
import { useAuth } from "../../Contexts/AuthContext";
import {
  addToWatchLater,
  removeFromWatchLater,
} from "../../Services/WatchLaterServices";
import { useState } from "react";
import { PlaylistModal } from "../PlaylistModal/PlaylistModal";

const VideoCard = ({ video }) => {
  const [modal, setModal] = useState(false);
  const { _id, title, channel } = video;
  const navigate = useNavigate();
  const { actionsState, actionsDispatch } = useActions();
  const { likesData, watchLaterData, playlistModal } = actionsState;
  const { authState } = useAuth();
  const { token } = authState;
  return (
    <div>
      {modal ? <PlaylistModal video={video} setModal={setModal} /> : null}
      <div className="video-card">
        <div onClick={() => navigate(`/${_id}`)}>
          <img
            className="card-img"
            src={`https://img.youtube.com/vi/${_id}/maxresdefault.jpg`}
            alt="img"
          />
          <h4>{title}</h4>
        </div>

        <div className="card-footer">
          <p className="text-small">
            {channel} <i className="fas fa-check-circle font-inherit"></i>
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
              onClick={(e) => {
                token ? setModal(true) : navigate("/login");
              }}
            ></i>
          </div>
        </div>
      </div>
    </div>
  );
};
export { VideoCard };
