import React, { useEffect, useState } from "react";
import CarouselCustom from "../../../components/CarouselCustom/CarouselCustom";
import { StarOutlined } from "@ant-design/icons";
import { Link, useLocation } from "react-router-dom";
import { congviecService } from "../../../services/congviec.services";

const RecommendedDetails = () => {
  const [chiTiet, setChiTiet] = useState([]);
  const location = useLocation();
  useEffect(() => {
    congviecService
      .getCongViec()
      .then((res) => {
        setChiTiet(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // Hàm nhóm dữ liệu
  const groupItems = (items, groupSize) => {
    const grouped = [];
    for (let i = 0; i < items.length; i += groupSize) {
      grouped.push(items.slice(i, i + groupSize));
    }
    return grouped;
  };

  // Nhóm dữ liệu thành các nhóm 2 item
  const groupedChiTiet = groupItems(chiTiet, 2);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <>
      <div className="p-5 bg-gray-100 mt-10">
        <h2 className="font-bold text-xl text-[#404145] my-5">
          Recommended for you
        </h2>
        <CarouselCustom key={location.pathname}>
          {groupedChiTiet.map((group, index) => (
            <div key={index} className="grid grid-cols-2 gap-5">
              {group.map((item) => (
                <div key={item.id}>
                  <Link to={`/details/${item.id}/${item.nguoiTao}`}>
                    <img
                      src={item.hinhAnh}
                      alt=""
                      className="w-full object-cover h-[196px] rounded-lg"
                    />
                  </Link>
                  <div className="space-y-2 mt-3">
                    <div className="flex justify-between">
                      <div className="flex items-center gap-3">
                        <img
                          src={item.hinhAnh}
                          alt=""
                          className="w-7 h-7 rounded-full hover:cursor-pointer"
                        />
                        <p className="text-sm">
                          Ad by{" "}
                          <span className="font-bold hover:underline">
                            {item.nguoiTao}
                          </span>
                        </p>
                      </div>
                      <div>
                        <p>Lever 2 </p>
                      </div>
                    </div>
                    <Link
                      to={`/details/${item.id}/${item.nguoiTao}`}
                      className="line-clamp-2 hover:underline"
                    >
                      {item.moTa}
                    </Link>
                    <div className="font-bold flex items-center gap-2">
                      <p>
                        <StarOutlined /> {item.saoCongViec}{" "}
                        <span className="text-[#74767e]">({item.danhGia})</span>
                      </p>
                    </div>
                    <p className="font-bold">From ${item.giaTien}</p>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </CarouselCustom>
      </div>
    </>
  );
};

export default RecommendedDetails;
