import React from "react";
import { Input } from "antd";
import "./InputSearch.scss";

const InputSearch = ({ placeholder, value, handleChange, handleClick }) => {
  return (
    <Input.Search
      onClick={handleClick}
      onChange={handleChange}
      className="input_search"
      placeholder={placeholder}
    />
  );
};

export default InputSearch;
