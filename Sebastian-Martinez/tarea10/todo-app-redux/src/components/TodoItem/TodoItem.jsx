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
import { useDispatch } from "react-redux";
import { deleteTask, setTaskDone } from "../../features/tasks/taskSlice";
import { Link } from "react-router-dom";
import InfoIcon from "@mui/icons-material/Info";

const TodoItem = ({ id, title, description, isCompleted }) => {
  const dispatch = useDispatch();

  const handleDeleteTask = (id) => {
    dispatch(deleteTask(id));
  };

  const handleDoneTask = () => {
    dispatch(setTaskDone(id));
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
          {isCompleted === false ? (
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
          <IconButton
            aria-label="delete"
            size="large"
            onClick={() => handleDoneTask(id)}
          >
            <DoneIcon />
          </IconButton>
        </Box>

        <Typography variant="h5">{description}</Typography>
      </CardContent>
      <CardActions sx={{width: "80%"}}>
        <IconButton
          aria-label="delete"
          size="large"
          onClick={() => handleDeleteTask(id)}
        >
          <DeleteIcon />
        </IconButton>
        <IconButton aria-label="info-detail" size="large">
          <Link to={`/detail/${id}`}>
            <InfoIcon  sx={{ color: "gray"}}/>
          </Link>
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default TodoItem;
