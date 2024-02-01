import React, { FC, ReactElement } from "react";
import "./Input.scss";

type FormInputProps = {
  label?: string;
  type: string;
  name?: string;
  value: string;
  required?: boolean;
  id?: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input: FC<FormInputProps> = ({
  label,
  type,
  name,
  value,
  required,
  id,
  handleChange,
}): ReactElement => {
  return (
    <div className="mb-4">
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
        className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-300"
      />
    </div>
  );
};
export default Input;
