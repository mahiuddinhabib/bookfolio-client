import { useState } from "react";
import { useRegisterUserMutation } from "@/redux/features/user/userApi";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [postUser] = useRegisterUserMutation();
  const navigate = useNavigate();
  const handleInputChange = (e: any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const formattedData = {
      name: {
        firstName: formData.firstName,
        lastName: formData.lastName,
      },
      email: formData.email,
      password: formData.password,
    };

    try {
      const response: any = await postUser({ data: formattedData });

      if (response?.data?.success) {
        toast.custom(
          <div className="py-3 px-4 rounded-lg bg-gray-300">
            Registration successful <br /> Now{" "}
            <span className="font-extrabold">login</span> to proceed
          </div>
        );
        navigate("/");
      } else {
        toast.error(
          "Registration failed. Please check your details and try again."
        );
        console.log(response);
      }
    } catch (error) {
      console.log(error);
      toast.error(
        "An error occurred during registration. Please try again later."
      );
    }
  };

  return (
    <div className="mb-10">
      <h1 className="text-2xl text-center mb-8 font-medium">Please Register</h1>
      <form onSubmit={handleSubmit} className="max-w-lg mx-6 md:mx-auto">
        <label className="block font-medium text-gray-700">
          First Name:
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-lg"
          />
        </label>
        <br />
        <label className="block font-medium text-gray-700">
          Last Name:
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
            className="w-full px-4 py-2 border rounded-lg"
          />
        </label>
        <br />
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
            Register
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
