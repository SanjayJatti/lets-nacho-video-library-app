import { HorizontalCard } from "../../Components/VideoCard/HorizontalCard";
import { useActions } from "../../Contexts/ActionsContext";
import "./LikedVideos.css";

const LikedVideos = () => {
  const { actionsState } = useActions();
  const { likesData } = actionsState;
  const latestVideoId =
    likesData.length > 0 ? likesData[likesData.length - 1]._id : "";
  return (
    <div className="feature-page">
      {likesData.length !== 0 && (
        <div>
          <img
            className="thumbnail-img"
            src={`https://img.youtube.com/vi/${latestVideoId}/maxresdefault.jpg`}
            alt="img"
            height="100%"
            width="100%"
          />
          <h3>Liked Videos</h3>
          <h4>{likesData.length} videos</h4>
        </div>
      )}
      <div className="flex-column gap-md">
        {likesData.length !== 0 ? (
          [...likesData]
            .reverse()
            .map((video) => <HorizontalCard key={video._id} video={video} />)
        ) : (
          <h3>There is no liked video</h3>
        )}
      </div>
    </div>
  );
};

export { LikedVideos };
