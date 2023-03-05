import React from "react";
import Link from "next/link";
import Footer from "./Footer";
import { BiHomeAlt2 } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="nav-wrapper">
      <Link href="/" className="home">
        Home
      </Link>
      <Link href="/post/Contact" className="contact">
        Contact Me!
      </Link>
      <Link href="/post/About" className="about">
        About
      </Link>
    </div>
  );
};

export default Navbar;
