import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

// components
import App from "./App";

// state
import { setupStore } from "./state";

const store = setupStore();

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root"),
);
