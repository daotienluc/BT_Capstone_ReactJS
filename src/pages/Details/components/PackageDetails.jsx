import React, { useState } from "react";
import {
  ArrowRightOutlined,
  CheckOutlined,
  ClockCircleOutlined,
  HeartOutlined,
  ReloadOutlined,
  ShareAltOutlined,
} from "@ant-design/icons";
import { ButtonOutline } from "../../../components/Button/ButtonCustom";

const PackageDetails = () => {
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
      <div className=" sticky top-10 bg-white z-10">
        <div>
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
    </>
  );
};

export default PackageDetails;
