import { useState } from "react";
import { useRegisterUserMutation } from "@/redux/features/user/userApi";

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [postUser, { isLoading, isError, isSuccess }] =
    useRegisterUserMutation();

  const handleInputChange = (e:any) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e:any) => {
    e.preventDefault();
    const formattedData = {
      name:{
        firstName: formData.firstName,
        lastName: formData.lastName
      },
      email: formData.email,
      password: formData.password
    }
    postUser({ data: formattedData })
      .then((data) => console.log(data))
      .catch((err) => console.log(err));
  };

  console.log(isLoading, isError, isSuccess);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          First Name:
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
          />
        </label>
        <br />
        <label>
          Last Name:
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            onChange={handleInputChange}
          />
        </label>
        <br />
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
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;

/* import { useRegisterUserMutation } from "@/redux/features/user/userApi";

const Register = () => {
  const data = {
    name: {
      firstName: "User",
      lastName: "Test",
    },
    email: "mail@mmail.com",
    password: "nopass",
  };
  const [postUser, { isLoading, isError, isSuccess }] =
    useRegisterUserMutation();

  const handlePost = () => {
    postUser({ data })
      .then((data) => console.log(data))
      .then((err) => console.log(err));
  };
  console.log(isLoading, isError, isSuccess);
  return (
    <div>
      <button onClick={handlePost}>Post User</button>
    </div>
  );
};

export default Register;

 */
