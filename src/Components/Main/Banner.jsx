import React from "react";
import { CardMedia } from "@mui/material";
import BannerImg from "../../Images/Main/homme_banner_2.png";

const Banner = (props) => {
  return (
    <>
      <CardMedia
        component="img"
        image={props.img}
        sx={{
          display: "flex",
        }}
      />
    </>
  );
};

export default Banner;
