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
        <Button>Get started</Button>
        <Nav.Toggle />
      </div>
      <Nav.Collapse>
        <Nav.Link active href="#">
          <p>Home</p>
        </Nav.Link>
        <Nav.Link href="#">About</Nav.Link>
        <Nav.Link href="#">Services</Nav.Link>
        <Nav.Link href="#">Pricing</Nav.Link>
        <Nav.Link href="#">Contact</Nav.Link>
      </Nav.Collapse>
    </Nav>
  );
};

export default Navbar;
