import React from "react";
import { StarOutlined } from "@ant-design/icons";
import avataImg from "./../../../assets/img/avata.jpg";
import details2Img from "./../../../assets/img/details_2.jpg";
import { ButtonOutline } from "../../../components/Button/ButtonCustom";

const AuthorDetails = () => {
  return (
    <>
      <div className="space-y-5">
        <h2 className="font-bold text-xl text-[#404145] mt-10">
          Get to know Seth S
        </h2>
        <div className="flex space-x-3">
          <div>
            <img src={avataImg} alt="" className="w-20 h-20 rounded-full" />
          </div>
          <div>
            <div>
              <h3 className="font-semibold text-lg">
                Sajee Design{" "}
                <span className="font-medium text-sm">Lever 2</span>
              </h3>
            </div>
            <div className="space-x-2">
              <StarOutlined />
              <StarOutlined />
              <StarOutlined />
              <StarOutlined />
              <StarOutlined />
              <span className="font-bold">4.9</span>
              <span>(326 reviews)</span>
            </div>
          </div>
        </div>
        <ButtonOutline
          content="Contact me"
          className="bg-white text-black !border-black hover:!bg-[#404145] py-2"
        />
      </div>
      <div className="p-5 text-[#404145] border-2 mt-5 space-y-3">
        <div className="grid grid-cols-2 gap-5">
          <div>
            <p>From</p>
            <p className="font-semibold">United States</p>
          </div>
          <div>
            <p>Member since</p>
            <p className="font-semibold">Dec 2019</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-5">
          <div>
            <p>From</p>
            <p className="font-semibold">United States</p>
          </div>
          <div>
            <p>Member since</p>
            <p className="font-semibold">Dec 2019</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-5 pb-3 border-b-2">
          <div>
            <p>From</p>
            <p className="font-semibold">United States</p>
          </div>
          <div>
            <p>Member since</p>
            <p className="font-semibold">Dec 2019</p>
          </div>
        </div>
        <p className="pb-3 border-b-2">
          Hello, Welcome to Gogelle. We are a team of logo designers with over
          12 years design experience. We create signature logo and minimalist
          logo designs. Our Philosophy is to approach each logo design project
          as an opportunity to make an impact in your business. We can't wait to
          work with you!
        </p>
        <h2 className="font-medium text-black">Among my clients</h2>
        <div className="grid grid-cols-2 gap-5">
          <div className="flex items-center">
            <div className="p-1 border-2">
              <img src={details2Img} alt="" className="w-full" />
            </div>
            <div className="space-y-1 ml-3">
              <p className="font-semibold">Legacy Films</p>
              <p>Media</p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="p-1 border-2">
              <img src={details2Img} alt="" className="w-full" />
            </div>
            <div className="space-y-1 ml-3">
              <p className="font-semibold">Legacy Films</p>
              <p>Media</p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="p-1 border-2">
              <img src={details2Img} alt="" className="w-full" />
            </div>
            <div className="space-y-1 ml-3">
              <p className="font-semibold">Legacy Films</p>
              <p>Media</p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="p-1 border-2">
              <img src={details2Img} alt="" className="w-full" />
            </div>
            <div className="space-y-1 ml-3">
              <p className="font-semibold">Legacy Films</p>
              <p>Media</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AuthorDetails;
