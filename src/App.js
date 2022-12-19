import { BrowserRouter } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import React from "react";
import Box from "@mui/material/Box";

import { Paper } from "@mui/material";
import TabsControl from "./Components/TabsControl";

function App() {

  return (
    <Box sx={{ pl: { xs: 0, sm: 5, md: 15 }, pr: { xs: 0, sm: 5, md: 15 } }}>
      <meta name="google-site-verification" content="23jBo2Y6ap4Jev9Fo7Cdc1NNSrcEKyW5I1lxBgIxG0k" />
      <BrowserRouter width={800}>
        <Paper elevation={3}>
          <Header />
          <TabsControl/>
          <Footer />
          <Footer />
        </Paper>
      </BrowserRouter>
    </Box>
  );
}
export default App;
