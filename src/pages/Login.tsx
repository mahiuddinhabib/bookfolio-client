import { useState } from "react";
import { useLoginUserMutation } from "@/redux/features/user/userApi";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loginUser, { isLoading, isError, isSuccess }] = useLoginUserMutation();

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    loginUser({ data: formData }).then((data) => console.log(data));
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
    </div>
  );
};

export default Login;

/* import { useLoginUserMutation } from "@/redux/features/user/userApi";

const Login = () => {
  const data = {
    email: "mail@fmail.com",
    password: "nopass",
  };
  const [loginUser, { isLoading, isError, isSuccess }] =
    useLoginUserMutation();

  const handleLogin = () => {
    loginUser({ data });
  };
  console.log(isLoading, isError, isSuccess);
  return (
    <div>
      <button onClick={handleLogin}>Login User</button>
    </div>
  );
};

export default Login;
 */
