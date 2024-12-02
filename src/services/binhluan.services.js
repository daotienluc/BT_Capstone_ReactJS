import { http } from "./Config";

export const binhluanServices = {
  maChiTietLoaiCongViec: (data) => {
    return http.get(`/binh-luan/lay-binh-luan-theo-cong-viec/${data}`);
  },
};
