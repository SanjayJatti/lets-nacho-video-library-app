import { VideoCard } from "../../Components/VideoCard/VideoCard";
import { useData } from "../../Contexts/DataContext";
import { useFilter } from "../../Contexts/FilterContext";
import "./Home.css";

const Home = () => {
  const { videos, categories } = useData();
  const { category, setCategory } = useFilter();

  const filterHandler = (categoryName) => {
    setCategory(categoryName);
  };

  const getFilteredData = (videos, category) => {
    if (category === "All") return videos;
    return videos.filter((video) => video.category === category);
  };
  const filteredData = getFilteredData(videos, category)
  return (
    <>
      <div className="main-page">
        <div className="categories-container">
          {categories.map(({ categoryName, _id }) => {
            return (
              <div
                className={`chip ${categoryName === category ? "active-chip" : null}`}
                key={_id}
                onClick={() => filterHandler(categoryName)}
              >
                {categoryName}
              </div>
            );
          })}
        </div>
        <div className="videos-wrapper">
          {filteredData.map((video) => {
            return <VideoCard video={video} key={video._id} />;
          })}
        </div>
      </div>
    </>
  );
};
export { Home };
