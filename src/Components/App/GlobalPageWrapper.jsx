import { Paper } from "@mui/material";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import Box from "@mui/material/Box";

const GlobalPageWrapper = (props) => {
  return (
    <Box
      sx={{
        display: { md: "flex" },
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <BrowserRouter>
        <Paper elevation={5} sx={{ maxWidth: 900 }}>
          {props.children}
        </Paper>
      </BrowserRouter>
    </Box>
  );
};

export default GlobalPageWrapper;
