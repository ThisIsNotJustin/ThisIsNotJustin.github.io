import React from "react";
import { FloatingNav } from "../components/ui/floating-navbar";

const navItems = [
  {
    label: "Home",
    href: "/#info",
  },
  {
    label: "About",
    href: "/#about",
  },
  {
    label: "Projects",
    href: "/#projects",
  },
  {
    label: "Contact",
    href: "/#contact",
  },
];

export default function Header() {
  return (
    <div className="relative  w-full">
      <FloatingNav navItems={navItems} />
    </div>
  );
}