import * as React from "react";
import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";

import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import GavelIcon from "@mui/icons-material/Gavel";
import ListItem from "../../MenuList/ListItem";
import { Grid } from "@mui/material";

const FooterSummaryList = () => {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <List
      sx={{ width: "100%", bgcolor: "background.paper" }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Зміст
        </ListSubheader>
      }
    >
      <Grid container>
        <Grid item xs={4}>
          <ListItem
            props={{
              open: open,
              handleClick: handleClick,
              text: "Календар",
              mainIcon: <CalendarMonthIcon />,
            }}
          />
        </Grid>
        <Grid item xs={4}>
          <ListItem
            props={{
              open: open,
              handleClick: handleClick,
              text: "Новини",
              mainIcon: <ReceiptLongIcon />,
            }}
          />
        </Grid>
        <Grid item xs={4}>
          <ListItem
            props={{
              open: open,
              handleClick: handleClick,
              text: "Про нас",
              mainIcon: <GavelIcon />,
            }}
          />
        </Grid>
      </Grid>
    </List>
  );
};

export default FooterSummaryList;
