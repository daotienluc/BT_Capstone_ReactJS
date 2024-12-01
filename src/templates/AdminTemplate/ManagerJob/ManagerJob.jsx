import React, { useContext, useEffect, useState } from "react";
import { Avatar, Button, Modal, Popconfirm, Table, Tag } from "antd";
import { NotificationContext } from "../../../App";
import { nguoidungServices } from "../../../services/nguoidung.services";
import FormAddJob from "./components/FormAddJob/FormAddJob";

const ManagerJob = () => {
  const confirm = (e) => {
    console.log(e);
    message.success("Click on Yes");
  };
  const cancel = (e) => {
    console.log(e);
    message.error("Click on No");
  };
  const [isModalOpen, setIsModalOpen] = useState(false);

  const data = JSON.parse(localStorage.getItem("userInfo"));

  console.log(data);

  const handleNotification = useContext(NotificationContext);

  const [listJob, setListJob] = useState([]);

  const layDanhSachJob = () => {
    nguoidungServices
      .layDanhSachJob()
      .then((res) => {
        console.log(res);
        setListJob(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    layDanhSachJob();
  }, []);
  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "1",
    },
    {
      title: "Công việc",
      dataIndex: "tenCongViec",
      key: "2",
    },
    {
      title: "Giá Tiền",
      dataIndex: "giaTien",
      key: "3",
      render: (text, record, index) => {
        return text ? (
          <p className="text-red-500 font-semibold">{text}$</p>
        ) : (
          <Avatar size={40}>USER</Avatar>
        );
      },
    },
    {
      title: "Người Tạo",
      dataIndex: "nguoiTao",
      key: "4",
      render: (text) => {
        if (text == "1") {
          return <Tag color="blue">Admin </Tag>;
        } else {
          return <Tag color="red">Không xác định </Tag>;
        }
      },
    },
    {
      title: "Hình Ảnh",
      dataIndex: "hinhAnh",
      key: "5",
      render: (text, record, index) => {
        return text ? (
          <img className="w-full" src={text} />
        ) : (
          <Avatar size={40}>USER</Avatar>
        );
      },
    },
    {
      title: "Mô Tả",
      dataIndex: "moTa",
      key: "6",
      render: (text, recod, index) => {
        return text ? (
          <p className="font-light text-gray-800">{text}</p>
        ) : (
          <p>không có dữ liệu</p>
        );
      },
    },
    {
      title: "Hành Động",
      key: "7",
      render: (text, record, index) => {
        return (
          <div className="flex col-span-2 space-x-3">
            <Popconfirm
              title="Thực hiện xóa"
              description="Bạn có chắc muốn xóa ?"
              onConfirm={() => {
                nguoidungServices
                  .xoaJob(record.id, data.token)
                  .then((res) => {
                    console.log(res);
                    layDanhSachJob();
                    handleNotification("success", res.data.message);
                  })
                  .catch((err) => {
                    console.log(err);
                  });
              }}
              onCancel={cancel}
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

  return (
    <div className="space-y-3">
      <h1 className="font-bold text-3xl mb-3">Danh sách công việc</h1>
      <Button
        onClick={() => setIsModalOpen(true)}
        variant="solid"
        className="bg-green-500 text-white"
        size="large"
      >
        Thêm công việc
      </Button>
      <Table dataSource={listJob} columns={columns} />
      <Modal
        footer={null}
        title="Thêm công việc"
        open={isModalOpen}
        onCancel={() => {
          setIsModalOpen(false);
        }}
      >
        <FormAddJob
          handleCloesModel={() => {
            setIsModalOpen(false);
          }}
          layDanhSachJob={layDanhSachJob}
        />
      </Modal>
    </div>
  );
};

export default ManagerJob;
