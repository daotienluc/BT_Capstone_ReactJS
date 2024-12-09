import React from "react";
import Vontélle from "./../../../../assets/img/Vontélle.jpg";
import { Link } from "react-router-dom";

const VontéllesItems = () => {
  return (
    <Link>
      <div className="shadow-VontélleBoxShadow p-10 rounded-xl space-y-3 hover:shadow-VontélleBoxShadowHover">
        <div className="flex justify-center">
          <img src={Vontélle} alt="" className="w-[80px] h-[80px]" />
        </div>
        <p className="text-center">3D Industrial Design</p>
      </div>
    </Link>
  );
};

export default VontéllesItems;
