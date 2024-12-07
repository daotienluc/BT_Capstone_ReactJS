import { Dropdown } from "antd";
import React, { useState } from "react";
import { DownOutlined } from "@ant-design/icons";

const DropdownHeader = ({ buttonContent = "dropdown", items, className }) => {
  const [open, setOpen] = useState(false);

  return (
    <Dropdown
      className={className}
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
        className="font-semibold capitalize py-2 px-4 hover:bg-gray-100 duration-200 rounded-md"
      >
        {buttonContent}
        <span className="ml-2">
          <DownOutlined
            className={`${open ? "rotate-180" : "rotate-0"} duration-300 `}
          />
        </span>
      </button>
    </Dropdown>
  );
};

export default DropdownHeader;
