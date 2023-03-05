import React from "react";
import Link from "next/link";
import Footer from "./Footer";

const Navbar = () => {
  return (
    <div className="nav-wrapper">
      <Link href="/" className="home">
        Home
      </Link>
      <Link href="/post/Contact" className="contact">
        Contact Me!
      </Link>
    </div>
  );
};

export default Navbar;
