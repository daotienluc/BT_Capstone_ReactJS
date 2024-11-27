import React from "react";
import HeaderTemplate from "./components/HeaderTemplate";
import { Outlet } from "react-router-dom";
import FooterTemplate from "./components/FooterTemplate";
import Banner from "./components/Banner";
import Services from "./components/Services/Services";
import PopularServices from "./components/PopularServices/PopularServices";
import FiverrPro from "./components/FiverrPro/FiverrPro";
import FiverrVideo from "./components/FiverrVideo/FiverrVideo";
import Vontélle from "./components/Vontélle’s/Vontélle’s";
import Freelancers from "./components/Freelancers/Freelancers";

const HomeTemplate = () => {
  return (
    <>
      <HeaderTemplate />
      <Banner />
      <Services />
      <PopularServices />
      <FiverrPro />
      <FiverrVideo />
      <Vontélle />
      <Freelancers />
      <FooterTemplate />
      <Outlet />
    </>
  );
};

export default HomeTemplate;
