import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <div>
      <ul>
        <li>
          <Link href="/post/resume">resume</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
