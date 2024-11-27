import { Select } from "antd";
import React from "react";

const SelectCustom = ({ labelContent, options, mode }) => {
  return (
    <div>
      <label className="font-medium mb-1 block">{labelContent}</label>
      <Select mode={mode && mode} className="block" options={options} />
    </div>
  );
};

export default SelectCustom;
