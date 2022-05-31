import "./VideoCard.css";
import { useNavigate } from "react-router-dom";
import { useActions } from "../../Contexts/ActionsContext";
import { addToLikedVideo, removeFromLikedVideo } from "../../Services/LikeVideoServices";
import { useAuth } from "../../Contexts/AuthContext";

const VideoCard = ({ video }) => {
  const { _id, title, channel } = video;
  const navigate = useNavigate();
  const { actionsState, actionsDispatch } = useActions();
  const { likesData } = actionsState;
  const { authState } = useAuth();
  const { token } = authState
  return (
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
                removeFromLikedVideo(video._id, token, actionsDispatch)
              }
            ></i>
          ) : (
            <i
              className="far fa-heart"
              onClick={() => addToLikedVideo(video, token, actionsDispatch)}
            ></i>
          )}
          <i className="far fa-clock"></i>
          <i className="far fa-plus-square"></i>
        </div>
      </div>
    </div>
  );
};
export { VideoCard };
