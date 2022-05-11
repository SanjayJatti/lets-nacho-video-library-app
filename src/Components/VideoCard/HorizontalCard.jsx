import "./HorizontalCard.css";
import { useNavigate } from "react-router-dom";

const HorizontalCard = ({ video }) => {
  const { _id, title, channel } = video;
  const navigate = useNavigate();
  return (
    <div className="Horizontal-card" onClick={() => navigate(`/${_id}`)}>
      <img
        className="Horizontal-card-img"
        src={`https://img.youtube.com/vi/${_id}/maxresdefault.jpg`}
        alt="img"
      />
      <div className="video-info">
        <h5>{title}</h5>
        <p className="text-small">
          {channel}
        </p>
        <div className="footer-actions">
          <i className="far fa-heart"></i>
          <i className="far fa-clock"></i>
          <i className="far fa-plus-square"></i>
        </div>
      </div>
    </div>
  );
};
export { HorizontalCard };
