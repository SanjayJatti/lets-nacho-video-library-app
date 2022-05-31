import { useParams } from "react-router-dom";
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

const SingleVideoPage = () => {
  const { id } = useParams();
  const [currentVideo, setCurrentVideo] = useState("");
  const { title, channel, description } = currentVideo;
  const { videos } = useData();

  const { authState } = useAuth();
  const { token } = authState;

  const { actionsState, actionsDispatch } = useActions();
  const { likesData } = actionsState;
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
    <>
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
                    removeFromLikedVideo(
                      currentVideo._id,
                      token,
                      actionsDispatch
                    )
                  }
                >
                  <i className="fas fa-heart"></i>Dislike
                </h4>
              ) : (
                <h4
                  onClick={() =>
                    addToLikedVideo(currentVideo, token, actionsDispatch)
                  }
                >
                  <i className="far fa-heart"></i>Like
                </h4>
              )}

              <h4>
                <i className="far fa-clock"></i>Watch Later
              </h4>
              <h4>
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
    </>
  );
};
export { SingleVideoPage };
