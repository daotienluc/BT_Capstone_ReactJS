import React, { createContext, useEffect, useState } from "react";
import HeaderTemplate from "../../templates/HomeTemplate/components/HeaderTemplate";
import FooterTemplate from "../../templates/HomeTemplate/components/FooterTemplate";
import AboutDetails from "./components/AboutDetails";
import AuthorDetails from "./components/AuthorDetails";
import MyPortfolioDetails from "./components/MyPortfolioDetails";
import RecommendedDetails from "./components/RecommendedDetails";
import ReviewsDetails from "./components/ReviewsDetails";
import PackageDetails from "./components/PackageDetails";
import IntroduceDetails from "./components/IntroduceDetails";
import { congviecService } from "../../services/congviec.services";
import { useParams } from "react-router-dom";
import { nguoidungServices } from "../../services/nguoidung.services";

export const dataChiTietCongViec = createContext();

const DetailTemplate = () => {
  const [chiTiet, setChiTiet] = useState("");
  const [user, setUser] = useState("");
  const [maChiTietLoaiCongViec, setMaChiTietLoaiCongViec] = useState("");
  const { id, nguoiTao } = useParams();

  useEffect(() => {
    congviecService
      .getCongViecTheoId(id)
      .then((res) => {
        setChiTiet(res.data.content);
        setMaChiTietLoaiCongViec(res.data.content.maChiTietLoaiCongViec);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  useEffect(() => {
    nguoidungServices
      .layDanhSachNguoiDungTheoId(nguoiTao)
      .then((res) => {
        setUser(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [nguoiTao]);

  return (
    <>
      <dataChiTietCongViec.Provider value={chiTiet}>
        <HeaderTemplate />
        <div className="container my-10">
          <div className="flex gap-[58px]">
            {/* Thông tin chi tiết */}
            <div className="w-3/5">
              <IntroduceDetails user={user} />

              {/* Giới thiệu về khóa học */}
              <AboutDetails />

              {/* Thông tin tác giả */}
              <AuthorDetails user={user} />

              {/* Thông tin về My Portfolio */}
              <MyPortfolioDetails />

              {/* Thông tin về các khóa học được đề xuất */}
              <RecommendedDetails />

              {/* Thông tin về Reviews */}
              <ReviewsDetails maChiTietLoaiCongViec={maChiTietLoaiCongViec} />
            </div>

            {/* Các gói */}
            <div className="w-2/5">
              <PackageDetails />
            </div>
          </div>
        </div>
        <FooterTemplate />
      </dataChiTietCongViec.Provider>
    </>
  );
};

export default DetailTemplate;
