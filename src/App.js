import React from "react";
import Header from "./Components/App/Header";
import TabsControl from "./Components/App/TabsControl";
import Footer from "./Components/App/Footer";
import GlobalPageWrapper from "./Components/App/GlobalPageWrapper";

function App() {
  return (
    <GlobalPageWrapper>
      <Header />
      <TabsControl />
      <Footer />
    </GlobalPageWrapper>
  );
}
export default App;
