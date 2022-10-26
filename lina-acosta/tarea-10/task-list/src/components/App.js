import React from "react";
import Filter from "./Filter";
import Add from "../containers/Add";
import VisibleTaskList from "../containers/VisibleTaskList";

const App = () => (
  <div>
    <Add />
    <VisibleTaskList />
    <Filter />
  </div>
);

export default App;
