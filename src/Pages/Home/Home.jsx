import { Sidebar } from "../../Components/Sidebar/Sidebar";
import { VideoCard } from "../../Components/VideoCard/VideoCard";
import { useData } from "../../Contexts/DataContext";
import "./Home.css";

const Home = () => {
  const { videos } = useData();
  return (
    <>
      <div className="main-page">
        {videos.map((video) => {
          return <VideoCard video={video} key={video._id} />;
        })}
      </div>
    </>
  );
};
export { Home };
