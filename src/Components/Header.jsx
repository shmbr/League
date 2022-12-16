import { CardMedia, Button, Grid } from "@mui/material";
import React from "react";

import Logo from "../Images/logo-square.png";

const Header = () => {
  return (
    <>
      <Grid container sx={{ 
        //background: "red" 
        }}>
        <Grid
          item
          xs={12}
          sm={6}
          sx={{
            //background: "yellow" ,
            display: "flex",
            alignItems: "center",
            justifyContent: { xs: "center", sm: "left" },
            p:0
          }}
        >
          <CardMedia
            component="img"
            image={Logo}
            height={"50px"}
            sx={{
              height: 200,
              width: 200,
              display: "flex",
            }}
          />
        </Grid>

        <Grid
          item
          xs={12}
          sm={6}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: { xs: "center", sm: "right" },
            p: {xs: 2, sm: 5},
          }}
        >
          <Button variant="contained">Приєднатися</Button>
        </Grid>
      </Grid>
    </>
  );
};

export default Header;
