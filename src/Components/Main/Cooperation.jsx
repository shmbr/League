import { Typography, Paper,Box } from "@mui/material";
import React from "react";
//import { CardMedia } from "@mui/material";

const list = ["123", "23", "34", "fmrel45", "fm3ekrp", "fmr5el", "fm9ekrp", "fm43rel", "fmek6rp", "fmek11rp", "fmrel", "fmekr1p", "fm232ekrp", "fmrel2312", "fm2ekrp"]

const Cooperation = () => {

  return (
    <>
      <Paper sx={{ background: "purple" }}>
        <Typography textAlign={"center"}>Cooperation</Typography>
      </Paper>


      <div >
        <Box sx={{
          display: "flex",
          overflowX: "auto",
        }}>
          {
            list.map((item) => (
              <Paper key={list.indexOf(item)} sx={{ p:4}}>{item}</Paper>
            ))
          }
        </Box>

      </div>
    </>
  );
};

export default Cooperation;
