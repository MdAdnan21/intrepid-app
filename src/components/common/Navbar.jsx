import React from "react";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/src/components/ui/menubar";
import { HiOutlineSearch } from "react-icons/hi";
import { FaRegHeart } from "react-icons/fa";
import { FaRegCircleUser } from "react-icons/fa6";
import { MdOutlinePhone } from "react-icons/md";

const Navbar = () => {
  return (
    <div className="fixed top-0 left-0 w-full border-b border-gray-300 bg-background px-6 py-3 z-50 shadow-sm">
      <div className="flex items-center justify-between gap-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-6">
          <img src="/images/logo.svg" alt="Logo" className="h-8 w-32" />

          <Menubar className="bg-transparent border-none shadow-none px-0">
            <MenubarMenu>
              <MenubarTrigger className="text-foreground hover:text-primary">
                Destinations
              </MenubarTrigger>
              <MenubarContent>
                <MenubarItem>Europe</MenubarItem>
                <MenubarItem>Asia</MenubarItem>
                <MenubarItem>Africa</MenubarItem>
                <MenubarSeparator />
                <MenubarItem>North America</MenubarItem>
                <MenubarItem>South America</MenubarItem>
              </MenubarContent>
            </MenubarMenu>

            <MenubarMenu>
              <MenubarTrigger className="text-foreground hover:text-primary">
                Way to travel
              </MenubarTrigger>
              <MenubarContent>
                <MenubarItem>Group Tours</MenubarItem>
                <MenubarItem>Private Trips</MenubarItem>
                <MenubarItem>Adventure Travel</MenubarItem>
                <MenubarItem>Cultural Journeys</MenubarItem>
                <MenubarItem>Family Vacations</MenubarItem>
              </MenubarContent>
            </MenubarMenu>

            <MenubarMenu>
              <MenubarTrigger className="text-foreground hover:text-primary">
                Deals
              </MenubarTrigger>
            </MenubarMenu>

            <MenubarMenu>
              <MenubarTrigger className="text-foreground hover:text-primary">
                About
              </MenubarTrigger>
            </MenubarMenu>
          </Menubar>
        </div>
        <div className="flex items-center gap-6">
          {" "}
          <div className="relative w-full max-w-xs text-black">
            {" "}
            <input
              type="text"
              placeholder="Search"
              className="w-full rounded-md border-2 border-input bg-background pl-9 pr-3 py-1.5 text-sm text-foreground placeholder:text-muted outline-none focus:ring-2 focus:ring-ring"
            />
            <HiOutlineSearch
              className="absolute left-2.5 top-1/2 -translate-y-1/2 text-black"
              size={18}
            />
          </div>
          <FaRegHeart
            size={26}
            className="text-black hover:text-primary cursor-pointer"
          />
          <FaRegCircleUser size={26} className="text-black  cursor-pointer" />
          <MdOutlinePhone
            size={26}
            className="text-black hover:text-primary cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
