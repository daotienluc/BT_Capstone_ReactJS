import React from "react";
import HeaderTemplate from "./components/HeaderTemplate";
import { Outlet } from "react-router-dom";
import FooterTemplate from "./components/FooterTemplate";
import Banner from "./components/Banner";
import Services from "./components/HomePage/Services/Services";
import PopularServices from "./components/HomePage/PopularServices/PopularServices";
import FiverrPro from "./components/HomePage/FiverrPro/FiverrPro";
import FiverrVideo from "./components/HomePage/FiverrVideo/FiverrVideo";
import Vontélle from "./components/HomePage/Vontélle’s/Vontélle’s";
import Freelancers from "./components/HomePage/Freelancers/Freelancers";

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
