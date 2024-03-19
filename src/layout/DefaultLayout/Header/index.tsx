import React, { useEffect, useState } from "react";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "./Header.scss";
import { LocationIcon, SearchIcon, ChevronDownIcon } from "@/assets/svg";
import { Input, BDropdown } from "@/components";
import {
  User,
  Mail,
  SquarePen,
  MessageSquare,
  MailCheck,
  Settings,
  LogOut,
  ChevronRight,
} from "lucide-react";

const Header = () => {
  const dropdownOptions = ["Bangladesh", "India", "Option 3"];
  const options = [
    {
      to: "/profile",
      icon: <User />,
      title: "Profile",
    },
    {
      to: "/inbox",
      icon: <Mail />,
      title: "Inbox",
    },
    {
      to: "/edit-profile",
      icon: <SquarePen />,
      title: "Edit Profile",
    },
    {
      to: "/message",
      icon: <MessageSquare />,
      title: "Message",
    },
    {
      to: "/notification",
      icon: <MailCheck />,
      title: "Notification",
    },
    {
      to: "/setting",
      icon: <Settings />,
      title: "Settings",
    },
    {
      to: "/logout",
      icon: <LogOut />,
      title: "Logout",
    },
  ];
  const [selectedOption, setSelectedOption] = useState<string>(
    dropdownOptions[0]
  );
  const [selectedUser, setSelectedUser] = useState<string>();
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth <= 1021);
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 1021);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const [inputValue, setInputValue] = useState("");
  const handleDropdownSelect = (selectedOption: string) => {
    setSelectedOption(selectedOption);
    console.log(`Selected option: ${selectedOption}`);
  };
  const handleDropdownSelectUser = (selectedUser: string) => {
    setSelectedUser(selectedUser);
    console.log(`Selected option: ${selectedUser}`);
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };
  return (
    <div className="header w-full ">
      <div className=" bg-orange-500 flex  justify-between items-center  p-4 h-[75px] pb-[-30px] ">
        <div className=" flex items-center h-full ">
          <div className="flex items-center">
            <div className=" header-bx flex bg-[#fc8e32] rounded-[0.5rem] ml-[27px] my-[0.7rem] items-center border border-[#fd9c4b] mx-2 h-[3.438rem]">
              <BDropdown
                options={dropdownOptions}
                onSelect={handleDropdownSelect}
                dropdownOptions="w-[220px] px-3 py-2 rounded-md mt-[20px] absolute overflow-hidden z-10"
                dropdownOption="flex text-gray-400 hover:text-orange-500"
                children={
                  <div className="flex justify-start bg-orange-400 text-white w-[200px]">
                    <LocationIcon></LocationIcon>

                    <span className="ml-1 w-[100px] text-left">
                      {selectedOption}
                    </span>
                    <ChevronDownIcon></ChevronDownIcon>
                  </div>
                }
                iconDropdown={<LocationIcon></LocationIcon>}
              ></BDropdown>
              <div className="h-6 border-l-2 border-white mx-2"></div>
              <div className="flex items-center text-white ">
                <span>
                  <SearchIcon></SearchIcon>
                </span>
                <Input
                  type="text"
                  value={inputValue}
                  handleChange={handleChange}
                  placeholder="What do you want eat today"
                  className={`ml-5 ${
                    isMobile ? "hidden" : "block"
                  } bg-[#fc8e32] placeholder-white focus:outline-none w-full`}
                ></Input>
              </div>
            </div>
          </div>
        </div>
        <div className="header-right">
          <BDropdown
            options={options.map((option) => option.title)}
            onSelect={handleDropdownSelectUser}
            children={
              <div className="px-[10px] py-[5px] bg-[#FFFFFF1A] rounded-lg cursor-pointer">
                <div className="flex items-center text-[#fff] ">
                  <img
                    src="https://fooddesk.dexignlab.com/react/demo/static/media/pic-1.6064ae2bfa1253995744.png"
                    alt="avatar"
                    className="border border-2 border-bold border-[#fff] rounded-full h-[38px] w-[38px]"
                    id={selectedUser}
                  ></img>
                  {!isMobile && (
                    <div className="flex items-center">
                      <div>
                        <h6 className="font-medium ml-[7px] ">Joshua</h6>
                      </div>
                      <ChevronRight
                        size={20}
                        className="ml-[14px]"
                      ></ChevronRight>
                    </div>
                  )}
                </div>
              </div>
            }
            dropdownOptions="w-full px-3 py-2 rounded-md mt-[20px] absolute overflow-hidden z-10"
          ></BDropdown>
        </div>
      </div>
    </div>
  );
};

export default Header;
