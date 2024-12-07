import { http } from "./Config";

export const congviecService = {
  getCongViec: () => {
    return http.get("/cong-viec");
  },
  getCongViecTheoTen: (keyword) => {
    return http.get(`/cong-viec/lay-danh-sach-cong-viec-theo-ten/${keyword}`);
  },
  getCongViecTheoKetQuaTimKiem: (keyword) => {
    return http.get(`/cong-viec/lay-danh-sach-cong-viec-theo-ten/${keyword}`);
  },
  getCongViecTheoId: (id) => {
    return http.get(`/cong-viec/${id}`);
  },
  getCongViecTheoMaChiTietLoaiCongViec: (data) => {
    return http.get(`/cong-viec/lay-cong-viec-theo-chi-tiet-loai/${data}`);
  },
};
