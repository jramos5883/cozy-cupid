"use client";

import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="flex flex-row h-16 items-center bg-blue-400 mx-auto">
      <div className="flex flex-row items-center">
        <a
          className="text-5xl px-4 text-blue-700 hover:text-blue-900"
          href="https://www.instagram.com/cozycupidstore/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaInstagram />
        </a>

        <a
          className="text-5xl text-blue-700 hover:text-blue-900"
          href="https://www.facebook.com/CozyCupid/?locale2=de_DE&paipv=0&eav=AfZVjUV9zrjDKhXCerwl43_hLkXph6UqMuRezJfAC7Oumfx4rKzIgShumDS0KUsjs24"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook />
        </a>
      </div>
    </div>
  );
}
