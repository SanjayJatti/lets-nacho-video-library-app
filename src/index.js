import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { ActionsProvider } from "./Contexts/ActionsContext";
import { AuthProvider } from "./Contexts/AuthContext";
import { DataProvider } from "./Contexts/DataContext";
import { FilterProvider } from "./Contexts/FilterContext";
import { makeServer } from "./server";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <DataProvider>
          <FilterProvider>
            <ActionsProvider>
              <App />
            </ActionsProvider>
          </FilterProvider>
        </DataProvider>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
