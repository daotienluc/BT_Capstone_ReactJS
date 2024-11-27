import React from "react";
import "./CarouselCustom.scss";
import { Carousel } from "antd";

const CarouselCustom = ({ image, className, content }) => {
  return (
    <>
      <Carousel className="carousel_custom" arrows>
        <div>
          <h3 className={className}>{content}</h3>
        </div>
        <div>
          <h3 className={className}>{content}</h3>
        </div>
      </Carousel>
    </>
  );
};

export default CarouselCustom;
