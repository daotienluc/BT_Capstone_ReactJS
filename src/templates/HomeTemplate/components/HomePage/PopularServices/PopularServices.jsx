import React from "react";
import CarouselCustom from "../../../../../components/CarouselCustom/CarouselCustom";
import CarouselItems from "../../../../../components/CarouselCustom/CarouselItems";

import websiteDevelopmentImg from "./../../../../../assets/img/website-development.jpg";
import logoDesignImg from "./../../../../../assets/img/logo-design.jpg";
import seoImg from "./../../../../../assets/img/seo.jpg";

const PopularServices = () => {
  return (
    <div className="container">
      <h2 className="mb-5 mt-10 font-normal text-5xl text-[#404145]">
        Popular services
      </h2>
      <CarouselCustom
        className="grid grid-cols-6 gap-5 !h-[260px] overflow-hidden"
        content={
          <>
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
              backgroundColor="bg-[#FF8757]"
              content="Logo Design"
              image={logoDesignImg}
            />
            <CarouselItems
              backgroundColor="bg-[#FF8757]"
              content="Logo Design"
              image={logoDesignImg}
            />
            <CarouselItems
              backgroundColor="bg-[#FF8757]"
              content="Logo Design"
              image={logoDesignImg}
            />
          </>
        }
      />
    </div>
  );
};

export default PopularServices;
