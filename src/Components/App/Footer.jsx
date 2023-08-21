import { Card, Typography } from "@mui/material";
import React from "react";
//import FooterSummaryList from "./Footer/FooterSummaryList";

const Footer = () => {
  return (
    <>
      <Card sx={{ 
        background: "#e7e7e7",
        borderRadius: 0, p: 3 }}>
        {/* <FooterSummaryList /> */}
        footerrrr
      </Card>

      <Card
        sx={{ background: "#2e3336", borderRadius: 0, textAlign: "center" }}
      >
        <Typography sx={{ p: 3 }} color={"white"}>
          #ELUSIVETWELVE | TO REACH A GOAL - BREAKE THE RULES | BOARD OF
          2021-2022{" "}
        </Typography>
      </Card>
    </>
  );
};

export default Footer;
