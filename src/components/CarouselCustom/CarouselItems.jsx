import React from "react";
import "./CarouselCustom.scss";
import { Link } from "react-router-dom";

const CarouselItems = ({ backgroundColor, content, image }) => {
  return (
    <>
      <Link
        className={`flex justify-between flex-col p-2 rounded-2xl ${backgroundColor}`}
      >
        <h2 className="pt-3 text-xl font-bold text-white line-clamp-2">
          {content}
        </h2>
        <div>
          <img
            src={image}
            alt=""
            className="rounded-2xl w-full h-full overflow-hidden"
          />
        </div>
      </Link>
    </>
  );
};

export default CarouselItems;
