import { navLinks } from "@/lib/data";
import Link from "next/link";
import React from "react";

const NavLinks = () => {
  return (
    <ul className="lg:flex hidden items-center gap-7 text-white font-medium">
      {navLinks.map((navLink) => (
        <li key={navLink.title}>
          <Link href={navLink.link}>{navLink.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;
