import axiosClient from "@/configs/axios";
import { ENDPOINT } from "@/constants";

export const register = (user: {
  fullname: string;
  email: string;
  password: string;
  password_confirm: string;
}) => {
  const formData = new FormData();
  const { fullname, email, password, password_confirm } = user;
  const userDetails = {
    fullname,
    email,
    password,
    password_confirm,
    source: "frontend",
  };

  Object.entries(userDetails).forEach(([key, value]) => {
    formData.append(key, value);
  });
  return axiosClient.post(ENDPOINT.REGISTER, formData);
};
