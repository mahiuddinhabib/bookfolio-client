import { useLoginUserMutation } from "@/redux/features/user/userApi";
import { setUserId, toggledLogin } from "@/redux/features/user/userSlice";
import { useAppDispatch } from "@/redux/hook";
import React from "react";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const [loginUser] =
    useLoginUserMutation();
/* 
  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const response: any = await loginUser({ data: formData });

    if (isSuccess) {
      toast.success("login successful");
      dispatch(setUserId(response?.data?.data?.id));
      dispatch(toggledLogin(true));
      navigate("/");
    }
    if (isLoading) {
      toast.loading("please wait a moment..!");
    }
    if (isError) {
      console.log(error);
      toast.error(`${error?.data?.message}`);
    }
  };
 */

    const handleSubmit = async (e: any) => {
      e.preventDefault();
      // toast.loading("please wait a moment..!"); // Show loading toast before making the API call

      try {
        const response: any = await loginUser({ data: formData });
        if (response?.data?.success) {
          toast.success("Login successful");
          dispatch(setUserId(response.data.data.id));
          dispatch(toggledLogin(true));
          navigate("/");
        } else {
          toast.error("Login failed. Please check your credentials.");
        }
      } catch (error) {
        console.log(error);
        toast.error("An error occurred during login. Please try again later.");
      }
    };
  return (
    <div className="mt-4 mb-10">
      <h1 className="text-2xl text-center my-8 font-medium">Please Login</h1>
      <form onSubmit={handleSubmit} className="max-w-lg mx-6 md:mx-auto">
        <label className="block font-medium text-gray-700">
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-lg"
          />
        </label>
        <br />
        <label className="block font-medium text-gray-700">
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-lg"
          />
        </label>
        <br />
        <div className="text-center">
          <button
            type="submit"
            className="bg-gray-400 px-3 py-2 rounded-lg hover:bg-gray-500 transition-all duration-200 focus:outline-none active:transform active:scale-95"
          >
            Login
          </button>
        </div>
      </form>
      <p className="text-center">
        Haven't an account yet?
        <Link to={"/register"} className="underline">
          {" "}
          Register Here
        </Link>
      </p>
    </div>
  );
};

export default Login;
