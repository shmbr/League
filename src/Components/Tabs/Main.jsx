import React from "react";
import RecentEvents from "../Main/RecentEvents/RecentEvents";
import Partners from "../Main/Partners/Partners";
import Cooperation from "../Main/Cooperation/Cooperation";
import CardWithLabel from "../UI/CardWithLabel";

const Main = () => {
  return (
    <>
      <CardWithLabel
        props={{
          text: "Одна легенда - безліч історій",
          color: "#3a405c",
        }}
      />

      <RecentEvents />
      <Partners />
      <Cooperation />
    </>
  );
};

export default Main;
