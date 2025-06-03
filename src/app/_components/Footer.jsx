import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaLinkedinIn,
  FaTiktok,
  FaXing,
} from "react-icons/fa6"; // Using fa6 for updated icons
import { MdOutlineMailOutline } from "react-icons/md"; // For email icon

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-700 font-inter">
      {/* Top Section */}
      <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 border-b border-gray-300">
        {/* Column 1: Region & Subscribe */}
        <div className="flex flex-col space-y-6">
          <div>
            <label
              htmlFor="region-select"
              className="block text-sm font-semibold mb-2"
            >
              Change region
            </label>
            <div className="relative">
              <select
                id="region-select"
                className="block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary sm:text-sm appearance-none pr-8"
              >
                <option>Global</option>
                <option>North America</option>
                <option>Europe</option>
                <option>Asia</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
          <div className="mt-6">
            <p className="text-sm mb-3">
              Get the goods! Travel deals, new trips, inspiration and more.
            </p>
            <button className="flex items-center justify-center w-full px-4 py-2 border border-transparent text-sm font-medium rounded-full shadow-sm text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-700 transition duration-200 ease-in-out">
              <MdOutlineMailOutline className="mr-2 h-5 w-5" />
              Subscribe to emails
            </button>
          </div>
        </div>

        {/* Column 2: Booking */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-800">Booking</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:underline">
                My Booking
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Submit trip feedback
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Safe Travels Hub
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Travel Alerts
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Flexible bookings
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Booking conditions
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Agent login
              </a>
            </li>
          </ul>
        </div>

        {/* Column 3: Company */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-800">Company</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:underline">
                About us
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                The Good Times
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Intrepid DMC
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Privacy policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Newsroom
              </a>
            </li>
          </ul>
        </div>

        {/* Column 4: Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-800">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:underline">
                Get in touch
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Live chat
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                FAQ
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Reviews
              </a>
            </li>
          </ul>
        </div>

        {/* Column 5: Purpose */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-gray-800">Purpose</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#" className="hover:underline">
                B Corp
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                The Intrepid Foundation
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                People
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Planet
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Wildlife
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-black text-white py-8 px-4 max-h-40">
        <div className="max-w-7xl  mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Certified B Corporation Logo */}
          <div className="flex items-center space-x-3">
            {/* Placeholder for B Corp logo - ideally an SVG or Image component */}
            <div className="w-10 h-10 rounded-full flex items-center justify-center">
              {/* <span className="font-bold text-gray-800 text-xl">B</span> */}
              <img
                src="https://www.intrepidtravel.com/files/images/logos/b-corp-logo.svg"
                alt=""
              />
            </div>
            {/* <span className="text-sm">
              Certified <br /> Corporation
            </span> */}
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-6 text-2xl">
            <a
              href="#"
              aria-label="Facebook"
              className="hover:text-gray-400 transition-colors duration-200"
            >
              <FaFacebookF />
            </a>
            <a
              href="#"
              aria-label="Instagram"
              className="hover:text-gray-400 transition-colors duration-200"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              aria-label="TikTok"
              className="hover:text-gray-400 transition-colors duration-200"
            >
              <FaTiktok />
            </a>
            <a
              href="#"
              aria-label="YouTube"
              className="hover:text-gray-400 transition-colors duration-200"
            >
              <FaYoutube />
            </a>
            <a
              href="#"
              aria-label="Xing"
              className="hover:text-gray-400 transition-colors duration-200"
            >
              <FaXing />
            </a>{" "}
            {/* Assuming X is Xing or a generic X icon */}
            <a
              href="#"
              aria-label="LinkedIn"
              className="hover:text-gray-400 transition-colors duration-200"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
