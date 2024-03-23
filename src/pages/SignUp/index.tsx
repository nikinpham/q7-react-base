import { register } from "@/stores/actions/register";
import { AppDispatch, RootState } from "@/stores/store";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const SignUpPage = () => {
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();
  const { message } = useSelector((state: RootState) => state.messageReducer);

  const USER = {
    fullname: "Nouai Available",
    email: "demao@demox.com",
    password: "4L&2DbMfqK28#E",
    password_confirm: "4L&2DbMfqK28#E",
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(register(USER))
      .unwrap()
      .then((data) => {
        console.log("OKE");
        console.log(data);
        navigate("/sign-up-success");
      })
      .catch(() => {
        console.log("failed");
      });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <p>{message}</p>
        <button type="submit">Register</button>
      </form>
    </>
  );
};

export default SignUpPage;
