import { useActions } from "../../Contexts/ActionsContext";
import { useState } from "react";
import "./PlaylistModal.css";
import { useAuth } from "../../Contexts/AuthContext";
import {
  addVideoInPlaylist,
  createNewPlaylist,
  deletePlaylistVideo,
} from "../../Services/PlaylistServices";

const PlaylistModal = ({ video, setModal }) => {
  const [newPlaylist, setNewPlaylist] = useState({
    title: "",
    description: "",
  });
  const { authState } = useAuth();
  const { token } = authState;

  const { actionsState, actionsDispatch } = useActions();
  const { playlistData } = actionsState;
 
  return (
    <div className="playlistModal">
      <div className="playlistModal-main">
        <div className="playlistModal-header">
          <h4>Save to...</h4>
          <i
            className="fas fa-times flex-center cursor-pointer"
            onClick={() => setModal(false)}
          ></i>
        </div>
        <hr />
        <div className="playlistNames">
          {playlistData.length !== 0 &&
            playlistData.map((playlist, index) => (
              <div key={index}>
                <input
                  type="checkbox"
                  className="margin-r-xs"
                  id={playlist._id}
                  checked={playlist.videos.some(
                    (item) => item._id === video._id
                  )}
                  onChange={(e) =>
                    e.target.checked
                      ? addVideoInPlaylist(
                          playlist._id,
                          video,
                          actionsDispatch,
                          token
                        )
                      : deletePlaylistVideo(
                          playlist._id,
                          video._id,
                          actionsDispatch,
                          token
                        )
                  }
                />
                <label htmlFor={playlist._id} className="cursor-pointer">{playlist.title}</label>
              </div>
            ))}
        </div>
        <hr />
        <div className="margin-t-sm">
          <form
            className="flex-column gap-sm playlist-input"
            onSubmit={(e) => {
              e.preventDefault();
              createNewPlaylist(newPlaylist, token, actionsDispatch);
            }}
          >
            <input
              required
              type="text"
              placeholder="Playlist Name"
              onChange={(e) =>
                setNewPlaylist({ ...newPlaylist, title: e.target.value })
              }
            />
            <input
              required
              type="text"
              placeholder="Description"
              onChange={(e) =>
                setNewPlaylist({ ...newPlaylist, description: e.target.value })
              }
            />
            <button className="btn btn-primary" type="submit">
              Create New Playlist
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export { PlaylistModal };
