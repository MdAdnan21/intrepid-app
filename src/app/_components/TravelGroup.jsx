import React from "react";

export default function TravelGroup() {
  return (
    <div className="bg-gray-100 flex items-center justify-center min-h-[80vh] p-4 font-inter">
      <div className="rounded-lg  p-8 md:p-12 max-w-4xl w-full flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-12">
        {/* Left Section: Globe Icon */}
        <div className="flex-shrink-0">
          <div className="relative w-[200px] h-[200px] border-2 border-gray-800 rounded-full bg-gray-200 flex justify-center items-center overflow-hidden">
            {/* Globe lines - approximated with Tailwind classes for simplicity,
                or you might use a more complex SVG for exact replication */}
            <div
              className="absolute inset-0 rounded-full border-2 border-gray-800 box-border opacity-50
                          bg-repeat"
              style={{
                backgroundImage: `
                     repeating-linear-gradient(to right, transparent 0, transparent 10px, #ccc 10px, #ccc 12px),
                     repeating-linear-gradient(to bottom, transparent 0, transparent 10px, #ccc 10px, #ccc 12px)
                   `,
                backgroundSize: "25% 25%",
                backgroundPosition: "center",
              }}
            ></div>
            {/* Heart Icon */}
            <div
              className="absolute -right-2 -bottom-2 w-20 h-20 bg-red-500 transform -rotate-45 rounded-[50%_0_50%_0] shadow-md"
              style={{ boxShadow: "0 0 0 5px white" }}
            >
              <div className="absolute w-full h-full bg-red-500 rounded-full top-[-50%] left-0"></div>
              <div className="absolute w-full h-full bg-red-500 rounded-full top-0 left-[50%]"></div>
            </div>
          </div>
        </div>

        {/* Right Section: Text Content */}
        <div className="text-center md:text-left">
          <p className="text-sm font-semibold text-gray-600 mb-4 uppercase tracking-wide">
            Small group travel that's good all over
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight mb-6">
            We're here to{" "}
            <span className="bg-yellow-300 px-1 rounded-md">do good</span> by{" "}
            <br />
            creating{" "}
            <span className="bg-yellow-300 px-1 rounded-md">
              positive change
            </span>{" "}
            <br />
            through the joy of travel.
          </h1>
          <button className="px-6 py-3 bg-white border border-gray-300 rounded-full text-gray-700 font-medium hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:ring-opacity-75 transition duration-200 ease-in-out">
            Our purpose
          </button>
        </div>
      </div>
    </div>
  );
}
