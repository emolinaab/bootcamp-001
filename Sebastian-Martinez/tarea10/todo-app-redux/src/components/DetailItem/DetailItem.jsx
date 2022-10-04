import { Card, CardActions, CardContent, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";



const DetailItem = (title, description, isDone, date) => {
  return (
    <Box>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography variant="h4">title</Typography>
          <Typography variant="p">date</Typography>
          <Typography variant="h3">descrption</Typography>
        </CardContent>
        <CardActions>
          
        </CardActions>
      </Card>
    </Box>
  );
};

export default DetailItem;
