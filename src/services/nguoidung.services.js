import { http } from "./../services/Config";

export const nguoidungServices = {
  layDanhSachNguoiDung: () => {
    return http.get("/users");
  },
  layDanhSachNguoiDungTheoId: (id) => {
    return http.get(`/users/${id}`);
  },
  xoaDanhSachNguoiDung: (id) => {
    return http.delete(`/users?id=${id}`);
  },
  themNguoiDung: (data) => {
    return http.post("/users", data);
  },
};
