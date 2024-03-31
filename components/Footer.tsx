import { MapPin } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <footer className="mt-12 flex flex-col">
      <div className="flex w-full justify-between px-16 py-3 max-md:flex-col max-md:gap-5 max-md:items-center">
        <div className="font-semibold font-serif flex flex-col">
          <h2 className="text-3xl">PLEASANT</h2>
          <span className="text-md">ENGLISH ACADEMY</span>
        </div>
        <div className="flex flex-col gap-2 justify-center items-center">
          <div className="rounded-full border p-1 w-min">
            <MapPin className="w-6 h-6" />
          </div>
          <span> 285 to 290 first floor,</span>
          <span>sona complex kansa road,</span>
          <span>on panjab national bank,</span>
          <span>Visnagar 384315</span>
        </div>
      </div>
      <p className="text-gray-500 text-sm text-center sm:text-left bg-gray-950 py-3 px-16 border-t">
        © 2023 Plesant English Academy —<span> @all rights reserved</span>
      </p>
    </footer>
  );
};

export default Footer;
