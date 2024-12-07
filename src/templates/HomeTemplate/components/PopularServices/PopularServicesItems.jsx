import React from "react";
import "./PopularServices.scss";
import { Link } from "react-router-dom";

const PopularServicesItems = ({ backgroundColor, content, image }) => {
  return (
    <>
      <Link
        className={`flex justify-between flex-col p-2 rounded-2xl ${backgroundColor}`}
      >
        <h2 className="pt-3 text-xl font-bold text-white line-clamp-2">
          {content}
        </h2>
        <div>
          <img src={image} alt="" className="rounded-2xl" />
        </div>
      </Link>
    </>
  );
};

export default PopularServicesItems;
