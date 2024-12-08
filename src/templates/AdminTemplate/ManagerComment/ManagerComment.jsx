import { Button, Popconfirm, Table } from "antd";
import Column from "antd/es/table/Column";
import React, { useEffect, useState } from "react";
import { nguoidungServices } from "../../../services/nguoidung.services";
import useViewPort from "../../../hooks/useViewPort";

const ManagerComment = () => {
  const [listComment, setListComment] = useState([]);
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "1",
    },
    {
      title: "Mã công việc",
      dataIndex: "maCongViec",
      key: "2",
    },
    {
      title: "Mã người bình luận",
      dataIndex: "maNguoiBinhLuan",
      key: "3",
    },
    {
      title: "Ngày bình luận",
      dataIndex: "ngayBinhLuan",
      key: "4",
    },

    {
      title: "Nội dung",
      dataIndex: "noiDung",
      key: "5",
    },
    {
      title: "Sao bình luận",
      dataIndex: "saoBinhLuan",
      key: "6",
    },

    {
      title: "Hành Động",
      key: "7",
      render: (text, recod, index) => {
        return (
          <div className=" flex col-span-2 space-x-3">
            <Popconfirm
              title="Thực hiện xóa người dùng"
              description="Bạn có chắc chắn muốn xóa người dùng không ?"
              onConfirm={() => {
                nguoidungServices
                  .xoaDanhSachNguoiDung(recod.id)
                  .then((res) => {
                    handleNotification("success", res.data.message);
                    layDanhSachNguoiDung();
                  })
                  .catch((err) => {
                    layDanhSachNguoiDung();
                    handleNotification("error", err.response.data.content);
                  });
              }}
              onCancel={() => {
                setIsModalOpen(false);
              }}
              okText="Yes"
              cancelText="No"
            >
              <Button className="bg-red-500 text-white border-red-500">
                Xóa
              </Button>
            </Popconfirm>
            <Button className="text-white border-yellow-500  bg-yellow-500">
              Sửa
            </Button>
          </div>
        );
      },
    },
  ];
  const { width } = useViewPort();
  const layDanhSachComment = () => {
    nguoidungServices
      .layDanhSachBinhLuan()
      .then((res) => {
        setListComment(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    layDanhSachComment();
  });
  return (
    <div>
      <h1 className="font-bold text-3xl mb-3">Danh sách bình luận</h1>
      <Table
        scroll={{ x: width < 1024 ? width : "" }}
        columns={columns}
        dataSource={listComment}
      />
    </div>
  );
};

export default ManagerComment;
