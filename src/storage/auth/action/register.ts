import { signUpService } from "@/services/auth/register";

export const register = async (user: {
  fullname: string;
  email: string;
  password: string;
  password_confirm: string;
}) => {
  try {
    const res = await signUpService(user);
    return res;
  } catch (error) {
    console.error(error);
  }
};
