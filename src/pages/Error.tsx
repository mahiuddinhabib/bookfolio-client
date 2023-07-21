/* import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Error = ({ messages }) => {
  let message;
  if (messages[0] === "jwt malformed") {
    message = (
      <Link className="flex justify-center items-center text-2xl underline" to={"/login"}>
        Click here to login first
      </Link>
    );
  }
  else{
    message = (
      <p className="flex justify-center items-center text-2xl">{messages[0]}</p>
    );
  }
  return (
    <div>
      {message}
    </div>
  );
};

export default Error;
 */