import { useParams, useNavigate } from "react-router-dom";
import { useActions } from "../../Contexts/ActionsContext";
import { useAuth } from "../../Contexts/AuthContext";
import { deletePlaylist } from "../../Services/PlaylistServices";
import { HorizontalCard } from "../VideoCard/HorizontalCard";

const PlaylistFile = () => {
  const { actionsState, actionsDispatch } = useActions();
  const { playlistData } = actionsState;
  const { playlistId } = useParams();
  const { authState } = useAuth();
  const { token } = authState;
  const navigate = useNavigate();

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
          <button
            className="btn btn-danger"
            onClick={() => {
              deletePlaylist(playlistId, token, actionsDispatch);
              navigate("/playlist/");
            }}
          >
            Delete Playlist
          </button>
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
