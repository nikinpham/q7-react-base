import React, { useState } from "react";
import BDropdown from "../BDropdown/BDropdown";
import "@fortawesome/fontawesome-svg-core/styles.css";
import "./Header.scss";

type THeaderProps = {
  // Props của Header (nếu có)
};

const Header = () => {
  const dropdownOptions = ["Option 1", "Option 2", "Option 3"];
  const [selectedOption, setSelectedOption] = useState<string>(
    dropdownOptions[0]
  );

  const handleDropdownSelect = (selectedOption: string) => {
    setSelectedOption(selectedOption);
    console.log(`Selected option: ${selectedOption}`);
  };
  return (
    <div className="header">
      <div className="header-content bg-orange-500 p-4 ">
        <div className="flex flex-nowrap justify-start items-center	">
          <div className="max-w-full pl-15 pr-15 block mb-0 mt-0">
            <div className="flex items-center	sm:justify-between justify-end">
              <div className="header-left flex items-center h-full">
                <div className="flex items-center">
                  <div className="header-bx flex bg-orange-400">
                    <BDropdown
                      options={dropdownOptions}
                      onSelect={handleDropdownSelect}
                      children={
                        <div className="flex justify-start bg-orange-400 text-white">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="w-5 h-5"
                          >
                            <path
                              fill-rule="evenodd"
                              d="m9.69 18.933.003.001C9.89 19.02 10 19 10 19s.11.02.308-.066l.002-.001.006-.003.018-.008a5.741 5.741 0 0 0 .281-.14c.186-.096.446-.24.757-.433.62-.384 1.445-.966 2.274-1.765C15.302 14.988 17 12.493 17 9A7 7 0 1 0 3 9c0 3.492 1.698 5.988 3.355 7.584a13.731 13.731 0 0 0 2.273 1.765 11.842 11.842 0 0 0 .976.544l.062.029.018.008.006.003ZM10 11.25a2.25 2.25 0 1 0 0-4.5 2.25 2.25 0 0 0 0 4.5Z"
                              clip-rule="evenodd"
                            />
                          </svg>

                          <span className="ml-1">{selectedOption}</span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="w-5 h-5 text-xs ml-20"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z"
                              clip-rule="evenodd"
                            />
                          </svg>
                        </div>
                      }
                    ></BDropdown>
                  </div>
                </div>
              </div>
              <div className="header-right"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
