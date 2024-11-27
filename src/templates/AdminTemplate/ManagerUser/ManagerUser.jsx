import React, { useContext, useEffect, useState } from "react";
import { nguoidungServices } from "../../../services/nguoidung.services";
import { Avatar, Button, Modal, Popconfirm, Table, Tag } from "antd";
import { NotificationContext } from "../../../App";
import FormAddUser from "./components/FormAddUser/FormAddUser";

const ManagerUser = () => {
  const [listNguoiDung, setListNguoiDung] = useState([]);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleNotification = useContext(NotificationContext);

  const layDanhSachNguoiDung = () => {
    nguoidungServices
      .layDanhSachNguoiDung()
      .then((res) => {
        setListNguoiDung(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "1",
    },
    {
      title: "Họ Tên",
      dataIndex: "name",
      key: "2",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "3",
    },
    {
      title: "Ảnh Đại Diện",
      dataIndex: "avatar",
      key: "4",
      render: (text, recod, index) => {
        return text ? (
          <img src={text} alt="" className="w-16 h-16 rounded-full" />
        ) : (
          <Avatar size={64}>{recod.name[0]}</Avatar>
        );
      },
    },

    {
      title: "Chức Vụ",
      dataIndex: "role",
      key: "5",
      render: (text, recod, index) => {
        return text == "ADMIN" ? (
          <Tag color="red">{text}</Tag>
        ) : text == "USER" ? (
          <Tag color="volcano">{text}</Tag>
        ) : (
          <Tag color="gold">{text}</Tag>
        );
      },
    },

    {
      title: "Hành Động",
      key: "6",
      render: (text, recod, index) => {
        return (
          <div className="space-x-3">
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
              onCancel={() => {}}
              okText="Yes"
              cancelText="No"
            >
              <Button danger>Xóa</Button>
            </Popconfirm>
            <Button className="border-yellow-500 text-yellow-500">Sửa</Button>
          </div>
        );
      },
    },
  ];

  useEffect(() => {
    layDanhSachNguoiDung();
  }, []);

  return (
    <div className="space-y-3">
      <h1 className="font-bold text-3xl mb-3">
        Danh sách người dùng trong hệ thống
      </h1>
      <Button
        onClick={() => setIsModalOpen(true)}
        variant="solid"
        className="bg-green-500"
      >
        Thêm người dùng
      </Button>
      <Table columns={columns} dataSource={listNguoiDung} />;
      <Modal
        onClose={() => {
          setIsModalOpen(false);
        }}
        title="Basic Modal"
        open={isModalOpen}
      >
        <FormAddUser
          handleCloesModel={() => {
            setIsModalOpen(false);
          }}
          layDanhSachNguoiDung={layDanhSachNguoiDung}
        />
      </Modal>
    </div>
  );
};

export default ManagerUser;
