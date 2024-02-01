import { useState, ReactNode } from "react";
import BButton from "../BButton/index";
import "./BDropdown.scss";

type TDropdownProps = {
  children: ReactNode;
  options: string[];
  onSelect: (selectedOption: string) => void;
};

const BDropdown = (props: TDropdownProps) => {
  const { children, options, onSelect } = props;
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
        <ul>
          {options.map((option) => (
            <span key={option} onClick={() => handleSelect(option)}>
              {option}
            </span>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BDropdown;
