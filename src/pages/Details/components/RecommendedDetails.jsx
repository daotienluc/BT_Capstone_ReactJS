import React from "react";
import CarouselCustom from "../../../components/CarouselCustom/CarouselCustom";
import detailsImg from "./../../../assets/img/details.jpg";
import CarouselItems from "../../../components/CarouselCustom/CarouselItems";

const RecommendedDetails = () => {
  return (
    <>
      <div className="p-5 bg-gray-100 mt-10">
        <h2 className="font-bold text-xl text-[#404145] my-5">
          Recommended for you
        </h2>
        <CarouselCustom
          className="!h-[200px]"
          content={
            <>
              <CarouselItems image={detailsImg} />
            </>
          }
        />
      </div>
    </>
  );
};

export default RecommendedDetails;
