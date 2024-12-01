import { useFormik } from "formik";
import React, { useContext } from "react";
import { nguoidungServices } from "../../../../../services/nguoidung.services";
import InputCustom from "../../../../../components/Input/InputCustom/InputCustom";
import { Button } from "antd";
import { NotificationContext } from "../../../../../App";
import * as Yup from "Yup";
const FormAddJob = ({ handleCloesModel, layDanhSachJob }) => {
  const handleNotification = useContext(NotificationContext);
  const data = JSON.parse(localStorage.getItem("userInfo"));
  const { handleBlur, handleChange, touched, errors, handleSubmit, values } =
    useFormik({
      initialValues: {
        id: 0,
        tenCongViec: "",
        danhGia: 0,
        giaTien: 0,
        nguoiTao: 1,
        hinhAnh: "",
        moTa: "",
        maChiTietLoaiCongViec: 0,
        moTaNgan: "",
        saoCongViec: 0,
      },
      validationSchema: Yup.object({
        tenCongViec: Yup.string().required("Vui lòng không bỏ trống"),
        danhGia: Yup.number()
          .typeError("Không hợp lệ")
          .required("Vui lòng không bỏ trống"),
        giaTien: Yup.number()
          .typeError("Không hợp lệ")
          .required("Vui lòng không bỏ trống"),
        saoCongViec: Yup.number()
          .typeError("Không hợp lệ")
          .required("Vui lòng không bỏ trống"),
        moTa: Yup.string().required("Vui lòng không bỏ trống"),
        moTaNgan: Yup.string().required("Vui lòng không bỏ trống"),
      }),
      onSubmit: (value, { resetForm }) => {
        console.log(value);
        nguoidungServices
          .themJob(value, data.token)
          .then((res) => {
            console.log(res);
            handleCloesModel();
            resetForm();
            layDanhSachJob();
            handleNotification("success", res.data.message);
          })
          .catch((err) => {
            console.log(err);
          });
      },
    });
  return (
    <form className="space-y-3" onSubmit={handleSubmit}>
      <InputCustom
        id={"tenCongViec"}
        name={"tenCongViec"}
        value={values.tenCongViec}
        placeholder="Vui lòng nhập tên công việc"
        labelContent="Công việc"
        error={errors.tenCongViec}
        touched={touched.tenCongViec}
        handleBlur={handleBlur}
        handleChange={handleChange}
      />

      <div className="grid grid-cols-2 gap-5">
        <InputCustom
          id={"danhGia"}
          name={"danhGia"}
          type="number"
          value={values.danhGia}
          placeholder="Vui lòng nhập đánh giá"
          labelContent="Đánh giá"
          error={errors.danhGia}
          touched={touched.danhGia}
          handleBlur={handleBlur}
          handleChange={handleChange}
        />
        <InputCustom
          id={"giaTien"}
          name={"giaTien"}
          value={values.giaTien}
          type="number"
          placeholder="Vui lòng nhập giá tiền"
          labelContent="Giá Tiền"
          error={errors.giaTien}
          touched={touched.giaTien}
          handleBlur={handleBlur}
          handleChange={handleChange}
        />
      </div>
      <div className="grid grid-cols-2 gap-5">
        <InputCustom
          id={"hinhAnh"}
          name={"hinhAnh"}
          placeholder="Vui lòng nhập link ảnh"
          labelContent="Hình ảnh"
          error={errors.hinhAnh}
          touched={touched.hinhAnh}
          handleBlur={handleBlur}
          handleChange={handleChange}
        />
        <InputCustom
          id={"saoCongViec"}
          name={"saoCongViec"}
          value={values.saoCongViec}
          error={errors.saoCongViec}
          touched={touched.saoCongViec}
          type="number"
          placeholder="Vui lòng nhập sao công việc"
          labelContent="Sao công việc"
          handleBlur={handleBlur}
          handleChange={handleChange}
        />
        {/* <InputCustom
          id={"maChiTietLoaiCongViec"}
          name={"maChiTietLoaiCongViec"}
          type="number"
          placeholder="Vui lòng nhập mã chi tiết công việc"
          labelContent="Mã chi tiết công việc"
        /> */}
      </div>
      <InputCustom
        id={"moTa"}
        name={"moTa"}
        value={values.moTa}
        placeholder="Vui lòng Vui lòng nhập mô tả"
        labelContent="Mô tả"
        error={errors.moTa}
        touched={touched.moTa}
        handleBlur={handleBlur}
        handleChange={handleChange}
      />
      <InputCustom
        id={"moTaNgan"}
        name={"moTaNgan"}
        value={values.moTaNgan}
        placeholder="Vui lòng Vui lòng nhập mô tả ngắn"
        labelContent="Mô tả ngắn"
        error={errors.moTaNgan}
        touched={touched.moTaNgan}
        handleBlur={handleBlur}
        handleChange={handleChange}
      />

      <Button
        htmlType="submit"
        variant="solid"
        className="bg-black text-white items-center"
      >
        Xác nhận
      </Button>
    </form>
  );
};

export default FormAddJob;
