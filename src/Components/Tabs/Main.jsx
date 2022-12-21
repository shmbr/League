import { Box } from "@mui/material";
import React from "react";
import { CardMedia } from "@mui/material";
import Banner1 from "../../Images/home_banner_1.jpg";
import RecentEvents from "../Main/RecentEvents";
import Partners from "../Main/Partners";
import Cooperation from "../Main/Cooperation";

const Main = () => {
  return (
    <>
      <Box sx={{ p: 1 }}>
        <CardMedia
          component="img"
          image={Banner1}
          sx={{
            display: "flex",
          }}
        />
      </Box>

      <Box sx={{ p: 1 }}>
        <RecentEvents />
      </Box>

      <Box sx={{ p: 1 }}>
        <Partners />
      </Box>

      <Box sx={{ p: 1 }}>
        <Cooperation />
      </Box>
    </>

  );
};

export default Main;
