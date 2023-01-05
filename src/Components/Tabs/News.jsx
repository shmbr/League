import { Divider, Box, Typography } from "@mui/material";
import React from "react";
import Banner from "../Main/Banner";
import BannerImg from "../../Images/News/News_Banner.jpg";


const News = () => {
  return (
    <>
      <Banner img={BannerImg} />
      {/* <Box sx={{p:4}}>
        <Divider />
        <Typography>Локальні заходи</Typography>
        <Divider />
        <Typography>Онлайн заходи</Typography>
        <Divider />
        <Typography>Всеукраїнські заходи</Typography>
        <Divider />
        <Typography>Новини</Typography>
        <Divider/>
      </Box> */}
    </>
  );
};

export default News;
