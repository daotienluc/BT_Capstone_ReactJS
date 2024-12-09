import React, { useEffect, useState } from "react";
import { congviecService } from "../../services/congviec.services";
import HeaderTemplate from "./../../templates/HomeTemplate/components/HeaderTemplate";
import FooterTemplate from "./../../templates/HomeTemplate/components/FooterTemplate";
import DropdownHeader from "../../components/Dropdown/DropdownHeader";
import DropdownSearchResults from "../../components/Dropdown/DropdownSearchResults";
import { Pagination, Switch } from "antd";
import { StarOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const SearchResults = () => {
  const [results, setResults] = useState([]);
  // Lấy từ khóa từ query string
  const searchParams = new URLSearchParams(location.search);
  const keyword = searchParams.get("keyword");

  useEffect(() => {
    congviecService
      .getCongViecTheoKetQuaTimKiem(keyword)
      .then((res) => {
        console.log(res.data.content);
        setResults(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <HeaderTemplate />
      <div className="container">
        <h2 className="text-3xl py-10">
          Results for <span className="font-bold">{keyword}</span>
        </h2>
        <div className="flex justify-between">
          <div className="space-x-3">
            <DropdownSearchResults buttonContent="Category" />
            <DropdownSearchResults buttonContent="Service options" />
            <DropdownSearchResults buttonContent="Seller details" />
            <DropdownSearchResults buttonContent="Budget" />
            <DropdownSearchResults buttonContent="Delivery time" />
          </div>
          <div className="flex items-center space-x-3">
            <Switch />
            <p>Pro services</p>
          </div>
        </div>
        <div className="flex justify-between mt-10 mb-5">
          <p className="text-[#74767e] text-lg ">{results.length}+ results</p>
          <div className="flex items-center ">
            <p className="text-[#74767e] text-lg">Sort by:</p>
            <DropdownHeader buttonContent="Relevance" />
          </div>
        </div>
        <div className="grid lg:grid-cols-4 grid-cols-2  gap-5 mb-10">
          {results.map((item, index) => (
            <div key={index}>
              <Link to={`/details/${item.id}/${item.congViec.nguoiTao}`}>
                <img
                  src={item.congViec.hinhAnh}
                  alt=""
                  className="w-full object-cover h-[196px] rounded-lg"
                />
              </Link>
              <div className="space-y-2 mt-3">
                <div className="flex justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src={item.congViec.hinhAnh}
                      alt=""
                      className="w-7 h-7 rounded-full hover:cursor-pointer"
                    />

                    <p className="text-sm">
                      Ad by{" "}
                      <span className="font-bold hover:underline">
                        {item.congViec.nguoiTao}
                      </span>
                    </p>
                  </div>
                  <div>
                    <p>Lever 2 </p>
                  </div>
                </div>
                <Link
                  to={`/details/${item.id}/${item.congViec.nguoiTao}`}
                  className="line-clamp-2 hover:underline"
                >
                  {item.congViec.moTa}
                </Link>
                <div className="font-bold flex items-center gap-2">
                  <StarOutlined />
                  <p>
                    {item.congViec.saoCongViec}{" "}
                    <span className="text-[#74767e]">
                      ({item.congViec.danhGia})
                    </span>
                  </p>
                </div>
                <p className="font-bold">From ${item.congViec.giaTien}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mb-10">
          <Pagination defaultCurrent={1} total={50} />
        </div>
      </div>
      <FooterTemplate />
    </>
  );
};

export default SearchResults;
