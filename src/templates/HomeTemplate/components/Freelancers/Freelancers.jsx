import React from "react";
import FreelancersItems from "./FreelancersItems";
import { ButtonOutline } from "../../../../components/Button/ButtonCustom";

const Freelancers = () => {
  return (
    <div className="container my-10">
      <h2 className="font-normal text-5xl text-[#404145]">
        Make it all happen with freelancers
      </h2>
      <div className="grid grid-cols-4 gap-5">
        <FreelancersItems />
        <FreelancersItems />
        <FreelancersItems />
        <FreelancersItems />
      </div>
      <div className="text-center my-10">
        <ButtonOutline
          content="Join now"
          className="bg-black text-white !border-black hover:!bg-[#404145]"
        />
      </div>
    </div>
  );
};

export default Freelancers;
