import React, { useState } from "react";
import HeaderTemplate from "../../templates/HomeTemplate/components/HeaderTemplate";
import {
  ArrowRightOutlined,
  CheckOutlined,
  ClockCircleOutlined,
  FileImageOutlined,
  FlagOutlined,
  HeartOutlined,
  HomeOutlined,
  ReloadOutlined,
  ShareAltOutlined,
  StarOutlined,
} from "@ant-design/icons";
import { Breadcrumb } from "antd";
import avataImg from "./../../assets/img/avata.jpg";
import detailsImg from "./../../assets/img/details.jpg";
import details2Img from "./../../assets/img/details_2.jpg";
import details3Img from "./../../assets/img/details_3.jpg";
import CarouselCustom from "../../components/CarouselCustom/CarouselCustom";
import CarouselItems from "../../components/CarouselCustom/CarouselItems";
import { ButtonOutline } from "../../components/Button/ButtonCustom";
import { Link } from "react-router-dom";
import FooterTemplate from "../../templates/HomeTemplate/components/FooterTemplate";

const Details = () => {
  const [selectedPackage, setSelectedPackage] = useState("Basic");
  const packages = {
    Basic: {
      price: "$10",
      description: "Simple graphic design (Please contact before ordering)",
      delivery: "1-day delivery",
      revisions: "Unlimited Revisions",
      includeSource: true,
    },
    Standard: {
      price: "$25",
      description: "Advanced graphic design with extra features",
      delivery: "2-day delivery",
      revisions: "5 Revisions",
      includeSource: true,
    },
    Premium: {
      price: "$50",
      description: "Complete graphic design solution",
      delivery: "3-day delivery",
      revisions: "3 Revisions",
      includeSource: true,
    },
  };

  const handlePackageClick = (packageType) => {
    setSelectedPackage(packageType);
  };

  const currentPackage = packages[selectedPackage];

  return (
    <>
      <HeaderTemplate />
      <div className="container my-10">
        <div className="flex gap-[58px]">

          {/* Thông tin chi tiết */}
          <div className="w-3/5">
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
            <h2 className="text-3xl font-bold mb-4 mt-5">
              I will create graphic design of any kind you need
            </h2>
            <div className="flex space-x-3">
              <div>
                <img src={avataImg} alt="" className="w-20 h-20 rounded-full" />
              </div>
              <div className="">
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
            <div>
              <CarouselCustom
                className="!h-[500px]"
                content={
                  <>
                    <CarouselItems image={detailsImg} />
                  </>
                }
              />
            </div>
            <div className="flex justify-between my-10">
              <h2 className="font-bold text-xl text-[#404145] ">
                What people loved about this freelancer
              </h2>
              <Link className="font-medium text-base hover:underline ">
                See all reviews
              </Link>
            </div>
            <CarouselCustom
              className="!h-[200px]"
              content={
                <>
                  <CarouselItems image={detailsImg} />
                </>
              }
            />

            {/* Giới thiệu về khóa học */}
            <h2 className="font-bold text-xl text-[#404145] mt-10">
              About this gig
            </h2>
            <div className="text-[#62646A] space-y-5 font-medium">
              <p>Gig Title </p>
              <p>
                I will design your website using any platform of your choice
                including Wix, Shopify, Wordpress, Squarespace, and Weebly.
              </p>
              <p>Description</p>
              <p>
                Looking for a professional website? Then youve come to the right
                place!{" "}
              </p>
              <p>
                My name is Seth and as your experienced website creator, I will
                help bring your vision to life. I have helped countless clients
                worldwide and I am excited for our future partnership. By
                working together, we will bring your website vision to life the
                way you love it and will be proud of!
              </p>
              <p>Why choose Me?</p>
              <ul className="list-disc mx-10">
                <li>Countless happy clients from around the world</li>
                <li>Professional and out of the box ideas</li>
                <li>EYE Catching</li>
                <li>Countless happy clients from around the world</li>
                <li>Countless happy clients from around the world</li>
                <li>Countless happy clients from around the world</li>
                <li>Countless happy clients from around the world</li>
                <li>Countless happy clients from around the world</li>
              </ul>
              <p>My Expertise:</p>
              <p>
                Wix | Shopify | Wordpress | Squarespace | Weebly | E-Commerce |
                Responsive | Mobile Friendly | Plugin Installation | Landing
                Page | User Interface |
              </p>
              <p>Feel that tingling in your fingertips?</p>
              <p>Then let's get started!</p>
            </div>

            {/* Thông tin tác giả */}
            <div className="space-y-5">
              <h2 className="font-bold text-xl text-[#404145] mt-10">
                Get to know Seth S
              </h2>
              <div className="flex space-x-3">
                <div>
                  <img
                    src={avataImg}
                    alt=""
                    className="w-20 h-20 rounded-full"
                  />
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
                Hello, Welcome to Gogelle. We are a team of logo designers with
                over 12 years design experience. We create signature logo and
                minimalist logo designs. Our Philosophy is to approach each logo
                design project as an opportunity to make an impact in your
                business. We can't wait to work with you!
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

            {/* Thông tin về My Portfolio */}
            <h2 className="font-bold text-xl text-[#404145] mt-10">
              My Portfolio
            </h2>
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
                <p>
                  7B CONSTRUCTION is a general contracting company. Our Client
                </p>
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

            {/* Thông tin về các khóa học được đề xuất */}
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

            {/* Thông tin về Reviews */}
            <h2 className="font-bold text-xl text-[#404145] mt-10 mb-5">
              Reviews
            </h2>
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
                  Ojo created a very professional logo for my independent
                  consulting LLC in just a couple of days! I selected the 3
                  designs option and I loved one of them without needing any
                  revisions! Thank you so much! Ojo created a very professional
                  logo for my independent consulting LLC in just a couple of
                  days! I selected the 3 designs option and I loved one of them
                  without needing any revisions! Thank you so much!
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
          </div>

          {/* Các gói */}
          <div className="w-2/5">
            <div className=" sticky top-10 bg-white z-10">
              <div className="space-x-3 mb-5 flex justify-end">
                <HeartOutlined />
                <button className="px-3 py-1 border-2 rounded-lg">90</button>
                <button className="px-3 py-1 border-2 rounded-lg">
                  <ShareAltOutlined />
                </button>
              </div>
              <div className="border-2">
                <div className="flex">
                  {["Basic", "Standard", "Premium"].map((pkg) => (
                    <button
                      key={pkg}
                      className={`w-36 h-16 border-b-2 font-bold ${
                        selectedPackage === pkg
                          ? "text-black border-b-4"
                          : "text-gray-500"
                      } ${pkg === "Standard" ? "border-l-2 border-r-2" : ""} ${
                        selectedPackage === pkg && pkg === "Standard"
                          ? "border-l-2 border-r-2"
                          : ""
                      }`}
                      onClick={() => handlePackageClick(pkg)}
                    >
                      {pkg}
                    </button>
                  ))}
                </div>
                <div className="p-5 font-medium text-[#828488] space-y-3">
                  <div className="space-y-1">
                    <p className="text-2xl font-bold text-black">
                      {" "}
                      {currentPackage.price}
                    </p>
                    <p>
                      Save up to 15% with{" "}
                      <span className="text-[#026A5D]">Subscribe to Save</span>
                    </p>
                  </div>
                  <p>
                    <span className="font-bold text-lg">{selectedPackage}</span>{" "}
                    {currentPackage.description}
                  </p>
                  <div className="space-y-1">
                    <div className="flex space-x-5">
                      <p>
                        <ClockCircleOutlined className="mr-3" />
                        {currentPackage.delivery}
                      </p>
                      <p>
                        <ReloadOutlined className="mr-3" />
                        {currentPackage.revisions}
                      </p>
                    </div>
                    {currentPackage.includeSource && (
                      <p>
                        <CheckOutlined /> Include source file
                      </p>
                    )}
                  </div>
                  <ButtonOutline
                    content="Continue"
                    icon={<ArrowRightOutlined className="float-end mt-1" />}
                    className="bg-black text-white !border-black hover:!bg-[#404145] w-full py-2"
                  />
                  <p className="text-center">Compare packages</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <FooterTemplate />
    </>
  );
};

export default Details;
