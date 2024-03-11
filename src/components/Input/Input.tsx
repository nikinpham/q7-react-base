import React, { FC, ReactElement } from "react";
import "./Input.scss";

type FormInputProps = {
  className?: string;
  label?: string;
  type: string;
  name?: string;
  value: string;
  required?: boolean;
  id?: string;
  placeholder?: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input: FC<FormInputProps> = ({
  label,
  type,
  name,
  value,
  required,
  id,
  placeholder,
  className,
  handleChange,
}): ReactElement => {
  return (
    <div className="">
      <label htmlFor={name} className="block text-sm font-medium text-gray-600">
        {label}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={handleChange}
        required={required}
        className={className}
        placeholder={placeholder}
      />
    </div>
  );
};
export default Input;
