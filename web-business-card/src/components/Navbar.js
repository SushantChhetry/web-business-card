import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <ul>
        <li>
          <Link href="/post/resume">Resume</Link>
        </li>
        <li>
          <Link href="/post/Contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
