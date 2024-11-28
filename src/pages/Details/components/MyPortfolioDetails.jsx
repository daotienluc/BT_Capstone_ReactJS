import React from "react";
import { FileImageOutlined } from "@ant-design/icons";
import details3Img from "./../../../assets/img/details_3.jpg";

const MyPortfolioDetails = () => {
  return (
    <>
      <h2 className="font-bold text-xl text-[#404145] mt-10">My Portfolio</h2>
      <div className="grid grid-cols-2 gap-5 p-5 border-2 rounded-lg my-5">
        <div>
          <div className=" relative">
            <img src={details3Img} alt="" className="rounded-lg" />
            <button className="absolute right-8 bottom-7 bg-[#725A13] px-4 py-1 rounded-3xl text-white">
              <FileImageOutlined className="mr-1" />5
            </button>
          </div>
        </div>
        <div className="flex justify-center space-y-3 flex-col">
          <h2 className="font-bold text-xl">7B CONSTRUCTION</h2>
          <p>7B CONSTRUCTION is a general contracting company. Our Client</p>
          <div>
            <button className="px-4 py-1 border-2 rounded-3xl">
              Logo Design
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-5 gap-5">
        <img
          src={details3Img}
          alt=""
          className=" rounded-lg border border-black"
        />
        <img src={details3Img} alt="" className=" rounded-lg" />
        <img src={details3Img} alt="" className=" rounded-lg" />
        <img src={details3Img} alt="" className=" rounded-lg" />
        <img src={details3Img} alt="" className=" rounded-lg" />
      </div>
    </>
  );
};

export default MyPortfolioDetails;
