import React from "react";
import "./Services.scss";
import ServicesItem from "./ServicesItem";
import {
  FundProjectionScreenOutlined,
  AntDesignOutlined,
} from "@ant-design/icons";

const Services = () => {
  return (
    <div className="container">
      <div className="grid grid-cols-9 gap-5">
        <ServicesItem
          icon={<FundProjectionScreenOutlined />}
          content="Programming & Tech"
        />
        <ServicesItem
          icon={<AntDesignOutlined />}
          content="Graphics & Design"
        />
        <ServicesItem
          icon={<AntDesignOutlined />}
          content="Graphics & Design"
        />
      </div>
    </div>
  );
};

export default Services;
