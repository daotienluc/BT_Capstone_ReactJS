// custom hook lấy thông tin về kích thước của viewpost
import React from "react";
import { useEffect } from "react";
import { useState } from "react";

const useViewPort = () => {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleWindowsResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleWindowsResize);
    return () => window.removeEventListener("resize", handleWindowsResize);
  }, []);
  return { width };
};

export default useViewPort;
