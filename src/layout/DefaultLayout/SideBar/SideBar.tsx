import PerfectScrollbar from "react-perfect-scrollbar";
import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

import { MenuList } from "./Menu";
import "./SideBar.scss";

type TSideBar = {
  collapsed: boolean;
};
const SideBar = (props: TSideBar) => {
  // const { expanded } = useContext(SidebarContext);
  const [expanded, setExpanded] = useState<boolean>(!props.collapsed);

  const [state, setState] = useState<{ active: string; activeSubmenu: string }>(
    { active: "", activeSubmenu: "" }
  );
  useEffect(() => {
    setExpanded(!props.collapsed);
  }, [props.collapsed]);
  const handleMenuActive = (status: string) => {
    setState((prevState) => ({
      ...prevState,
      active: prevState.active === status ? "" : status,
    }));
  };

  const handleSubmenuActive = (status: string) => {
    setState((prevState) => ({
      ...prevState,
      activeSubmenu: prevState.activeSubmenu === status ? "" : status,
    }));
  };

  const path = window.location.pathname;

  return (
    <div
      className={`sidebar bg-white	rounded-tl-3xl ${
        props.collapsed ? "collapsed" : ""
      }`}
    >
      <PerfectScrollbar className="dlabnav-scroll p-[0.9375rem 1.25rem]">
        <ul className="metismenu " id="menu">
          {MenuList.map((data, index) => {
            let menuClass = data.classsChange;
            if (menuClass == "menu-title") {
              return (
                <li
                  className={`overflow-hidden transition-all ${
                    expanded
                      ? "menu-title text-sm text-orange-500 px-2 mx-6 my-6  "
                      : "w-0 h-0 "
                  }`}
                  key={index}
                >
                  <span>{data.title}</span>
                </li>
              );
            } else {
              return (
                <li
                  className={`relative flex flex-col flex-wrap items-center font-medium rounded-md cursor-pointer transition-colors group ${
                    props.collapsed ? "collapsed" : ""
                  }`}
                  key={index}
                >
                  {data.content && data.content.length > 0 ? (
                    <Link
                      to="#"
                      className={`flex py-[0.8rem] px-[1.1rem]  w-[calc(100%-2.5rem)] text-sm mx-5 item-center rounded-[0.5rem] ${
                        state.active === data.title ? "bg-orange-500" : ""
                      }`}
                      onClick={() => {
                        handleMenuActive(data.title);
                      }}
                    >
                      <span
                        className={`text-gray-500 mr-3 ${
                          state.active === data.title ? "text-white" : ""
                        } ${index === 1 && !expanded ? "mt-10" : ""}`}
                      >
                        {data.iconStyle}
                      </span>

                      <span
                        className={`overflow-hidden transition-all ${
                          expanded ? "w-52 mb-2 " : "w-0"
                        }`}
                      >
                        <span
                          className={`text-gray-500  transition-colors ${
                            state.active === data.title
                              ? "text-white"
                              : "hover:text-orange-500"
                          }`}
                        >
                          {data.title}
                        </span>
                      </span>
                    </Link>
                  ) : (
                    <NavLink
                      to={data.to || "#"}
                      className={`flex nav-link py-[0.8rem] px-[1.1rem] ml-5 w-full text-sm `}
                    >
                      <span className="text-gray-500 mr-3">
                        {data.iconStyle}
                      </span>

                      <span
                        className={`overflow-hidden transition-all ${
                          expanded ? "w-52 mb-2" : "w-0"
                        }`}
                      >
                        <span className="text-gray-500 hover:text-orange-500 transition-colors">
                          {data.title}
                        </span>
                      </span>
                    </NavLink>
                  )}
                  <ul
                    className={`transition-all ease-in-out duration-500 ${
                      state.active === data.title
                        ? "max-h-screen transform -translate-y-0 opacity-100 "
                        : "max-h-0 overflow-hidden "
                    }`}
                  >
                    {data.content &&
                      data.content.map((submenu, subIndex) => (
                        <li
                          key={subIndex}
                          className={` flex flex-col  submenu-text transition-all duration-300 ease-in-out${
                            state.activeSubmenu === submenu.title
                              ? "mm-active"
                              : ""
                          }`}
                        >
                          {submenu.content && submenu.content.length > 0 ? (
                            <NavLink
                              to={submenu.to || ""}
                              onClick={() => {
                                handleSubmenuActive(submenu.title);
                              }}
                            >
                              <span className="line w-0.3 h-0.1 bg-fc8019 block absolute  -left-6 top-1/2"></span>
                              <span className="submenu-title text-gray-500 over:text-orange-500 transition-colors">
                                {submenu.title}
                              </span>
                            </NavLink>
                          ) : (
                            <Link to={submenu.to || ""}>
                              <span className="line w-0.3 h-0.1 bg-fc8019 block absolute-left-6 top-1/2"></span>
                              <span className="submenu-title text-gray-500 hover:text-orange-500 transition-colors">
                                {submenu.title}
                              </span>
                            </Link>
                          )}
                          <ul
                            className={`transition-all duration-500 ease-in-out ${
                              state.activeSubmenu === submenu.title
                                ? "max-h-screen overflow-visible "
                                : "max-h-0 overflow-hidden "
                            }`}
                          >
                            {submenu.content &&
                              submenu.content.map((subsubmenu, subsubIndex) => (
                                <li key={subsubIndex}>
                                  <Link
                                    className={`${
                                      path === subsubmenu.to ? "mm-active" : ""
                                    }`}
                                    to={subsubmenu.to || ""}
                                  >
                                    <span className="line w-0.3 h-0.1 bg-fc8019 block absolute-left-6"></span>
                                    <span className="text-gray-500 hover:text-orange-500 transition-colors">
                                      {subsubmenu.title}
                                    </span>
                                  </Link>
                                </li>
                              ))}
                          </ul>
                        </li>
                      ))}
                  </ul>
                </li>
              );
            }
          })}
        </ul>
      </PerfectScrollbar>
    </div>
  );
};
export default SideBar;
