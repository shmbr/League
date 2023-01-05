import { CardMedia, Button, Grid,  } from "@mui/material";
import React from "react";
import Logo from "../../Images/Global/logo-square.png";

const Header = () => {
  return (
    <>
      <Grid container sx={{}}>
        <Grid
          item
          xs={12}
          sm={6}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: { xs: "center", sm: "left" },
            p: { xs: 2, sm: 5 },
          }}
        >
          <CardMedia
            component="img"
            image={Logo}
            sx={{
              height: 120,
              width: 120,
              display: "flex",
              p: 1,
            }}
          />
        </Grid>

        {/* <Grid
          item
          sm={4}
          xs={12}
          sx={{
            layout: "scale",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box sx={{ display: { md: "block", xs: "none" } }}>
            <CardMedia
              display={{ xs: "block", md: "none" }}
              component="img"
              image={Flag}
              
              sx={{
                height: 100,
                width: 300,
                display: "flex",
              }}
            />
          </Box>
        </Grid> */}

        <Grid
          item
          xs={12}
          sm={6}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: { xs: "center", sm: "right" },
            p: { xs: 2, sm: 5 },
          }}
        >
          <Button variant="contained">Приєднатися</Button>
        </Grid>
      </Grid>
    </>
  );
};

export default Header;
