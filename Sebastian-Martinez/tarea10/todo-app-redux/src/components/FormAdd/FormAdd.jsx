import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import { Button, Typography } from "@mui/material";
import "./FormAdd.css";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { addTask } from "../../features/tasks/taskSlice";
import { v4 as uuid } from "uuid";



const FormAdd = () => {

  const [task, setTask] = useState({
    title: "",
    description: "",
  });

  const [ emptyInput, setEmptyInput ] = useState(false)

  const dispatch = useDispatch()

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask({
      ...task,
      [name]: value,
    });
    setEmptyInput(false)
  };

  const handleSubmit = (e) => {
    e.preventDefault()
    if(task.title.length > 0 && task.description.length > 0) {
      dispatch(addTask({
        ...task,
        id: uuid()
      }))
      setTask({
        title: "",
        description: "",
      });
    }  else {
      setEmptyInput(true)
    }
  };

  return (
    <section className="input-container">
      <Box
        component="form"
        autoComplete="off"
        sx={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          alignItems: "center",
          height: "20vh",
          justifyContent: "space-between",
        }}
        onSubmit={handleSubmit}
      >
        <TextField
          id="outlined-basic"
          label="Title"
          variant="outlined"
          sx={{
            width: "50%",
          }}
          onChange={handleChange}
          name="title"
          value={task.title}
        />
        <TextField
          id="outlined-basic"
          label="Content"
          variant="outlined"
          sx={{
            width: "50%",
          }}
          onChange={handleChange}
          name="description"
          value={task.description}
        />
        {emptyInput ??
          <Typography variant="p"> Please, type the name and description of your task </Typography> 
        }
        <Button type="submit" variant="contained">{"Send"}</Button>
      </Box>
    </section>
  );
};

export default FormAdd;
