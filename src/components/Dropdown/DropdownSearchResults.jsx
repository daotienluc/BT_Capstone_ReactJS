import { Dropdown } from "antd";
import React, { useState } from "react";
import { DownOutlined } from "@ant-design/icons";

const DropdownSearchResults = ({
  buttonContent = "dropdown",
  groupedItems = [],
}) => {
  const [open, setOpen] = useState(false);

  return (
    <Dropdown
      menu={{
        items: groupedItems.flatMap((group, groupIndex) => [
          {
            key: `group-${groupIndex}`,
            type: "group",
            label: group.groupTitle, // Tiêu đề của nhóm
          },
          ...group.items.map((item, itemIndex) => ({
            key: `item-${groupIndex}-${itemIndex}`,
            label: item,
          })),
        ]),
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
