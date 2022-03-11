import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { store } from "./redux/store/store";
import AuthProvider from "./auth/AuthProvider";
import axios from "axios";

axios.defaults.headers.common["Authorization"] = localStorage.getItem("jwtToken");

axios.defaults.baseURL = process.env.REACT_APP_API || 'http://localhost:3001'


ReactDOM.render(
  <Provider store={store}>
    <AuthProvider>
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </AuthProvider>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
