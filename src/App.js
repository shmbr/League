import { BrowserRouter } from "react-router-dom";
import React from "react";
import Box from "@mui/material/Box";
import { Paper } from "@mui/material";
import Header from "./Components/App/Header"
import TabsControl from "./Components/App/TabsControl"
import Footer from "./Components/App/Footer"



function App() {
  return (
    <BrowserRouter width={800}>
      <Box sx={{ pl: { xs: 0, sm: 5, md: 15 }, pr: { xs: 0, sm: 5, md: 15 } }}>
        <Paper elevation={3}>
          <Header />
          <TabsControl />
          <Footer />
        </Paper>
      </Box>
    </BrowserRouter>
  );
}
export default App;
