import React from "react";
import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
} from "@/src/components/ui/menubar"; // Assuming this path is correct for your shadcn/ui setup

const TouristNavbar = ({ activeSection }) => {
  // Define the menu items with their IDs (matching section IDs) and labels
  const menuItems = [
    { id: "overview", label: "Overview" },
    { id: "traveldeals", label: "Travel Deals" },
    { id: "ourtrips", label: "Our Trips" },
    { id: "tripreviews", label: "Trip Reviews" },
    { id: "articlecarousel", label: "Articles" }, // Changed from ArticleCarousel to Articles for brevity in nav
    { id: "glancetrips", label: "Glance Trips" },
    { id: "faqs", label: "FAQS" },
    { id: "video", label: "Video" },
  ];

  return (
    // This div makes the navbar fixed at the top, just below the main Navbar.
    // 'top-16' assumes the main Navbar has a height of 64px (h-16).
    // 'w-full' ensures it spans the full width.
    // 'z-40' places it below the main Navbar (which is z-50) but above other content.
    <div className="fixed top-16 left-0 w-full border-b border-gray-300 px-6 py-3 z-40 shadow-sm bg-[#f6f4f0]">
      {/* Container for centering the menu items and applying max width */}
      <div className="flex items-center justify-center gap-6 max-w-7xl mx-auto">
        {/* Menubar component from shadcn/ui */}
        <Menubar className="border-none shadow-none px-0 bg-[#f6f4f0]">
          {/* Map over the menuItems array to create each navigation link */}
          {menuItems.map((item) => (
            <MenubarMenu key={item.id}>
              {" "}
              {/* Unique key for each menu item */}
              <MenubarTrigger
                // Apply dynamic classes based on whether this section is currently active
                className={`text-foreground hover:underline hover:text-primary cursor-pointer transition-all duration-200 ease-in-out ${
                  activeSection === item.id
                    ? "font-bold text-primary underline underline-offset-4" // Highlight active section
                    : ""
                }`}
                // On click, smoothly scroll to the corresponding section on the page
                onClick={() => {
                  document
                    .getElementById(item.id)
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                {item.label}
              </MenubarTrigger>
            </MenubarMenu>
          ))}
        </Menubar>
      </div>
    </div>
  );
};

export default TouristNavbar;
