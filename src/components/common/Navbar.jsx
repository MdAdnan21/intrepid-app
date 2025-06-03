import React from "react";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/src/components/ui/menubar"; // Assuming this path is correct for your shadcn/ui setup
import { HiOutlineSearch } from "react-icons/hi";
import { FaRegHeart } from "react-icons/fa";
import { FaRegCircleUser } from "react-icons/fa6";
import { MdOutlinePhone } from "react-icons/md";

const Navbar = () => {
  return (
    // Added 'fixed', 'top-0', 'w-full', and 'z-50' to make the navbar sticky at the top
    // The 'z-50' ensures it stays on top of other content.
    <div className="fixed top-0 left-0 w-full border-b border-gray-300 bg-background px-6 py-3 z-50 shadow-sm">
      <div className="flex items-center justify-between gap-6 max-w-7xl mx-auto">
        {" "}
        {/* Added max-w-7xl and mx-auto for centering */}
        {/* Logo and Navigation Menu */}
        <div className="flex items-center gap-6">
          <img src="/images/logo.svg" alt="Logo" className="h-8 w-32" />

          {/* Navigation Menus with Dropdowns */}
          <Menubar className="bg-transparent border-none shadow-none px-0">
            {/* Destinations Menu */}
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

            {/* Way to Travel Menu */}
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

            {/* Deals Menu (can add content if needed) */}
            <MenubarMenu>
              <MenubarTrigger className="text-foreground hover:text-primary">
                Deals
              </MenubarTrigger>
              {/* You can add MenubarContent here if 'Deals' needs a dropdown */}
            </MenubarMenu>

            {/* About Menu (can add content if needed) */}
            <MenubarMenu>
              <MenubarTrigger className="text-foreground hover:text-primary">
                About
              </MenubarTrigger>
              {/* You can add MenubarContent here if 'About' needs a dropdown */}
            </MenubarMenu>
          </Menubar>
        </div>
        {/* Search + Icons - Improved alignment and spacing */}
        <div className="flex items-center gap-6 bg-none">
          {" "}
          {/* 'items-center' ensures vertical alignment */}
          {/* Search Input */}
          <div className="relative w-full max-w-xs">
            {" "}
            {/* Changed w-64 to w-full max-w-xs for responsiveness */}
            <input
              type="text"
              placeholder="Search"
              className="w-full rounded-md border border-input bg-background pl-9 pr-3 py-1.5 text-sm text-foreground placeholder:text-muted outline-none focus:ring-2 focus:ring-ring"
            />
            <HiOutlineSearch
              className="absolute left-2.5 top-1/2 -translate-y-1/2 text-muted"
              size={18}
            />
          </div>
          {/* Icons */}
          <FaRegHeart
            size={22}
            className="text-muted hover:text-primary cursor-pointer"
          />
          <FaRegCircleUser size={22} className="text-muted  cursor-pointer" />
          <MdOutlinePhone
            size={22}
            className="text-muted hover:text-primary cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
