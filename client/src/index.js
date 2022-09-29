import React from "react";
import ReactDOM from "react-dom/client";
import Provider from "react-redux";
import { store } from "../redux/store";
import "./index.css";
import App from "./App";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";

axios.defaults.baseURL = "/api/";
axios.interceptors.request.use((config) => {
  const user = JSON.parse(localStorage.getItem("user"));
  if (user?.token) {
    config.headers["Authorization"] = `Bearer ${user.token}`;
  }
  return config;
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
