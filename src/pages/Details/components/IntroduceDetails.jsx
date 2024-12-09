import React, { useContext } from "react";
import { HomeOutlined, StarOutlined } from "@ant-design/icons";
import { Breadcrumb } from "antd";
import avataImg from "./../../../assets/img/avata.jpg";
import CarouselCustom from "../../../components/CarouselCustom/CarouselCustom";
import { dataChiTietCongViec } from "../DetailTemplate";

const IntroduceDetails = ({ user }) => {
  const { danhGia, hinhAnh, saoCongViec, tenCongViec } =
    useContext(dataChiTietCongViec);

  const images = [
    "https://via.placeholder.com/600x400?text=Image+1",
    "https://via.placeholder.com/600x400?text=Image+2",
    "https://via.placeholder.com/600x400?text=Image+3",
  ];
  return (
    <>
      <div>
        <div>
          <Breadcrumb
            items={[
              {
                title: <HomeOutlined />,
              },
              {
                title: <a href="">Application Center</a>,
              },
              {
                title: <a href="">Application List</a>,
              },
              {
                title: "Other",
              },
            ]}
          />
        </div>

        {/* Thông tin chính */}
        <h2 className="text-3xl font-bold mb-4 mt-5">{tenCongViec}</h2>
        <div className="flex space-x-3">
          <div>
            <img src={user.avatar} alt="" className="w-20 h-20 rounded-full" />
          </div>
          <div className="">
            <div>
              <h3 className="font-semibold text-lg">
                {user.name} <span className="font-medium text-sm">Lever 2</span>
              </h3>
            </div>
            <div className="space-x-2">
              <StarOutlined />
              <StarOutlined />
              <StarOutlined />
              <StarOutlined />
              <StarOutlined />
              <span className="font-bold">{saoCongViec}</span>
              <span>({danhGia} reviews)</span>
            </div>
          </div>
        </div>
        <div className="mt-10">
          <CarouselCustom>{hinhAnh}</CarouselCustom>
        </div>
      </div>
    </>
  );
};

export default IntroduceDetails;
