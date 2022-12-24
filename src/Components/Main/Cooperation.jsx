import { Typography, Paper, Box, Button } from "@mui/material";
import React from "react";
//import { CardMedia } from "@mui/material";
import Aeque from "../../Images/Main/Cooperation/aequo.jpg";
import Avellum from "../../Images/Main/Cooperation/avellum.jpg";
import Cms from "../../Images/Main/Cooperation/cms.jpg";
import Eba from "../../Images/Main/Cooperation/eba.jpg";
import Eterna from "../../Images/Main/Cooperation/eterna.jpg";
import Ey from "../../Images/Main/Cooperation/ey.jpg";
import Kpmg from "../../Images/Main/Cooperation/kpmg.jpg";
import Lcf from "../../Images/Main/Cooperation/lcf.jpg";

import Banner1 from "../../Images/Main/home_banner_2.png";

import { CardMedia, Grid } from "@mui/material";

const list = ["Aeque", "Avellum", "Cms", "Eba", "Eterna", "Ey", "Kpmg", "Lcf"];
const img = [Aeque, Avellum, Cms, Eba, Eterna, Ey, Kpmg, Lcf];

const Cooperation = () => {
  return (
    <>
      <Paper
        sx={{
          backgroundImage: `url(${Banner1})`,
        }}
      >
        <Box sx={{ p: 3 }} textAlign={"center"}>
          <Typography
            variant={"h5"}
            textAlign={"center"}
            sx={{ p: 5, color: "white" }}
          >
            Ми співпрацюємо більш ніж з 30 великими компаніями
          </Typography>

          <Box
            sx={{
              display: "flex",
              overflowX: "auto",
              background: "white",
            }}
          >
            {list.map((item) => (
              <Box key={list.indexOf(item)}>
                <Grid
                  container
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    textAlign: "center",
                  }}
                >
                  <Grid item sx={{ pr: 4, pl: 4, pt: 1, pb: 1 }}>
                    <CardMedia
                      component="img"
                      image={img[list.indexOf(item)]}
                      sx={{
                        height: "auto",
                        width: "auto",
                        display: "flex",
                        p: 1,
                      }}
                    />
                  </Grid>

                  <Grid item>
                    <Typography  sx={{ p: 1 }}>
                      {item}
                    </Typography>
                  </Grid>
                </Grid>
              </Box>
            ))}
          </Box>

          <Button sx={{ color: "white", mt: 3 }}>Детальніше</Button>
        </Box>
      </Paper>
    </>
  );
};

export default Cooperation;
