import { useLoginUserMutation } from "@/redux/features/user/userApi";
import { toggledLogin } from "@/redux/features/user/userSlice";
import { useAppDispatch } from "@/redux/hook";
import React from "react";
import { toast } from "react-hot-toast/headless";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e:any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const [loginUser, { isSuccess }] = useLoginUserMutation();

  const handleSubmit = async (e:any) => {
    e.preventDefault();
    await loginUser({ data: formData });

    if (isSuccess) {
      toast.success("login successful");
      dispatch(toggledLogin(true));
      navigate("/");
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
