import React from "react";
import CarouselCustom from "../../../../../components/CarouselCustom/CarouselCustom";
import CarouselItems from "../../../../../components/CarouselCustom/CarouselItems";

import websiteDevelopmentImg from "./../../../../../assets/img/website-development.jpg";
import logoDesignImg from "./../../../../../assets/img/logo-design.jpg";
import seoImg from "./../../../../../assets/img/seo.jpg";
import ArchitectureImg from "./../../../../../assets/img/Architecture.jpg";
import SocialImg from "./../../../../../assets/img/Social.jpg";
import VoiceImg from "./../../../../../assets/img/Voice.jpg";

const PopularServices = () => {
  return (
    <div className="container">
      <h2 className="mb-5 mt-10 font-normal text-5xl text-[#404145]">
        Popular services
      </h2>
      <CarouselCustom
        className=""
        children={
          <div className="!grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-5 !h-[260px] overflow-hidden">
            <CarouselItems
              backgroundColor="bg-[#00732E]"
              content="Website Development"
              image={websiteDevelopmentImg}
            />
            <CarouselItems
              backgroundColor="bg-[#FF8757]"
              content="Logo Design"
              image={logoDesignImg}
            />
            <CarouselItems
              backgroundColor="bg-[#1F512F]"
              content="SEO"
              image={seoImg}
            />
            <CarouselItems
              backgroundColor="bg-[#4D1727]"
              content="Architecture & Interior Design"
              image={ArchitectureImg}
            />
            <CarouselItems
              backgroundColor="bg-[#687200]"
              content="Social Media Marketing"
              image={SocialImg}
            />
            <CarouselItems
              backgroundColor="bg-[#421300]"
              content="Voice Over"
              image={VoiceImg}
            />
          </div>
        }
      />
    </div>
  );
};

export default PopularServices;
