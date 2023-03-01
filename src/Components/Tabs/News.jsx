import React from "react";
import CardWithLabel from "../UI/CardWithLabel";
import {Box, Divider, Typography} from "@mui/material"

const News = () => {
  return (
    <>
      <CardWithLabel
        props={{
          text: "Ліга - це фарби, які роблять студентське життя неймовірно яскравим!",
          color: "#3a405c",
        }}
      />

      <Box sx={{p:4}}>
        <Divider />
        <Typography>Локальні заходи</Typography>
        <Divider />
        <Typography>Онлайн заходи</Typography>
        <Divider />
        <Typography>Всеукраїнські заходи</Typography>
        <Divider />
        <Typography>Новини</Typography>
        <Divider/>
      </Box>
    </>
  );
};

export default News;
