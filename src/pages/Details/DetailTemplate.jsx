import React from "react";
import HeaderTemplate from "../../templates/HomeTemplate/components/HeaderTemplate";
import FooterTemplate from "../../templates/HomeTemplate/components/FooterTemplate";
import AboutDetails from "./components/AboutDetails";
import AuthorDetails from "./components/AuthorDetails";
import MyPortfolioDetails from "./components/MyPortfolioDetails";
import RecommendedDetails from "./components/RecommendedDetails";
import ReviewsDetails from "./components/ReviewsDetails";
import PackageDetails from "./components/PackageDetails";
import IntroduceDetails from "./components/IntroduceDetails";

const DetailTemplate = () => {
  return (
    <>
      <HeaderTemplate />
      <div className="container my-10">
        <div className="flex gap-[58px]">
          {/* Thông tin chi tiết */}
          <div className="w-3/5">
            <IntroduceDetails />

            {/* Giới thiệu về khóa học */}
            <AboutDetails />

            {/* Thông tin tác giả */}
            <AuthorDetails />

            {/* Thông tin về My Portfolio */}
            <MyPortfolioDetails />

            {/* Thông tin về các khóa học được đề xuất */}
            <RecommendedDetails />

            {/* Thông tin về Reviews */}
            <ReviewsDetails />
          </div>

          {/* Các gói */}
          <div className="w-2/5">
            <PackageDetails />
          </div>
        </div>
      </div>
      <FooterTemplate />
    </>
  );
};

export default DetailTemplate;
