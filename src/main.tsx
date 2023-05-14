import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App.js";
// import './index.css';
import store from "./app/store/store.js";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  // <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  // </React.StrictMode>,
);
