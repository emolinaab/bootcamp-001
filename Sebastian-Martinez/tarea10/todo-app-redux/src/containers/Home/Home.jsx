import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useSelector } from "react-redux";
import FormAdd from "../../components/FormAdd/FormAdd";
import TodoList from "../../components/TodoList/TodoList";

const Home = () => {
  const taskState = useSelector((state) => state.tasks);

  return (
    <div className="App">
      <Box
        component={"section"}
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          width: "100%"
        }}
      >
        <Typography sx={{ marginBottom: "20px", textAlign: "center" }} variant="h3">
          What's up today?
        </Typography>
      </Box>
      <Typography
        sx={{ marginBottom: "20px" }}
        variant="h5"
      >{`Total tasks: ${taskState.length} `}</Typography>
      <FormAdd />
      <TodoList />
    </div>
  );
};

export default Home;
