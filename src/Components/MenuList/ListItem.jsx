import React from "react";


import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';

import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';


const ListItem = ({props}) => {
  return (
    <>
      <ListItemButton onClick={props.handleClick}>
        <ListItemIcon>
            {props.mainIcon}
        </ListItemIcon>
        <ListItemText primary={props.text} />
        {/* {props.open ? <ExpandLess /> : <ExpandMore />} */}
      </ListItemButton>

      <Collapse in={props.open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Starred" />
          </ListItemButton>
        </List>
      </Collapse>
    </>
  );
};

export default ListItem;
