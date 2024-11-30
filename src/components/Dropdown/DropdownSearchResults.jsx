import { Dropdown } from "antd";
import React, { useState } from "react";
import { DownOutlined } from "@ant-design/icons";

const DropdownSearchResults = ({ buttonContent = "dropdown", items }) => {
  const [open, setOpen] = useState(false);

  return (
    <Dropdown
      menu={{
        items: [{ label: "abc" }],
      }}
      trigger={["click"]}
      open={open}
    >
      <button
        onClick={() => {
          setOpen(!open);
        }}
        className="font-semibold capitalize py-2 px-4 border-2 hover:bg-gray-100 duration-200 rounded-md"
      >
        {buttonContent}
        <span className="ml-2">
          <DownOutlined className="text-xs " />
        </span>
      </button>
    </Dropdown>
  );
};

export default DropdownSearchResults;
