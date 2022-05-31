import { useActions } from "../../Contexts/ActionsContext";
import { HorizontalCard } from "../../Components/VideoCard/HorizontalCard";

const WatchLater = () => {
  const { actionsState } = useActions();
  const { watchLaterData } = actionsState;
  const latestVideoId =
    watchLaterData.length > 0
      ? watchLaterData[watchLaterData.length - 1]._id
      : "";
  return (
    <div className="main-page flex-row gap-xl">
      {watchLaterData.length !== 0 && (
        <div>
          <img
            className="thumbnail-img"
            src={`https://img.youtube.com/vi/${latestVideoId}/maxresdefault.jpg`}
            alt="img"
            height="100%"
            width="100%"
          />
          <h3>Watch Later Videos</h3>
          <h4>{watchLaterData.length} videos</h4>
        </div>
      )}
      <div className="flex-column gap-md">
        {watchLaterData.length !== 0 ? (
          [...watchLaterData]
            .reverse()
            .map((video) => <HorizontalCard key={video._id} video={video} />)
        ) : (
          <h3>There is no video to watch later</h3>
        )}
      </div>
    </div>
  );
};
export { WatchLater };
