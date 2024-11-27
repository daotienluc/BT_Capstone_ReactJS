import { http } from "./../services/Config";

export const nguoidungServices = {
  layDanhSachNguoiDung: () => {
    return http.get("/users");
  },
  xoaDanhSachNguoiDung: (id) => {
    return http.delete(`/users?id=${id}`);
  },
  themNguoiDung: (data) => {
    return http.post("/users", data);
  },
};
