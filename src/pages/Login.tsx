import { useLoginUserMutation } from "@/redux/features/user/userApi";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const [loginUser, { isLoading, isError, isSuccess }] = useLoginUserMutation();

  React.useEffect(() => {
    if (isSuccess) {
      // If login was successful, navigate to the homepage
      navigate("/");
    }
  }, [isSuccess, navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    loginUser({ data: formData });
  };

  console.log(isLoading, isError, isSuccess);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
      <p>
        Haven't an account yet?
        <Link to={"/register"}>Register Here</Link>
      </p>
    </div>
  );
};

export default Login;
