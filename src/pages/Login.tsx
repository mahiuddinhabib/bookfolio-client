import { useLoginUserMutation } from "@/redux/features/user/userApi";

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
