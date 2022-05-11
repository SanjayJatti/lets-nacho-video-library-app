import "./VideoCard.css";
import { useNavigate } from "react-router-dom";

const VideoCard = ({ video }) => {
  const { _id, title, channel } = video;
  const navigate = useNavigate();
  return (
    <div className="video-card" onClick={() => navigate(`/${_id}`)}>
      <img
        className="card-img"
        src={`https://img.youtube.com/vi/${_id}/maxresdefault.jpg`}
        alt="img"
      />
      <div>
        <h4>{title}</h4>
        <div className="card-footer">
          <p className="text-small">
            {channel} <i className="fas fa-check-circle font-inherit"></i>
          </p>
          <div className="footer-actions">
            <i className="far fa-heart"></i>
            <i className="far fa-clock"></i>
            <i className="far fa-plus-square"></i>
          </div>
        </div>
      </div>
    </div>
  );
};
export { VideoCard };
