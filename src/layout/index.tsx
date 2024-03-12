import { ReactNode, useEffect, useState } from "react";
import Header from "./DefaultLayout/Header";
import NavHead from "./DefaultLayout/NavHead/NavHead.tsx";
import Sidebar from "./DefaultLayout/SideBar/SideBar.tsx";

type TLayout = {
  children: ReactNode;
};

const Layout = (props: TLayout) => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 1021) {
        setIsSidebarCollapsed(true);
      } else {
        setIsSidebarCollapsed(false);
      }
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    console.log("isSidebarCollapsed:", isSidebarCollapsed);
  }, [isSidebarCollapsed]);

  return (
    <div className="h-screen ">
      <div className="flex ">
        <NavHead toggleSidebar={toggleSidebar} collapsed={isSidebarCollapsed} />
        <Header />
      </div>
      <div className="bg-orange-500">
        <div className=" flex bg-white rounded-t-3xl transition-all ease-in-out duration-500">
          <Sidebar collapsed={isSidebarCollapsed} />
          <div className="container  mt-9 px-10 transition-all ease-in-out duration-500 ">
            {props.children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
