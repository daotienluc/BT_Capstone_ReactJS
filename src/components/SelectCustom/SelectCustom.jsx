import { Select } from "antd";
import React from "react";

const SelectCustom = ({
  labelContent,
  options,
  mode,
  handleChange,
  handleBlur,
  value,
  error,
  touched,
  id,
  name,
}) => {
  return (
    <div>
      <label className="font-medium mb-1 block">{labelContent}</label>
      <Select
        id={id}
        value={value}
        mode={mode && mode}
        className="block"
        options={options}
        onChange={(val) => handleChange({ target: { name: name, value: val } })}
        onBlur={handleBlur}
      />
      {error && touched ? (
        <p className="text-red-500 text-sm mt-1">{error}</p>
      ) : null}
    </div>
  );
};

export default SelectCustom;
