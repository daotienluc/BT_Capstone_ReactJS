import React from "react";
import { Link } from "react-router-dom";

const ServicesItem = ({ icon, content }) => {
  return (
    <Link>
      <div className="items w-[130px] border-2 p-4 rounded-xl shadow-ServicesBoxShadow space-y-4">
        <div className="text-3xl">{icon}</div>
        <p>{content}</p>
      </div>
    </Link>
  );
};

export default ServicesItem;
