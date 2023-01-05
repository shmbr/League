import React from "react";
import RecentEvents from "../Main/Events/RecentEvents";
import Partners from "../Main/Partners/Partners";
import Cooperation from "../Main/Cooperation/Cooperation";
import Banner from "../Main/Banner";
import BannerImg from "../../Images/Main/homme_banner_2.png";


const Main = () => {
  return (
    <>
      <Banner img={BannerImg}/>
      <RecentEvents />
      <Partners />
      <Cooperation />
    </>
  );
};

export default Main;
