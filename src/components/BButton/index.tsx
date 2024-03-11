import { ReactNode } from "react";
import "./BButton.scss";

type TPropsType = {
  children: ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  inverted?: boolean;
  className?: string;
};

const BButton = (props: TPropsType) => {
  const { children, onClick, type, className } = props;
  return (
    <button className={className} type={type} onClick={onClick}>
      {children}
    </button>
  );
};

export default BButton;
