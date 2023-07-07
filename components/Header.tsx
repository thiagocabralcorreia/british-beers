import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import logo from "../public/logo.png";

interface HeaderProps {
  childrenLeft: React.ReactNode;
  childrenRight: React.ReactNode;
  dropdownMenu: React.ReactNode;
}

const Header = ({ childrenLeft, childrenRight, dropdownMenu }: HeaderProps) => {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ ease: "easeInOut", duration: 0.9, delay: 0.2 }}
      className="fixed h-24 top-0 left-0 right-0 z-50"
    >
      <nav
        className="max-md:flex max-md:justify-between grid grid-cols-3 max-md:gap-2 gap-4 items-center
        w-full mx-auto px-10 max-sm:px-5 h-24 z-50 bg-primaryDark text-white relative"
      >
        <div className="flex items-center justify-self-start">
          <div className="flex items-baseline space-x-4 font-oswald">
            {childrenLeft}
          </div>
        </div>

        <div className="flex items-center justify-center col-span-1">
          <div className="flex-shrink-0">
            <Link href={"/"}>
              <Image
                src={logo}
                alt="British Beers logo"
                className="h-16 w-auto"
              />
            </Link>
          </div>
        </div>

        <div className="flex items-center justify-end col-span-1">
          <div
            className={`flex items-baseline space-x-4 font-oswald ${
              childrenRight ? "" : "justify-self-end"
            }`}
          >
            {childrenRight}
          </div>
        </div>
      </nav>

      {dropdownMenu}
    </motion.header>
  );
};

export default Header;
