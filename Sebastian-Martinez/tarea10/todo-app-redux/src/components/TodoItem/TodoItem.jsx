import {
  CardActions,
  CardContent,
  IconButton,
  Typography,
} from "@mui/material";
import Card from "@mui/material/Card";
import DeleteIcon from "@mui/icons-material/Delete";
import { Box } from "@mui/system";
import DoneIcon from "@mui/icons-material/Done";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { deleteTask, setTaskDone } from "../../features/tasks/taskSlice";



const TodoItem = ({ id, title, description }) => {
  const [doneTask, setDoneTask] = useState(true);

  const dispatch = useDispatch();

  const handleDeleteTask = (id) => {
    dispatch(deleteTask(id));
  };

  const handleDoneTask = () => {
    doneTask ? setDoneTask(false) : setDoneTask(true);
    dispatch(setTaskDone(id))
  };

  return (
    <Card
      sx={{ minWidth: 275, maxHeight: "200px", marginBottom: "20px" }}
      key={id}
      variant="outlined"
    >
      <CardContent>
        <Box
          component={"section"}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {doneTask ? (
            <Typography variant="h4" color="text.secondary" gutterBottom>
              {title}
            </Typography>
          ) : (
            <Typography
              sx={{ textDecorationLine: "line-through" }}
              variant="h4"
              color="text.secondary"
              gutterBottom
            >
              {title}
            </Typography>
          )}
          <IconButton aria-label="delete" size="large" onClick={() => handleDoneTask(id)}>
            <DoneIcon />
          </IconButton>
        </Box>

        <Typography variant="h5">{description}</Typography>
      </CardContent>
      <CardActions>
        <IconButton aria-label="delete" size="large" onClick={() => handleDeleteTask(id)}>
          <DeleteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default TodoItem;
