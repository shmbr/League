//import { Button, Typography } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

import React from "react";

import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";

function App() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <BrowserRouter>
      <Header />

      <Box sx={{ width: "100%", typography: "body1" }}>
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
              sx={{}}
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

          <TabPanel value="1">Гловна</TabPanel>
          <TabPanel value="2">Про нас </TabPanel>
          <TabPanel value="3">Новини</TabPanel>
          <TabPanel value="4">Календар</TabPanel>
          <TabPanel value="5">Наші проекти </TabPanel>
          <TabPanel value="6">Стажування</TabPanel>
          <TabPanel value="7">Партнери</TabPanel>
          <TabPanel value="8">Контакти </TabPanel>
        </TabContext>
      </Box>

      <Footer />
    </BrowserRouter>
  );
}
export default App;