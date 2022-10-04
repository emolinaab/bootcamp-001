import { Box } from "@mui/material";
import { useSelector } from "react-redux";
import TodoItem from "../TodoItem/TodoItem";



const TodoList = () => {
  const stateTask = useSelector((state) => state.tasks);
  console.log('state', stateTask)

  return (
    <Box component={"section"} sx={{ display: "flex", justifyContent: "space-around", width: "100%", flexWrap: "wrap", height: "100px"}} >
        {stateTask.map(task => (
            <TodoItem key={task.id} id={task.id} title={task.title} description={task.description} isCompleted={task.isDoneTask} />
        ))}
    </Box>    
)}

export default TodoList;
