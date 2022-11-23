import React from "react";
import { Grid, Typography } from "@mui/material";

export const LoginContainer = ({ children }) => {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: "100vh", backgroundColor: "secondary.main", padding: 4 }}
    >
      <Grid
        item
        className="'box-shadow"
        sx={{
          width: "60vh",
          backgroundColor: "white",
          padding: 3,
          borderRadius: 2,
        }}
      >
        <Typography variant="h5" sx={{ mb: 1 }}>
          Sign in
        </Typography>
        {children}
      </Grid>
    </Grid>
  );
};
