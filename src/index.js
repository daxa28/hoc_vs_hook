import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { todos } from "./data";
import AppHOC from "./AppHOC";
import AppHook from "./AppHook";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <div className="flex">
      <App list={todos} />
      <AppHOC list={todos} />
      <AppHook list={todos} />
    </div>
  </React.StrictMode>
);
