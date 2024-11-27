import { Input } from "antd";
import React from "react";

const InputCustom = ({
  value,
  name,
  id,
  error,
  touched,
  handleBlur,
  handleChange,
  labelContent,
  placeholder,
  type = "text",
}) => {
  return (
    <div>
      <label className="font-medium mb-1 inline-block" htmlFor={id}>
        {labelContent}
      </label>
      <Input
        name={name}
        value={value}
        id={id}
        onBlur={handleBlur}
        onChange={handleChange}
        type={type}
        placeholder={placeholder}
      />
      {error && touched ? (
        <p className="text-red-500 text-sm mt-1">{error}</p>
      ) : null}
    </div>
  );
};

export default InputCustom;
