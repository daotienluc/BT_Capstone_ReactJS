import React from "react";
import { Input } from "antd";
import "./InputSearch.scss";

const InputSearch = ({ placeholder, onKeyDown, handleChange, handleClick }) => {
  return (
    <Input.Search
      onClick={handleClick}
      onChange={handleChange}
      className="input_search"
      placeholder={placeholder}
      onKeyDown={onKeyDown}
    />
  );
};

export default InputSearch;
