import Link from "next/link";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import MobileSidebar from "./Hamburger";
import { navbarData } from "@/utils/getData";

const NavbarComponent = () => {
  return (
    <Navbar className="px-10 border-b border-white flex justify-between max-md:px-3">
      <NavbarBrand>
        <div className="font-semibold font-serif flex flex-col">
          <h2 className="text-3xl">PLEASANT</h2>
          <span className="text-md">ENGLISH ACADEMY</span>
        </div>
      </NavbarBrand>
      <NavbarContent className="hidden md:flex gap-4" justify="center">
        {navbarData.map((e, i) => (
          <NavbarItem key={i}>
            <Link color="foreground" href={e.path} className="text-lg">
              {e.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
          <div className="md:hidden">
            <MobileSidebar data={navbarData} />
          </div>
    </Navbar>
  );
};

export default NavbarComponent;
