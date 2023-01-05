import React from "react";
import { CardMedia } from "@mui/material";
import Banner from "../../Images/Main/homme_banner_2.png";

const HomeBanner = () => {
  return (
    <>
      <CardMedia
        component="img"
        image={Banner}
        sx={{
          display: "flex",
        }}
      />
    </>
  );
};

export default HomeBanner;
