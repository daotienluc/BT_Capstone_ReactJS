import React from "react";
import "./PopularServices.scss";
import { Carousel } from "antd";
import PopularServicesItems from "./PopularServicesItems";

import websiteDevelopmentImg from "./../../../../assets/img/website-development.jpg";
import logoDesignImg from "./../../../../assets/img/logo-design.jpg";
import seoImg from "./../../../../assets/img/seo.jpg";

const PopularServices = () => {
  return (
    <div className="container">
      <h2 className="mb-5 mt-10 font-normal text-5xl text-[#404145]">
        Popular services
      </h2>
      <Carousel className="carousel_custom" arrows>
        <div>
          <h3 className="grid grid-cols-6 gap-5 !h-[260px] overflow-hidden">
            <PopularServicesItems
              backgroundColor="bg-[#00732E]"
              content="Website Development"
              image={websiteDevelopmentImg}
            />
            <PopularServicesItems
              backgroundColor="bg-[#FF8757]"
              content="Logo Design"
              image={logoDesignImg}
            />
            <PopularServicesItems
              backgroundColor="bg-[#1F512F]"
              content="SEO"
              image={seoImg}
            />
            <PopularServicesItems
              backgroundColor="bg-[#FF8757]"
              content="Logo Design"
              image={logoDesignImg}
            />
            <PopularServicesItems
              backgroundColor="bg-[#FF8757]"
              content="Logo Design"
              image={logoDesignImg}
            />
            <PopularServicesItems
              backgroundColor="bg-[#FF8757]"
              content="Logo Design"
              image={logoDesignImg}
            />
          </h3>
        </div>
        <div>
          <h3 className="grid grid-cols-6 gap-5 !h-[260px] overflow-hidden"></h3>
        </div>
      </Carousel>
    </div>
  );
};

export default PopularServices;
