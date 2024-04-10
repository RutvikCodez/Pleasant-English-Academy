"use client";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import React, { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import Link from "next/link";

type props = {
  data: {
    name: string;
    path: string;
  }[];
};

const MobileSidebar = ({ data, ...props }: props) => {
  const pathname = usePathname();
  const [open, setopen] = useState(false);
  useEffect(() => {
    setopen(false);
  }, [pathname]);
  return (
    <Drawer direction="left" open={open} onOpenChange={setopen} {...props}>
      <DrawerTrigger>
        <div className="lg:bg-accent-11 mt-2 flex h-fit w-fit flex-col items-center justify-center border-0 px-2">
          <Menu className="w-12 h-12" />
        </div>
      </DrawerTrigger>
      <DrawerContent className="flex min-h-screen justify-center bg-accent-1 p-4 text-accent-3">
        <span
          className="ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute right-4 top-4 rounded-accent-4 bg-[#F3F3F3] p-1 text-black opacity-70 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:pointer-events-none"
          onClick={() => {
            setopen(false);
          }}
        >
          <X className="h-4 w-4" />
        </span>
        <ul className="h-screen flex flex-col justify-evenly">
          {data.map((e, i) => {
            return (
              <li key={i}>
                <Link color="foreground" href={e.path} className="text-xl font-semibold flex gap-5">
                  {e.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </DrawerContent>
    </Drawer>
  );
};

export default MobileSidebar;
