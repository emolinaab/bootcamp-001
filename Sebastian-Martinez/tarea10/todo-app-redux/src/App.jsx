import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useSelector } from "react-redux";
import "./App.css";
import FormAdd from "./components/FormAdd/FormAdd";
import TodoList from "./components/TodoList/TodoList";


function App() {
  const taskState = useSelector((state) => state.tasks);

  return (
    <div className="App">
      <Box component={"section"} sx={{ display: "flex", justifyContent: "space-around", alignItems: "center", width: "100%" }}>
        <Typography marginBottom={"20px"} variant="h1">Todo App</Typography>
      </Box>
      <Typography  marginBottom={"20px"} variant="h5">{`Total tasks: ${taskState.length} `}</Typography> 
      <FormAdd />
      <TodoList />
    </div>
  );
}

export default App;
