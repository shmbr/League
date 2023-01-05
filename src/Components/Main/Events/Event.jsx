import { Paper, Typography, Box, Grid } from "@mui/material";
import React from "react";
import DateRangeIcon from "@mui/icons-material/DateRange";

const Event = ({ eventTitle, eventOverview, eventData }) => {
  return (
    <>
      <Box
        sx={{
          p: 1,
          pb: 4,
          pr: 4,
          pl: 4,
        }}
      >
        <Paper elevation={4}>
          <Box sx={{ p: 4 }}>
            <Grid container>
              <Grid item sm={2} xs={12} textAlign="center">
                <Typography>{eventTitle}</Typography>
                <DateRangeIcon sx={{ fontSize: 40 }} />
                <Typography> {eventData} </Typography>
              </Grid>
              <Grid item sm={10} xs={12}>
                <Box sx={{ display: { sm: "block", xs: "none" } }}>
                  <Typography> {eventOverview}</Typography>
                </Box>
              </Grid>
            </Grid>

          </Box>
        </Paper>
      </Box>
    </>
  );
};

export default Event;
