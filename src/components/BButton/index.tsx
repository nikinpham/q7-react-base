import React, { FC, ReactElement, ReactNode } from "react";
import "./BButton.scss";

type PropsType = {
  children: ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  inverted?: boolean;
};

const BButton: FC<PropsType> = ({
  children,
  inverted,
  type,
  onClick,
  ...otherProps
}): ReactElement => {
  return (
    <button
      className={`${inverted ? "inverted" : ""}
       custom-button `}
      {...otherProps}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default BButton;
