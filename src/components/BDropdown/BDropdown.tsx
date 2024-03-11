import { useState, ReactNode } from "react";
import BButton from "../BButton/index";
import "./BDropdown.scss";

type TDropdownProps = {
  children?: ReactNode;
  options: string[];
  onSelect: (selectedOption: string) => void;
  dropdownOptions?: string;
  dropdownOption?: string;
  childrenLi?: ReactNode;
};

const BDropdown = (props: TDropdownProps) => {
  const {
    children,
    options,
    onSelect,
    dropdownOptions,
    dropdownOption,
    childrenLi,
  } = props;
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (option: string) => {
    setIsOpen(false);
    onSelect(option);
  };
  return (
    <div className="dropdown">
      {/* <button onClick={() => setIsOpen(!isOpen)}>{children}</button> */}
      <BButton children={children} onClick={() => setIsOpen(!isOpen)}></BButton>
      {isOpen && (
        <ul className={dropdownOptions}>
          {options.map((option) => (
            <li
              className={dropdownOption}
              key={option}
              onClick={() => handleSelect(option)}
            >
              {childrenLi}
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BDropdown;
