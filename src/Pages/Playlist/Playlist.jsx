import { useActions } from "../../Contexts/ActionsContext";
import { PlaylistCard } from "../../Components/PlaylistCard/PlaylistCard";

const Playlist = () => {
  const { actionsState } = useActions();
  const { playlistData } = actionsState;
  return (
    <div className="feature-page">
      {playlistData.length !== 0 ? (
        playlistData.map((playlist) => (
          <PlaylistCard key={playlist._id} playlist={playlist} />
        ))
      ) : (
        <h3>You can create playlist and add videos in that</h3>
      )}
    </div>
  );
};
export { Playlist };
