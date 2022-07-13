import { useActions } from "../../Contexts/ActionsContext";
import { HorizontalCard } from "../../Components/VideoCard/HorizontalCard";
import { useAuth } from "../../Contexts/AuthContext";
import { clearAllHistory } from "../../Services/HistoryServices";

const History = () => {
  const { actionsState, actionsDispatch } = useActions();
  const { historyData } = actionsState;
  const { authState } = useAuth();
  const { token } = authState;
  const latestVideoId =
    historyData.length > 0 ? historyData[historyData.length - 1]._id : "";
  return (
    <div className="feature-page">
      {historyData.length == 0 && <h3>History is empty</h3>}
      {historyData.length !== 0 && (
        <div>
          <img
            className="thumbnail-img"
            src={`https://img.youtube.com/vi/${latestVideoId}/maxresdefault.jpg`}
            alt="img"
            height="100%"
            width="100%"
          />
          <h3>History</h3>
          <button
            className="btn btn-primary"
            onClick={() => clearAllHistory(token, actionsDispatch)}
          >
            Clear All
          </button>
        </div>
      )}
      {historyData !== 0 && (
        <div className="flex-column gap-md">
          {[...historyData].reverse().map((video) => (
            <HorizontalCard key={video._id} video={video} />
          ))}
        </div>
      )}
    </div>
  );
};

export { History };
