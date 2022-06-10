import { useParams } from "react-router-dom";
import { useActions } from "../../Contexts/ActionsContext";
import { HorizontalCard } from "../VideoCard/HorizontalCard";

const PlaylistFile = () => {
  const { actionsState } = useActions();
  const { playlistData } = actionsState;
  const { playlistId } = useParams();
  
  const singlePlaylist = playlistData.find((item) => item._id === playlistId);

  const latestVideoId =
    singlePlaylist.videos.length > 0
      ? singlePlaylist.videos[singlePlaylist.videos.length - 1]._id
      : "";
  return (
    <div className="main-page flex-row gap-xl">
      {singlePlaylist.videos.length !== 0 && (
        <div>
          <img
            className="thumbnail-img"
            src={`https://img.youtube.com/vi/${latestVideoId}/maxresdefault.jpg`}
            alt="img"
            height="100%"
            width="100%"
          />
          <h3>{singlePlaylist.title}</h3>
          <p>{singlePlaylist.description}</p>
          <h4>{singlePlaylist.videos.length} videos</h4>
        </div>
      )}
      <div className="flex-column gap-md">
        {singlePlaylist && singlePlaylist.videos.length !== 0 ? (
          [...singlePlaylist.videos]
            .reverse()
            .map((video) => <HorizontalCard key={video._id} video={video} />)
        ) : (
          <h3>Add videos in this playlist</h3>
        )}
      </div>
    </div>
  );
};
export { PlaylistFile };
