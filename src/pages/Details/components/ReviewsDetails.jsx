import React from "react";
import { FlagOutlined, StarOutlined } from "@ant-design/icons";
import avataImg from "./../../../assets/img/avata.jpg";

const ReviewsDetails = () => {
  return (
    <>
      <h2 className="font-bold text-xl text-[#404145] mt-10 mb-5">Reviews</h2>
      <div className="p-5 border-2 rounded-lg">
        <div className="flex gap-5 border-b-2 pb-5">
          <div>
            <img
              src={avataImg}
              alt=""
              className="w-12 h-12 rounded-full object-cover"
            />
          </div>
          <div className="flex justify-between flex-col">
            <p className="font-bold text-lg">drmitchgibson</p>
            <p className="flex items-center gap-2">
              <FlagOutlined />{" "}
              <span className="text-xs text-[#74767e] font-medium">
                United States
              </span>
            </p>
          </div>
        </div>
        <div>
          <div className="flex gap-5 items-center mt-5">
            <div className="space-x-2">
              <StarOutlined />
              <StarOutlined />
              <StarOutlined />
              <StarOutlined />
              <StarOutlined />
              <span className="font-bold">5</span>
            </div>
            <div className="text-xs text-[#74767e] font-medium">
              1 month ago
            </div>
          </div>
          <p className="text-[#74767e] font-medium line-clamp-4 my-5">
            Ojo created a very professional logo for my independent consulting
            LLC in just a couple of days! I selected the 3 designs option and I
            loved one of them without needing any revisions! Thank you so much!
            Ojo created a very professional logo for my independent consulting
            LLC in just a couple of days! I selected the 3 designs option and I
            loved one of them without needing any revisions! Thank you so much!
          </p>
          <div className="flex text-[#74767e] gap-10">
            <div>
              <p className="font-bold">$100-$200</p>
              <p className="font-medium">Price</p>
            </div>
            <div>
              <div>
                <p className="font-bold">5 days</p>
                <p className="font-medium">Duration</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReviewsDetails;
