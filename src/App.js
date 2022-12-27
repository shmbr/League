import { BrowserRouter } from "react-router-dom";
import React from "react";
import Box from "@mui/material/Box";
import { Paper } from "@mui/material";
import Header from "./Components/App/Header";
import TabsControl from "./Components/App/TabsControl";
import Footer from "./Components/App/Footer";

function App() {
  return (
    <Box
      sx={{

        display: {md: 'flex'},
        alignItems: 'center',
        justifyContent: 'center',

      }}
    >
      <BrowserRouter>
        <Box
          sx={{
            maxWidth: 900,
          }}
        >
          <Paper elevation={3}>
            <Header />
            <TabsControl />
            <Footer />
          </Paper>
        </Box>
      </BrowserRouter>
    </Box>
  );
}
export default App;
