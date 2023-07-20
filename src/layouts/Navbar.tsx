import React from "react";
import { Navbar as Nav } from "flowbite-react";
import { Link, useNavigate } from "react-router-dom";
import bookCover from "@/assets/bookCover.png";
import MyButton from "@/components/Button";

const Navbar = () => {
  const [userId, setUserId] = React.useState(""); // Use React.useState instead of useState

  React.useEffect(() => {
    const storedUserId = localStorage.getItem("id");
    if (storedUserId) {
      setUserId(storedUserId);
    }
  }, []);

  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("id");
    setUserId(""); // Update userId state to empty after logout
    navigate("/");
  };

  return (
    <Nav fluid rounded className="bg-gray-100">
      <Link to={"/"}>
        <Nav.Brand>
          <img
            alt="Bookfolio Logo"
            className="mr-3 h-6 sm:h-9"
            src={bookCover}
          />
          <span className="self-center whitespace-nowrap text-3xl font-semibold dark:text-white">
            Bookfolio
          </span>
        </Nav.Brand>
      </Link>
      <div className="flex md:order-2">
        {!userId ? (
          <MyButton onClick={handleLogin}>Login</MyButton>
        ) : (
          <MyButton onClick={handleLogout}>Logout</MyButton>
        )}
        <Nav.Toggle />
      </div>
      <Nav.Collapse>
        <Link to={"/"}>
          <Nav.Link>Home</Nav.Link>
        </Link>
        <Link to={"/all-books"}>
          <Nav.Link>All Books</Nav.Link>
        </Link>
        <Link to={"/"}>
          <Nav.Link>About</Nav.Link>
        </Link>
      </Nav.Collapse>
    </Nav>
  );
};

export default Navbar;
