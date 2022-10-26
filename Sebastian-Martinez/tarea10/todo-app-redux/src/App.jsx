import "./App.css";
import Home from "./containers/Home/Home";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";

import Routes from './routes/index'


function App() {
  return (
    <Routes />
  );
}

export default App;
