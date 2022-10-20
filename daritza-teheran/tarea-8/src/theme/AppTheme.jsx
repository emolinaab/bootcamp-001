import { ThemeProvider } from "@emotion/react";
import { CssBaseline } from "@mui/material";
import React from "react";
import { plumTheme } from "./";

export const AppTheme = ({ children }) => {
  return (
    <ThemeProvider theme={plumTheme}>
      <CssBaseline/>
      {children}
    </ThemeProvider>
  );
};
