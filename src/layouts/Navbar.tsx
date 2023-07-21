import React from "react";
import { Navbar as Nav } from "flowbite-react";
import { Link, useNavigate } from "react-router-dom";
import bookCover from "@/assets/bookCover.png";
import MyButton from "@/components/Button";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { toggledLogin } from "@/redux/features/user/userSlice";

const Navbar = () => {
  const dispatch = useAppDispatch();
  const isLoggedIn = useAppSelector((state) => state.user.isLoggedIn);

  React.useEffect(() => {
    const storedUserId = localStorage.getItem("id");
    if (storedUserId) {
      dispatch(toggledLogin(true));
    }
  }, [dispatch]);

  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

  const handleLogout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("id");
    dispatch(toggledLogin(false))
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
        {!isLoggedIn ? (
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
        <Link to={"/add-book"}>
          <Nav.Link>Add New Book</Nav.Link>
        </Link>
        <Link to={"/wish-list"}>
          <Nav.Link>Wishlist</Nav.Link>
        </Link>
        <Link to={"/to-read"}>
          <Nav.Link>To Read</Nav.Link>
        </Link>
      </Nav.Collapse>
    </Nav>
  );
};

export default Navbar;
