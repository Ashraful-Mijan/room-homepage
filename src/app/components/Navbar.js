"use clinet";
import Link from "next/link";
import React, { useState } from "react";
import useMediaQuery from "../hooks/useMediaQuery";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const isMobileDevice = useMediaQuery();
  return (
    <nav
      className={`flex items-center transition-all ease-in duration-1000 ${
        isMobileDevice && !isMobileMenuOpen
          ? ""
          : !isMobileDevice
          ? "gap-16"
          : "gap-5"
      } absolute w-full 1xl:w-max z-10 ${
        isMobileDevice ? "px-5 py-4" : "pl-16 pt-12 md:px-5 md:pt-5 xl:pl-12 xl:pt-10"
      } ${
        isMobileMenuOpen
          ? "backdrop-blur-sm bg-white/50 text-black"
          : "bg-[transparent] text-white"
      }`}
    >
      {/* thumbler icon */}
      {isMobileDevice && (
        <svg
          onClick={() => setIsMobileMenuOpen(true)}
          className={`${
            isMobileDevice && !isMobileMenuOpen
              ? "block"
              : isMobileDevice && isMobileMenuOpen
              ? "hidden"
              : ""
          }`}
          width="20"
          height="14"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20 12v2H0v-2h20zm0-6v2H0V6h20zm0-6v2H0V0h20z"
            fill="#FFF"
            fillRule="evenodd"
          />
        </svg>
      )}
      {/* close icon */}
      <svg
        onClick={() => setIsMobileMenuOpen(false)}
        className={`${isMobileDevice && isMobileMenuOpen ? "" : "hidden"}`}
        width="16"
        height="16"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14.364.222l1.414 1.414L9.414 8l6.364 6.364-1.414 1.414L8 9.414l-6.364 6.364-1.414-1.414L6.586 8 .222 1.636 1.636.222 8 6.586 14.364.222z"
          fill="#000"
          fillRule="evenodd"
          opacity=".201"
        />
      </svg>

      {/* task is here */}
      {isMobileDevice && isMobileMenuOpen ? null : (
        <Link
          className={`text-3xl leading-none ${
            isMobileDevice && !isMobileMenuOpen ? "mx-auto" : ""
          }`}
          href="/"
        >
          room
        </Link>
      )}

      <ul
        className={`transition-[display,opacity] duration-1000 delay-300 ease-in ${
          isMobileDevice && !isMobileMenuOpen ? "hidden opacity-0" : "flex opacity-100"
        } gap-7 items-center`}
      >
        <li>
          <Link href="/">home</Link>
        </li>
        <li>
          <Link href="/">shop</Link>
        </li>
        <li>
          <Link href="/">about</Link>
        </li>
        <li>
          <Link href="/">contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
