import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { useData } from "../../Contexts/DataContext";
import ReactPlayer from "react-player/youtube";
import axios from "axios";
import "./SingleVideoPage.css";
import { HorizontalCard } from "../../Components/VideoCard/HorizontalCard";
import {
  addToLikedVideo,
  removeFromLikedVideo,
} from "../../Services/LikeVideoServices";
import { useAuth } from "../../Contexts/AuthContext";
import { useActions } from "../../Contexts/ActionsContext";
import { addToHistory } from "../../Services/HistoryServices";
import {
  addToWatchLater,
  removeFromWatchLater,
} from "../../Services/WatchLaterServices";
import { PlaylistModal } from "../../Components/PlaylistModal/PlaylistModal";

const SingleVideoPage = () => {
  const { id } = useParams();
  const [ modal, setModal] = useState(false);
  const [currentVideo, setCurrentVideo] = useState("");
  const { title, channel, description } = currentVideo;
  const { videos } = useData();

  const { authState } = useAuth();
  const { token } = authState;
  const navigate = useNavigate();

  const { actionsState, actionsDispatch } = useActions();
  const { likesData, watchLaterData } = actionsState;
  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(`/api/video/${id}`);
        setCurrentVideo(data.video);
      } catch (error) {
        console.error(error);
      }
    })();
  }, [id]);

  return (
    <div>
      {modal && <PlaylistModal video={currentVideo} setModal={setModal} />}
      <div className="single-video-page">
        <div className="video-player-container">
          <div className="react-player-container">
            <ReactPlayer
              className="react-player"
              width="100%"
              height="100%"
              controls={true}
              playing={true}
              url={`http://www.youtube.com/watch?v=${id}`}
              onStart={() => addToHistory(currentVideo, token, actionsDispatch)}
            />
          </div>
          <div className="flex-column gap-sm">
            <h4>{title}</h4>
            <div className="video-footer">
              {likesData.find((video) => video._id === id) ? (
                <h4
                  onClick={() =>
                    token
                      ? removeFromLikedVideo(
                          currentVideo._id,
                          token,
                          actionsDispatch
                        )
                      : navigate("/login")
                  }
                >
                  <i className="fas fa-heart"></i>Dislike
                </h4>
              ) : (
                <h4
                  onClick={() =>
                    token
                      ? addToLikedVideo(currentVideo, token, actionsDispatch)
                      : navigate("/login")
                  }
                >
                  <i className="far fa-heart"></i>Like
                </h4>
              )}
              {watchLaterData.find(
                (watchLaterVideo) => watchLaterVideo._id === id
              ) ? (
                <h4
                  onClick={() =>
                    token
                      ? removeFromWatchLater(
                          currentVideo._id,
                          token,
                          actionsDispatch
                        )
                      : navigate("/login")
                  }
                >
                  <i className="fas fa-clock"></i>
                  Remove
                </h4>
              ) : (
                <h4
                  onClick={() =>
                    token
                      ? addToWatchLater(currentVideo, token, actionsDispatch)
                      : navigate("/login")
                  }
                >
                  <i className="far fa-clock"></i>
                  Watch Later
                </h4>
              )}
              <h4 onClick={()=> token ? setModal(true) : navigate("/login")}>
                <i className="far fa-plus-square"></i>Add to Playlist
              </h4>
            </div>
            <h4>
              {channel}
              <i className="fas fa-check-circle font-inherit margin-l-xs"></i>
            </h4>
            <p>{description}</p>
          </div>
        </div>
        <div className="recommendation-list">
          {videos.map((video) => {
            return <HorizontalCard video={video} key={video._id} />;
          })}
        </div>
      </div>
    </div>
  );
};
export { SingleVideoPage };
