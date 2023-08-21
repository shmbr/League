import { Box } from "@mui/material";
import React from "react";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Main from "../Tabs/Main";
import About from "../Tabs/About";
import News from "../Tabs/News";
import Calendar from "../Tabs/Calendar";
import Projects from "../Tabs/Projects";
import Internships from "../Tabs/Internships";
import Partners from "../Tabs/Partners";
import Contacts from "../Tabs/Contacts";

import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";

import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import GavelIcon from "@mui/icons-material/Gavel";
import ListItem from "../MenuList/ListItem";
import { Grid } from "@mui/material";

const TabsControl = () => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Box sx={{ width: 1, typography: "body1" }}>
      <TabContext value={value}>
        <Box
          sx={{
            borderBottom: 1,
            borderColor: "divider",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <TabList
            variant="scrollable"
            scrollButtons={false}
            onChange={handleChange}
            aria-label="lab API tabs example"
            //sx={{ width: 0.5 }}
          >
            <Tab label="Головна" value="1" />
            <Tab label="Про нас" value="2" />
            <Tab label="Новини" value="3" />
            <Tab label="Календар" value="4" />
            <Tab label="Наші проекти" value="5" />
            <Tab label="Стажування" value="6" />
            <Tab label="Партнери" value="7" />
            <Tab label="Контакти" value="8" />

            <Tab label= "test">
            </Tab>
          </TabList>
        </Box>
        <Box>
          <TabPanel value="1" sx={{ p: 0 }}>
            <Main />
          </TabPanel>
          <TabPanel value="2" sx={{ p: 0 }}>
            <About />
          </TabPanel>
          <TabPanel value="3" sx={{ p: 0 }}>
            <News />
          </TabPanel>
          <TabPanel value="4" sx={{ p: 0 }}>
            <Calendar />
          </TabPanel>
          <TabPanel value="5" sx={{ p: 0 }}>
            <Projects />
          </TabPanel>
          <TabPanel value="6" sx={{ p: 0 }}>
            <Internships />
          </TabPanel>
          <TabPanel value="7" sx={{ p: 0 }}>
            <Partners />
          </TabPanel>
          <TabPanel value="8" sx={{ p: 0 }}>
            <Contacts />
          </TabPanel>
        </Box>
      </TabContext>
    </Box>
  );
};

export default TabsControl;
