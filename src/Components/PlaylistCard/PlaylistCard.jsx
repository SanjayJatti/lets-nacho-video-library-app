import { Link } from "react-router-dom";
import { useActions } from "../../Contexts/ActionsContext";
import { useAuth } from "../../Contexts/AuthContext";
import { deletePlaylist } from "../../Services/PlaylistServices";
import "./PlaylistCard.css";

const PlaylistCard = ({ playlist }) => {
  const { authState } = useAuth();
  const { token } = authState;
  const { actionsDispatch } = useActions();

  const latestVideoId =
    playlist.videos.length > 0
      ? playlist.videos[playlist.videos.length - 1]._id
      : "";
  return (
    <div className="playlistCard">
      <Link to={`/playlist/${playlist._id}`}>
        <img
          src={`https://img.youtube.com/vi/${latestVideoId}/maxresdefault.jpg`}
          className="playlistCard-img"
          alt={playlist.title}
        />
      </Link>
      <div className="playlistCard-footer">
        <h4>{playlist.title}</h4>
        <i
          className="fas fa-trash-alt text-danger cursor-pointer"
          onClick={() => deletePlaylist(playlist._id, token, actionsDispatch)}
        ></i>
      </div>
    </div>
  );
};
export { PlaylistCard };
