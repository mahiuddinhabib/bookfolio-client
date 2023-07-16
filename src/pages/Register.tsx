import { useRegisterUserMutation } from "@/redux/features/user/userApi";

const Register = () => {
  const data = {
    name: {
      firstName: "User",
      lastName: "Test",
    },
    email: "mail@testmail.com",
    password: "nopass",
  };
  const [postUser, { isLoading, isError, isSuccess }] =
    useRegisterUserMutation();

  const handlePost = () => {
    postUser({data});
  };
  console.log(isLoading, isError, isSuccess);
  return (
    <div>
      <button onClick={handlePost}>Post User</button>
    </div>
  );
};

export default Register;
