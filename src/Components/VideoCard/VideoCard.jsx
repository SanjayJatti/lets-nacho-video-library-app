import "./VideoCard.css"
const VideoCard = ({video}) => {
    const { _id , title , channel } = video ;
  return (
    <div className="video-card">
      <img
      className="card-img"
        src={`https://img.youtube.com/vi/${_id}/maxresdefault.jpg`} 
        alt="img"
      />
      <div className="video-info">
        <h4>{title}</h4>
        <div className="card-footer">
          <p className="text-small">{channel} <i class="fas fa-check-circle"></i></p>
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
