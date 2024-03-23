import { register } from "@/storage/auth/action/register";
import { useDispatch } from "react-redux";

const SignUpPage = () => {
  const dispatch = useDispatch();
  const USER = {
    fullname: "aDaxxaaaxxsd",
    email: "sadfghhj@taan.vn1a111",
    password: "4L&2DbMfqK28#E",
    password_confirm: "4L&2DbMfqK28#E",
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(register(USER));
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        {/* Form fields for email, password, etc. */}
        <button type="submit">Register</button>
      </form>
    </>
  );
};

export default SignUpPage;
