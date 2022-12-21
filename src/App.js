import { BrowserRouter } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import React from "react";
import Box from "@mui/material/Box";

import { Paper } from "@mui/material";
import TabsControl from "./Components/TabsControl";

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
