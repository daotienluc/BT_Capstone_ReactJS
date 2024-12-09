import React, { useContext } from "react";
import Icons from "../../components/Icons";
import { Link, useNavigate } from "react-router-dom";
import { pathDefault } from "../../common/path";
import { LeftOutlined } from "@ant-design/icons";
import { Input } from "antd";
import { ButtonOutline } from "../../components/Button/ButtonCustom";
import Lottie from "react-lottie";
import * as animationData from "./../../assets/animation/loginAnimation.json";
import { useFormik } from "formik";
import { authService } from "../../services/auth.service";
import { NotificationContext } from "../../App";
import * as Yup from "yup";

const SignUp = () => {
  const handleNotification = useContext(NotificationContext);

  const navigate = useNavigate();

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: JSON.parse(JSON.stringify(animationData)),
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const { handleBlur, handleChange, handleSubmit, values, errors, touched } =
    useFormik({
      initialValues: {
        name: "",
        email: "",
        password: "",
      },
      onSubmit: (values) => {
        console.log(values);
        authService
          .signUp(values)
          .then((res) => {
            handleNotification("success", "Đăng ký thành công", 3000);
            navigate(pathDefault.signIn);
            console.log(res);
          })
          .catch((err) => {
            console.log(err);
            handleNotification("error", err.response.data.message);
          });
      },
      validationSchema: Yup.object({
        name: Yup.string().required("Vui lòng không bỏ trống"),
        email: Yup.string()
          .email("Vui lòng nhập đúng định dạng Email")
          .required("Vui lòng không bỏ trống"),
        password: Yup.string().required("Vui lòng không bỏ trống"),
      }),
    });

  return (
    <div className="h-screen grid lg:grid-cols-3 py-10">
      <div className="signIn_animation col-span-1 lg:col-span-2  h-full">
        {/* Animation */}
        <Lottie options={defaultOptions} height={"65%"} width={"100%"} />
      </div>
      <div className="signIn_form h-full px-10 flex flex-col items-center  lg:min-h-screen">
        {/* Logo and back to homePage */}
        <div className="flex justify-between items-center">
          <Icons.logo />
          <Link to={pathDefault.homePage}>
            <LeftOutlined /> Go back
          </Link>
        </div>

        {/* Form */}
        <div>
          <h1 className="text-4xl font-semibold">Trang đăng ký</h1>
          <p className="text-sm font-semibold text-gray-400 pb-6 pt-2">
            Nhập Email để bắt đầu đăng ký
          </p>
          <form className="space-y-3" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="">Tên</label>
              <Input
                name="name"
                value={values.name}
                onBlur={handleBlur}
                onChange={handleChange}
                placeholder="Vui lòng nhập tên"
              />
              {errors.name && touched.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>

            <div>
              <label htmlFor="">Email</label>
              <Input
                name="email"
                value={values.email}
                onBlur={handleBlur}
                onChange={handleChange}
                placeholder="Vui lòng nhập Email"
              />
              {errors.email && touched.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            <div>
              <label htmlFor="">Mật khẩu</label>
              <Input
                type="password"
                name="password"
                value={values.password}
                onBlur={handleBlur}
                onChange={handleChange}
                placeholder="Vui lòng nhập mật khẩu"
              />
              {errors.password && touched.password && (
                <p className="text-red-500 text-sm mt-1">{errors.password}</p>
              )}
            </div>

            <div>
              <ButtonOutline
                type="submit"
                content="Đăng ký"
                className="w-full py-2"
              />
            </div>
          </form>
        </div>

        {/* đăng ký */}
        <div className="text-center">
          <span>
            Bạn đã có tài khoản?{" "}
            <Link
              to={pathDefault.signIn}
              className="font-semibold hover:underline duration-200"
            >
              Đăng nhập tại đây
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
