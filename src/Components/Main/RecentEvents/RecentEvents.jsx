import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import Event from "./Event";

const RecentEvents = () => {
  const loremIpsum =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque commodo massa lectus, ut suscipit justo iaculis non. Curabitur quis magna sed ligula aliquam dignissim ac sed libero. ";

  return (
    <>
      <Box sx={{ background: "#E7E7E7" }}>
        <Typography textAlign={"center"} variant={"h5"} sx={{ p: 3 }}>
          Найближчі події
          Найближчі події
        </Typography>
        <Box sx={{ display: "flex", flexWrap: "wrap" }}>
          <Event
            eventTitle={"Event 1"}
            eventOverview={loremIpsum}
            eventData={"22-12-3"}
          />
          <Event
            eventTitle={"Event 2"}
            eventOverview={loremIpsum}
            eventData={"22-12-3"}
          />
          <Event
            eventTitle={"Event 3"}
            eventOverview={loremIpsum}
            eventData={"22-12-3"}
          />
        </Box>
      </Box>
    </>
  );
};

export default RecentEvents;

{
  /* <Event
eventTitle={"Event 1"}
eventOverview={loremIpsum}
eventData={"22-12-3"}
/>
<Event
eventTitle={"Event 2"}
eventOverview={loremIpsum}
eventData={"22-12-3"}
/>
<Event
eventTitle={"Event 3"}
eventOverview={loremIpsum}
eventData={"22-12-3"}
/> */
}
