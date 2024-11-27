import React, { useContext, useEffect, useState } from "react";
import InputCustom from "./../../../../../components/Input/InputCustom/InputCustom";
import SelectCustom from "../../../../../components/SelectCustom/SelectCustom";
import { SkillServices } from "../../../../../services/skill.services";
import { Button, DatePicker } from "antd";
import { useFormik } from "formik";
import { nguoidungServices } from "../../../../../services/nguoidung.services";
import { NotificationContext } from "../../../../../App";

const FormAddUser = ({ handleCloesModel, layDanhSachNguoiDung }) => {
  const [skill, setSkill] = useState([]);
  const handleNotification = useContext(NotificationContext);

  const { handleSubmit } = useFormik({
    initialValues: {
      id: 0,
      name: "",
      email: "",
      password: "",
      phone: "",
      birthday: "",
      gender: true,
      role: "",
      skill: [],
      certification: [],
    },
    onSubmit: (values) => {
      handleNotification("success", "Thêm người dùng thành công");
      console.log(values);
      nguoidungServices
        .themNguoiDung(values)
        .then((res) => {
          console.log(res);
          handleCloesModel();
          layDanhSachNguoiDung();
        })
        .catch((err) => {
          console.log(err);
        });
    },
  });

  useEffect(() => {
    SkillServices.skill()
      .then((res) => {
        setSkill(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <form className="space-y-3" onSubmit={handleSubmit}>
      <InputCustom labelContent="Họ tên" placeholder="Vui lòng nhập họ tên" />
      <InputCustom labelContent="Emai" placeholder="Vui lòng nhập Emai" />
      <InputCustom
        type="password"
        labelContent="Mật khẩu"
        placeholder="Vui lòng nhập Mật khẩu"
      />
      <InputCustom
        labelContent="Số điện thoại"
        placeholder="Vui lòng nhập số điện thoại"
      />
      <div className="grid grid-cols-2 gap-5">
        <div>
          <label className="font-medium mb-1 block">Ngày sinh</label>
          <DatePicker className="w-full" />
        </div>
        <SelectCustom
          labelContent="Giới tính"
          options={[
            {
              label: "Nam",
              value: true,
            },
            {
              label: "Nữ",
              value: false,
            },
          ]}
        />
      </div>
      <div>
        <div className="grid grid-cols-2 gap-5">
          <SelectCustom
            labelContent="Skills"
            mode={"tags"}
            options={skill.map((item) => {
              return {
                label: item.tenSkill,
                value: item.id,
              };
            })}
          />
          <SelectCustom labelContent="Chứng chỉ" />
        </div>
      </div>
      <Button type="submit">Thêm người dùng</Button>
    </form>
  );
};

export default FormAddUser;
