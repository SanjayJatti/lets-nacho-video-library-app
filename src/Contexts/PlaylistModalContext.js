import { createContext, useContext, useState } from "react";

const PlaylistModalContext = createContext();

function PlaylistModalProvider({ children }) {
  const [playlistModal, setPlaylistModal] = useState(false);

  return (
    <PlaylistModalContext.Provider value={{ playlistModal, setPlaylistModal }}>
      {children}
    </PlaylistModalContext.Provider>
  );
}

const usePlaylistModal = () => useContext(PlaylistModalContext);

export { PlaylistModalProvider, usePlaylistModal };
