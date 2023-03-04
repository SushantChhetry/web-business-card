import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="nav-wrapper">
      <Link href="/post/resume">Resume</Link>
      <Link href="/post/Contact">Contact</Link>
    </div>
  );
};

export default Navbar;
