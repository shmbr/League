import React from "react";
import { Box, Typography } from "@mui/material";

const CardWithLabel = ({props}) => {
  return (
    <>
      <Box
        sx={{
          background: props.color,
          minHeight: 200,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          //p: { xs: 2, sm: 5 },
        }}
      >
        <Typography
          color="white"
          textAlign={"center"}
          variant={"h5"}
          sx={{ p: 8 }}
        >
          {props.text}
        </Typography>
      </Box>
    </>
  );
};

export default CardWithLabel;
