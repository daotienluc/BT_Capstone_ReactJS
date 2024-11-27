import { Input } from "antd";
import React from "react";

const InputCustom = ({ labelContent, placeholder, type = "text" }) => {
  return (
    <div>
      <label className="font-medium mb-1 inline-block">{labelContent}</label>
      <Input type={type} placeholder={placeholder} />
    </div>
  );
};

export default InputCustom;
