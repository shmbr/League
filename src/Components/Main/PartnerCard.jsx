import { Grid, Typography, Box } from "@mui/material";
import React from "react";
import { CardMedia } from "@mui/material";

const PartnerCard = ({ companyImage, companyTitle }) => {
  return (
    <>
      <Grid
        item
        xs={12}
        md={4}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          p: 1,
        }}
      >
        <Box sx={{p:1}}>
          <Grid
            container
            sx={{
              display: "flex",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <Grid item xs={12}>
              <CardMedia component="img" image={companyImage} />
            </Grid>
            <Grid item xs={12}>
              <Typography>{companyTitle}</Typography>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </>
  );
};

export default PartnerCard;
