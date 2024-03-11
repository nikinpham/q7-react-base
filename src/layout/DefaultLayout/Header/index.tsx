import React, { useState } from "react";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "./Header.scss";
import { LocationIcon, SearchIcon, ChevronDownIcon } from "@/assets/svg";
import { Input, BDropdown } from "@/components";

const Header = () => {
  const dropdownOptions = ["Bangladesh", "India", "Option 3"];
  const [selectedOption, setSelectedOption] = useState<string>(
    dropdownOptions[0]
  );
  const [inputValue, setInputValue] = useState("");
  const handleDropdownSelect = (selectedOption: string) => {
    setSelectedOption(selectedOption);
    console.log(`Selected option: ${selectedOption}`);
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };
  return (
    <div className="header w-full">
      <div className="header-content bg-orange-500 flex items-center p-4 h-[75px] pb-[-30px] ">
        <div>
          <div className="header-left flex items-center h-[60px]">
            <div className="relative w-full">
              <div className="flex bg-orange-400 rounded-[0.5rem] ml-[27px] w-full items-center border border-orange-300 mx-2 h-[3.438rem]">
                <BDropdown
                  options={dropdownOptions}
                  onSelect={handleDropdownSelect}
                  dropdownOptions="w-[220px] px-3 py-2 rounded-md mt-[20px]"
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
                  childrenLi={<LocationIcon></LocationIcon>}
                ></BDropdown>
                <div className="h-6 border-l-2 border-white mx-2"></div>
                <div className="flex items-center text-white w-full ">
                  <span>
                    <SearchIcon></SearchIcon>
                  </span>
                  <Input
                    type="text"
                    value={inputValue}
                    handleChange={handleChange}
                    placeholder="What do you want eat today"
                    className="ml-5 bg-orange-400 placeholder-white focus:outline-none w-[432px]"
                  ></Input>
                </div>
              </div>
            </div>
          </div>
          <div className="header-right"></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
