import { Button, Grid, Snackbar, TextField } from "@mui/material";
import { useState } from "react";
import useForm from "../utils/useForm";
import validateSubmit from "../utils/validateSubmit";

export const Form = ({ vSubmit = validateSubmit}) => {
  const { email, password, formState, onInputChange, resetSignIn } = useForm();
  const [{ open, msg }, setOpen] = useState({ open: false, msg: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    let errMsg = vSubmit(formState);
    if (errMsg === "Succesfully log in!") resetSignIn();
    setOpen({ open: true, msg: errMsg });
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Snackbar
        open={open}
        autoHideDuration={7000}
        onClose={handleClose}
        message={msg}
        ContentProps={{
          sx: {
            background: "#262254",
          },
        }}
      />
      <form data-testid="form">
        <Grid container>
          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              inputProps={{ 'aria-label': 'email' }}
              label="Email"
              type="email"
              placeholder="email@globant.com"
              value={email}
              onChange={onInputChange}
              required
              fullWidth
            />
          </Grid>

          <Grid item xs={12} sx={{ mt: 2 }}>
            <TextField
              inputProps={{ 'aria-label': 'password' }}
              label="Password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={onInputChange}
              required
              fullWidth
            />
          </Grid>

          <Grid
            container
            justifyContent="center"
            spacing={2}
            sx={{ mb: 2, mt: 1 }}
          >
            <Grid item xs={12} sm={12}>
              <Button onClick={handleSubmit} variant="contained" fullWidth>
                Login
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </>
  );
};
