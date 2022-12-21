import { Typography, Paper, Grid } from "@mui/material";
import React from "react";
import { CardMedia } from "@mui/material";

import ArioCompany from "../../Images/Partners/ario.png";
import ArzingerCompany from "../../Images/Partners/arzinger.png";
import SchoolCompany from "../../Images/Partners/high_school.png";
import PRCompany from "../../Images/Partners/law_gazeta.jpg";
import GazetaCompany from "../../Images/Partners/law_pr.jpg";

const Partners = () => {
  return (
    <>
      <Paper sx={{ background: "yellow" }}>
        <Typography textAlign={"center"}>Partners</Typography>
      </Paper>

      <Grid container>
        <Grid item xs={12} md={4}>
          <CardMedia
            component="img"
            image={ArioCompany}
            sx={{
              // height: 30,
              // width: 40,
              display: "flex",
            }}
          />
        </Grid>
        
      </Grid>

      <CardMedia
        component="img"
        image={ArioCompany}
        sx={{
          // height: 30,
          // width: 40,
          display: "flex",
        }}
      />

      <CardMedia
        component="img"
        image={ArzingerCompany}
        sx={{
          display: "flex",
        }}
      />
      <CardMedia
        component="img"
        image={SchoolCompany}
        sx={{
          display: "flex",
        }}
      />

      <CardMedia
        component="img"
        image={GazetaCompany}
        sx={{
          display: "flex",
        }}
      />
      <CardMedia
        component="img"
        image={PRCompany}
        sx={{
          display: "flex",
        }}
      />
    </>
  );
};

export default Partners;
