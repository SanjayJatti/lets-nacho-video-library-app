import "./App.css";
import { Header } from "./Components/Header/Header";
import { Sidebar } from "./Components/Sidebar/Sidebar";
import { PageRoutes } from "./Routes/PageRoutes";
import { Toaster } from "react-hot-toast";
const App = () => {
  return (
    <>
      <div className="page-container">
        <Header />
        <div className="core-page">
          <Sidebar />
          <PageRoutes />
          <Toaster
            toastOptions={{
              style: {
                fontSize: "2.5rem",
                backgroundColor: "#343a40",
                color: "white"
              },
            }}
          />
        </div>
      </div>
    </>
  );
};

export default App;
