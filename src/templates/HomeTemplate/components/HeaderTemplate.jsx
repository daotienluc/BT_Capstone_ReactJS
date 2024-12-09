import React, { useState, useEffect, useMemo, useContext } from "react";
import Icons from "../../../components/Icons";
import { Link, matchPath, useLocation, useNavigate } from "react-router-dom";
import { pathDefault } from "./../../../common/path";
import DropdownHeader from "../../../components/Dropdown/DropdownHeader";
import {
  ButtonGhost,
  ButtonOutline,
} from "../../../components/Button/ButtonCustom";
import { GlobalOutlined, MenuOutlined } from "@ant-design/icons";
import InputSearch from "../../../components/Input/InputSearch/InputSearch";
import { useDispatch, useSelector } from "react-redux";
import { congviecService } from "../../../services/congviec.services";
import { useDebounce } from "use-debounce";
import { Dropdown } from "antd";
import useViewPort from "../../../hooks/useViewPort";
import DropdownSearchResults from "../../../components/Dropdown/DropdownSearchResults";
import { handleDeleteUser } from "../../../redux/Slice/User.Slice";
import { NotificationContext } from "../../../App";

const HeaderTemplate = () => {
  const handleNotification = useContext(NotificationContext);
  const location = useLocation();
  const isDetailsPage =
    matchPath({ path: "/details/:id/:nguoiTao" }, location.pathname) ||
    matchPath({ path: "/search-results" }, location.pathname);
  const { width } = useViewPort();
  const [keyWord, setKeyWord] = useState("");
  const [open, setOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [listSearch, setListSearch] = useState([]);
  const [value] = useDebounce(keyWord, 1000);
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.UserSlice);

  const dispatch = useDispatch();

  // useMemo: quản lý các biến giúp kiểm tra khi nào thì nên tạo mới
  // useCallback: quản lý các function

  const handleChangeKeyWord = (e) => {
    setKeyWord(e.target.value);
  };

  useEffect(() => {
    if (value) {
      congviecService
        .getCongViecTheoTen(value)
        .then((res) => {
          setListSearch(res.data.content);
          setOpen(true);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, [value]);

  const itemListSearch = useMemo(() => {
    return listSearch.slice(0, 4).map((item, index) => {
      return {
        key: item.id,
        label: (
          <Link
            to={`/details/${item.id}/${item.congViec.nguoiTao}`}
            className="flex gap-5 items-center"
          >
            <img src={item.congViec.hinhAnh} alt="" className="w-20 h-20" />
            <div>
              <h4 className="text-lg font-semibold">
                {item.congViec.tenCongViec}
              </h4>
              <p className="mt-2">Đánh giá {item.congViec.danhGia}</p>
            </div>
          </Link>
        ),
      };
    });
  }, [listSearch]);

  const handleClickInputSearch = () => {
    setOpen(true);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && keyWord.trim()) {
      navigate(`/search-results?keyword=${encodeURIComponent(keyWord)}`);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("userInfo");

    handleNotification("success", "Đăng xuất thành công");

    // Cập nhật Redux store
    dispatch(handleDeleteUser());
  };

  const groupedItems = [
    {
      items: ["Profile", "Settings"],
    },
    {
      items: [<p onClick={() => handleLogout()}>Đăng xuất</p>],
    },
  ];

  // Hàm mở/đóng menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Hàm đóng menu khi bấm vào overlay
  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header
      className={
        isDetailsPage
          ? "py-5 border-b border-b-gray-200 w-full bg-white"
          : "py-5 border-b border-b-gray-200 fixed w-full bg-white z-10 top-0"
      }
    >
      <div className="justify-start sm:justify-between container flex  items-center">
        <div className="flex flex-1 space-x-2 items-center">
          <div className="menu_table_mobile">
            <div
              className={`fixed z-50 w-[311px] h-screen top-0 left-0 bg-white transition-transform transform duration-300 ${
                menuOpen ? "translate-x-0" : "-translate-x-full"
              }`}
            >
              <div className="py-6 px-5">
                <ButtonOutline
                  content="Join Fiverr"
                  className="bg-black text-white !border-black py-2 px-7"
                />
                <div className="space-y-3 my-5">
                  <p>Sign in</p>
                  <DropdownHeader
                    className="w-full text-start flex items-center justify-between"
                    buttonContent="Browse categories"
                  />
                  <DropdownHeader
                    className="w-full text-start flex items-center justify-between"
                    buttonContent="Explore"
                  />
                  <DropdownHeader
                    className="w-full text-start flex items-center justify-between"
                    buttonContent="Fiverr Pro"
                  />
                </div>
                <div className="space-y-3">
                  <p>General</p>
                  <p>Home</p>
                  <DropdownHeader
                    className="w-full text-start flex items-center justify-between"
                    buttonContent="English"
                  />
                  <DropdownHeader
                    className="w-full text-start flex items-center justify-between"
                    buttonContent="$ USD"
                  />
                </div>
              </div>
            </div>
            {menuOpen && (
              <div
                onClick={closeMenu}
                className="bg-[#00000080] h-screen left-0 overflow-hidden fixed top-0 w-full z-40"
              ></div>
            )}
          </div>
          {width <= 768 ? (
            <MenuOutlined className="text-2xl mt-1" onClick={toggleMenu} />
          ) : null}
          <Link to={pathDefault.homePage}>
            <Icons.logo />
          </Link>
          <Dropdown
            menu={{
              items: itemListSearch,
              onMouseLeave: () => {
                setOpen(false);
              },
            }}
            open={open}
            trigger={["click"]}
          >
            <div className="w-full">
              <InputSearch
                onKeyDown={handleKeyDown}
                value={keyWord}
                handleClick={handleClickInputSearch}
                handleChange={handleChangeKeyWord}
                placeholder="What service are you looking for today?"
              />
            </div>
          </Dropdown>
        </div>
        <div className="space-x-1 flex">
          <div className="hidden lg:flex">
            <DropdownHeader buttonContent="Fiverr Pro" />
            <DropdownHeader buttonContent="Explore" />
            <ButtonGhost content="English" icon={<GlobalOutlined />} />
            <ButtonGhost content="Become a Seller" />
          </div>
          {user ? (
            <DropdownSearchResults
              buttonContent={user.name}
              groupedItems={groupedItems}
            />
          ) : (
            <>
              <ButtonGhost
                content="Sign in"
                onClick={() => {
                  navigate(pathDefault.signIn);
                }}
              />
              <ButtonOutline
                className="hidden sm:block"
                onClick={() => {
                  navigate(pathDefault.signUp);
                }}
                content="Join"
              />
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default HeaderTemplate;
