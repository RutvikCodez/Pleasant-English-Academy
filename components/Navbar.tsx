import Link from "next/link";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";
import Image from "next/image";
import MobileSidebar from "./Hamburger";

const NavbarComponent = () => {
  const data = [
    {
      name: "Features",
      path: "/features",
    },
    {
      name: "About",
      path: "/about",
    },
    {
      name: "Services",
      path: "/services",
    },
    {
      name: "Team",
      path: "/team",
    },
  ];
  return (
    <Navbar className="px-10 border-b border-white flex justify-between max-md:px-3">
      <NavbarBrand>
        <div className="font-semibold font-serif flex flex-col">
          <h2 className="text-3xl">PLEASANT</h2>
          <span className="text-md">ENGLISH ACADEMY</span>
        </div>
      </NavbarBrand>
      <NavbarContent className="hidden md:flex gap-4" justify="center">
        {data.map((e, i) => (
          <NavbarItem key={i}>
            <Link color="foreground" href={e.path} className="text-lg">
              {e.name}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
          <div className="md:hidden">
            <MobileSidebar data={data} />
          </div>
    </Navbar>
  );
};

export default NavbarComponent;
