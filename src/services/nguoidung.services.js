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
  layDanhSachJob: () => {
    return http.get("/cong-viec");
  },
  xoaJob: (id, token) => {
    return http.delete(`/cong-viec/${id}`, {
      headers: {
        token: token,
      },
    });
  },
  themJob: (data, token) => {
    return http.post(`/cong-viec`, data, {
      headers: {
        token: token,
      },
    });
  },
  layDanhSachBinhLuan: () => {
    return http.get("/binh-luan");
  },
};
