import Image from "next/image"
import justinLogo from "../assets/jtag.png";
import React from "react";
import { FloatingNav } from "../components/ui/floating-navbar";

const navItems = [
  {
    name: "<Justin>",
    link: "/",
  },
  {
    name: "About",
    link: "/about",
  },
  {
    name: "Projects",
    link: "/projects",
  },
];

export default function Header() {
  return (
    <div className="relative  w-full">
      <FloatingNav navItems={navItems} />
    </div>
  );
}