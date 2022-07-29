import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const DataContext = createContext();

const DataProvider = ({ children }) => {
  const [videos, setVideos] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getVideos = async () => {
      try {
        const response = await axios.get("/api/videos");
        setVideos(response.data.videos);
      } catch (error) {
        console.error(error);
      }
    };
    getVideos();

    const getCategories = async () => {
      try {
        const response = await axios.get("/api/categories");
        setCategories(response.data.categories);
      } catch (error) {
        console.error(error);
      }
    };
    getCategories();
  }, []);
  return (
    <DataContext.Provider value={{ videos, setVideos, categories }}>
      {children}
    </DataContext.Provider>
  );
};

const useData = () => useContext(DataContext);

export { DataProvider, useData };
