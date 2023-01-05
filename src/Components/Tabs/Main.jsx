import React from "react";
import RecentEvents from "../Main/Events/RecentEvents";
import Partners from "../Main/Partners/Partners";
import Cooperation from "../Main/Cooperation/Cooperation";
import HomeBanner from "../Main/HomeBanner";

const Main = () => {
  return (
    <>
      <HomeBanner />
      <RecentEvents />
      <Partners />
      <Cooperation />
    </>
  );
};

export default Main;
