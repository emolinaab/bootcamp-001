import {
  Card,
  CardActions,
  CardContent,
  IconButton,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import TaskIcon from "@mui/icons-material/Task";
import { setTaskDone } from "../../features/tasks/taskSlice";
import Button from "@mui/material/Button";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import Divider from '@mui/material/Divider';

const DetailItem = () => {
  const taskState = useSelector((state) => state.tasks);
  let { id } = useParams();
  const dispatch = useDispatch();

  const item = taskState.find((element) => element.id === id);

  const { title, description, date } = item;

  const handleDoneTask = (id) => {
    dispatch(setTaskDone(id));
  };


  return (
    <Box
      sx={{
        height: "50vh",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Typography variant="h2"> Task Detail </Typography>
      <Card sx={{ width: "40%" }}>
        <CardContent>
          <Box component={"div"} sx={{display: "flex", width: "100%", justifyContent: "space-between", alignItems: "center"}} >
            <Typography variant="h4">{title}</Typography>
            {
            
                item.isDoneTask ? <CheckCircleIcon color="success" /> : null
            }
          </Box>
          <Typography variant="p">{date}</Typography>
          <Divider sx={{margin: "10px 0 20px 0"}} />
          <Typography variant="h5">{description}</Typography>
        </CardContent>
        <CardActions>
          <IconButton
            aria-label="delete"
            size="large"
            onClick={() => handleDoneTask(id)}
          >
            <TaskIcon />
          </IconButton>
        </CardActions>
      </Card>
      <Link sx={{ textDecoration: "none" }} to={"/"}>
        <Button>Back to list</Button>
      </Link>
    </Box>
  );
};

export default DetailItem;
