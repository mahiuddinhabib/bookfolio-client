"use client";
import { Navbar as Nav, Button } from "flowbite-react";
import reactIcon from "@/assets/react.svg";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <Nav fluid rounded>
      <Link to={"/"}>
        <Nav.Brand>
          <img
            alt="Bookfolio Logo"
            className="mr-3 h-6 sm:h-9"
            src={reactIcon}
          />
          <span className="self-center whitespace-nowrap text-3xl font-semibold dark:text-white">
            Bookfolio
          </span>
        </Nav.Brand>
      </Link>
      <div className="flex md:order-2">
        <Button>Login</Button>
        <Nav.Toggle />
      </div>
      <Nav.Collapse>
        <Link to={"/"}>
          <Nav.Link>Home</Nav.Link>
        </Link>
        <Link to={"/"}>
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
