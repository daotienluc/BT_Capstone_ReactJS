import React from "react";
import "./CarouselCustom.scss";
import { Carousel } from "antd";

const CarouselCustom = ({ className, children }) => {
  return (
    <Carousel className="carousel_custom" arrows>
      {Array.isArray(children) ? (
        children.map((slideContent, index) => (
          <div key={index} className={className}>
            {typeof slideContent === "string" ? (
              <img
                src={slideContent}
                alt={`Slide ${index}`}
                className="w-full rounded-xl"
              />
            ) : (
              slideContent
            )}
          </div>
        ))
      ) : (
        <div className={className}>
          {typeof children === "string" ? (
            <img
              src={children}
              alt="Single Slide"
              className="w-full rounded-xl"
            />
          ) : (
            children
          )}
        </div>
      )}
    </Carousel>
  );
};

export default CarouselCustom;
