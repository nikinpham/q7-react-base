import { useEffect, useState } from "react";
import ReactLogo from "../../../assets/react.svg";
import { Link } from "react-router-dom";
import "./NavHead.scss";

type TNavHead = {
  toggleSidebar: () => void;
  collapsed: boolean;
};

const NavHead = (props: TNavHead) => {
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth <= 1021);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1021);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      className={`nav-header bg-orange-500 flex items-center ${
        props.collapsed ? "collapsed" : ""
      }`}
    >
      <div className="flex flex-row items-center  flex-none header-left pl-3 nav-logo">
        <Link
          to="/"
          className="logo flex items-center duration-500 ease-in-out transition-all"
        >
          <img
            className={`${!props.collapsed ? "" : "ml-3"}`}
            src={ReactLogo}
            alt="Logo React"
          />

          <span
            className={` text-xl font-extrabold text-white ml-[10px] overflow-hidden  ${
              !props.collapsed ? "w-52 mb-2 " : "w-0"
            }`}
          >
            FoodDesK.
          </span>
        </Link>
      </div>
      {!isMobile && (
        <div
          className={`active-menu transition-all duration-300 ease-in-out rounded-sm absolute cursor-pointer ${
            !props.collapsed ? "left-60 z-50" : "left-20 z-50"
          }`}
          onClick={props.toggleSidebar}
        >
          <span className="line"> </span>
          <span className="line"> </span>
          <span className="line"> </span>
        </div>
      )}
    </div>
  );
};

export default NavHead;
