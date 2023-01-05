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

const TabsControl = () => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
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
          </TabList>
        </Box>
        <Box >
          <TabPanel value="1" sx={{ p:0 }}>
            <Main />
          </TabPanel>
          <TabPanel value="2">
            <About />
          </TabPanel>
          <TabPanel value="3">
            <News />
          </TabPanel>
          <TabPanel value="4">
            <Calendar />
          </TabPanel>
          <TabPanel value="5">
            <Projects />
          </TabPanel>
          <TabPanel value="6">
            <Internships />
          </TabPanel>
          <TabPanel value="7">
            <Partners />
          </TabPanel>
          <TabPanel value="8">
            <Contacts />
          </TabPanel>
        </Box>
      </TabContext>
    </Box>
  );
};

export default TabsControl;
