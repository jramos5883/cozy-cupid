"use client";

import { useState } from "react";
import { FaBars } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

import { Be_Vietnam_Pro } from "next/font/google";
const bVP = Be_Vietnam_Pro({ weight: "700", subsets: ["latin"] });

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="flex flex-row h-32 items-center bg-blue-400 mx-auto">
      <div className="relative xs-cellphone:p-4 md-tablet:p-8 lg-laptop:hidden">
        <button
          id="dropdownDefaultButton"
          data-dropdown-toggle="dropdown"
          className="text-white bg-blue-700 hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          type="button"
          onClick={handleToggle}
        >
          <FaBars />
        </button>
        {/* Dropdown menu */}
        <div
          id="dropdown"
          className={`absolute z-10 ${
            isOpen ? "block" : "hidden"
          } bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}
        >
          <ul
            className="py-2 text-sm text-gray-700 dark:text-gray-200"
            aria-labelledby="dropdownDefaultButton"
          >
            <li>
              <a
                href="/"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/aboutus"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                About Us
              </a>
            </li>
            <li>
              <Link
                href="/testimonials"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Testimonials
              </Link>
            </li>
            <li>
              <a
                href="/contact"
                className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                Contact Info
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-row mx-auto items-center lg-laptop:space-x-8">
        <div className="hidden lg-laptop:block px-8">
          <Link href="/" className="md-tablet:text-xl lg-laptop:text-md">
            <span
              className={`${bVP.className} text-2xl text-sky-800 text-center pt-8 hover:text-blue-900`}
            >
              Home
            </span>
          </Link>
        </div>
        <div className="hidden lg-laptop:block">
          <Link href="/aboutus" className="md-tablet:text-xl lg-laptop:text-md">
            <span
              className={`${bVP.className} text-2xl text-sky-800 text-center pt-8 hover:text-blue-900`}
            >
              About Us
            </span>
          </Link>
        </div>
        <div className="mx-auto justify-center xs-cellphone:pr-4 md-tablet:pr-28 lg-laptop:pr-0">
          <Link href="/">
            <Image
              className="rounded-lg sm-cellphone:max-w-xs md-tablet:max-w-sm"
              src="/cozycupidpics/cozyCupidLogo.jpg"
              width={500}
              height={500}
              alt="Cozy Cupid Logo"
              priority
            />
          </Link>
        </div>
        <div className="hidden lg-laptop:block">
          <Link
            href="/testimonials"
            className="md-tablet:text-xl lg-laptop:text-md"
          >
            <span
              className={`${bVP.className} text-2xl text-sky-800 text-center pt-8 hover:text-blue-900`}
            >
              Testimonials
            </span>
          </Link>
        </div>
        <div className="hidden lg-laptop:block">
          <Link href="/contact" className="md-tablet:text-xl lg-laptop:text-md">
            <span
              className={`${bVP.className} text-2xl text-sky-800 text-center pt-8 hover:text-blue-900`}
            >
              Contact
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
