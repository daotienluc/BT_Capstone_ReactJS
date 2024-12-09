import React, { useContext, useEffect, useState } from "react";
import InputCustom from "./../../../../../components/Input/InputCustom/InputCustom";
import SelectCustom from "../../../../../components/SelectCustom/SelectCustom";
import { SkillServices } from "../../../../../services/skill.services";
import { Button, DatePicker } from "antd";
import { useFormik } from "formik";
import { nguoidungServices } from "../../../../../services/nguoidung.services";
import { NotificationContext } from "../../../../../App";
import * as Yup from "yup";

const FormAddUser = ({ handleCloesModel, layDanhSachNguoiDung }) => {
  const [skill, setSkill] = useState([]);
  const handleNotification = useContext(NotificationContext);

  const {
    handleBlur,
    handleChange,
    touched,
    errors,
    handleSubmit,
    values,
    setFieldValue,
  } = useFormik({
    initialValues: {
      id: 0,
      name: "",
      email: "",
      password: "",
      phone: "",
      birthday: "",
      gender: "",
      role: "",
      skill: [],
      certification: [],
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Vui lòng không bỏ trống"),
      email: Yup.string()
        .email("Vui lòng nhập đúng định dạng email")
        .required("Vui lòng không để trống"),
      phone: Yup.string()
        .required("Vui lòng không để trống")
        .matches(
          /^(0[3|5|7|8|9])+([0-9]{8})$/,
          "Số điện thoại không đúng định dạng"
        ),
      birthday: Yup.string()
        .required("Vui lòng không để trống")
        .nullable()
        .max(new Date(), "Ngày sinh không vượt quá ngày hiện tại")
        .typeError("Ngày không hợp lệ"),

      password: Yup.string()
        .required("Vui lòng không để trống")
        .min(5, "Mật khẩu tối thiểu 5 kí tự")
        .matches(/[A-Z]/, "Có ít nhất 1 chữ viết hoa")
        .matches(/[!@#$%^&*]/, "Có ít nhất 1 kí tự đặc biệt"),
      role: Yup.string()
        .required("Vui lòng chọn vai trò")
        .oneOf(["Admin", "User"], "Vai trò không hợp lệ"),
      gender: Yup.boolean().required("Vui lòng chọn giới tính"),
      skill: Yup.array()
        .min(3, "Vui lòng chọn ít nhất 3 kỹ năng")
        .required("vui lòng chọn kỹ năng"),
      certification: Yup.array()
        .required("Vui lòng điền chứng chỉ")
        .min(2, "Vui lòng điền ít nhất 2 chứng chỉ"),
    }),
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      nguoidungServices
        .themNguoiDung(values)
        .then((res) => {
          console.log(res);
          handleCloesModel();
          resetForm();
          layDanhSachNguoiDung();
          handleNotification("success", "Thêm người dùng thành công");
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
      <InputCustom
        id={"name"}
        name={"name"}
        value={values.name}
        error={errors.name}
        touched={touched.name}
        handleBlur={handleBlur}
        handleChange={handleChange}
        labelContent="Họ tên"
        placeholder="Vui lòng nhập họ tên"
      />
      <InputCustom
        id={"email"}
        name={"email"}
        value={values.email}
        error={errors.email}
        touched={touched.email}
        handleBlur={handleBlur}
        handleChange={handleChange}
        labelContent="Email"
        placeholder="Vui lòng nhập Email"
      />
      <InputCustom
        type="password"
        id={"password"}
        name={"password"}
        value={values.password}
        error={errors.password}
        touched={touched.password}
        handleBlur={handleBlur}
        handleChange={handleChange}
        labelContent="Mật khẩu"
        placeholder="Vui lòng nhập Mật khẩu"
      />
      <div className="grid grid-cols-2 gap-5 ">
        <InputCustom
          id={"phone"}
          name={"phone"}
          value={values.phone}
          handleChange={handleChange}
          handleBlur={handleBlur}
          error={errors.phone}
          touched={touched.phone}
          labelContent="Số điện thoại"
          placeholder="Vui lòng nhập số điện thoại"
        />

        <SelectCustom
          touched={touched.role}
          error={errors.role}
          name="role"
          value={values.role}
          handleChange={handleChange}
          handleBlur={handleBlur}
          labelContent="Chức Vụ"
          options={[
            {
              label: "Admin",
              value: "Admin",
            },
            {
              label: "User",
              value: "User",
            },
          ]}
        />
      </div>
      <div className="grid grid-cols-2 gap-5">
        <div>
          <label className="font-medium mb-1 block">Ngày sinh</label>
          <DatePicker
            onChange={(date, dateString) => {
              setFieldValue("birthday", dateString);
            }}
            format={"DD-MM-YY"}
            className="w-full"
          />
        </div>
        <SelectCustom
          touched={touched.gender}
          error={errors.gender}
          name="gender"
          value={values.gender}
          handleChange={handleChange}
          handleBlur={handleBlur}
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
            touched={touched.skill}
            error={errors.skill}
            name="skill"
            value={values.skill}
            handleChange={handleChange}
            handleBlur={handleBlur}
            labelContent="Skills"
            mode={"tags"}
            options={skill.map((item) => {
              return {
                label: item.tenSkill,
                value: item.id,
              };
            })}
          />
          <SelectCustom
            handleChange={handleChange}
            handleBlur={handleBlur}
            error={errors.certification}
            touched={touched.certification}
            name="certification"
            value={values.certification}
            mode={"tags"}
            labelContent="Chứng chỉ"
          />
        </div>
      </div>

      <Button htmlType="submit" variant="solid" className="bg-black text-white">
        Xác nhận
      </Button>
    </form>
  );
};

export default FormAddUser;
