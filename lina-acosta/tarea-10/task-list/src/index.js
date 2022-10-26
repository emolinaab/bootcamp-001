import React from "react";
import { render } from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "@redux-devtools/extension";
import App from "./components/App";
//import {store} from './store/store'
import rootReducer from "./reducers";

const store = createStore(rootReducer, composeWithDevTools());

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
