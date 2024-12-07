import React, { useContext } from "react";
import { StarOutlined } from "@ant-design/icons";
import avataImg from "./../../../assets/img/avata.jpg";
import { ButtonOutline } from "../../../components/Button/ButtonCustom";
import { dataChiTietCongViec } from "../DetailTemplate";

const AuthorDetails = ({ user }) => {
  const { danhGia, saoCongViec } = useContext(dataChiTietCongViec);
  return (
    <>
      <div className="space-y-5">
        <h2 className="font-bold text-xl text-[#404145] mt-10">
          Get to know Seth S
        </h2>
        <div className="flex space-x-3">
          <div>
            <img src={user.avatar} alt="" className="w-20 h-20 rounded-full" />
          </div>
          <div>
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
            <p>Email</p>
            <p className="font-semibold">{user.email}</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-5">
          <div>
            <p>Gender</p>
            <p className="font-semibold">
              {user.gender == true ? "Male" : "Female"}
            </p>
          </div>
          <div>
            <p>Phone</p>
            <p className="font-semibold">{user.phone}</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-5 pb-3 border-b-2">
          <div>
            <p>Languages</p>
            <p className="font-semibold">English, Spanish</p>
          </div>
        </div>
        <p className="pb-3">
          Hello, Welcome to Gogelle. We are a team of logo designers with over
          12 years design experience. We create signature logo and minimalist
          logo designs. Our Philosophy is to approach each logo design project
          as an opportunity to make an impact in your business. We can't wait to
          work with you!
        </p>
      </div>
    </>
  );
};

export default AuthorDetails;
