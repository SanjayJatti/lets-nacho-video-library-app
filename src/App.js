import "./App.css";
import { Header } from "./Components/Header/Header";
import { Sidebar } from "./Components/Sidebar/Sidebar";
import { PageRoutes } from "./Routes/PageRoutes";

const App = () => {
  return (
    <>
      <div className="page-container">
        <Header />
        <div className="core-page">
          <Sidebar />
          <PageRoutes />
        </div>
      </div>
    </>
  );
};

export default App;
