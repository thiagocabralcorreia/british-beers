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
      <nav className="flex content-center justify-between bg-primaryDark text-white">
        <div className="flex items-center justify-between w-full mx-auto px-10 h-24">
          <div className="hidden lg:flex">
            <div className="flex items-baseline space-x-4 font-oswald text-lg">
              {childrenLeft}
            </div>
          </div>

          <div className="flex items-center justify-between">
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

          <div className="hidden lg:flex">
            <div className="flex items-baseline space-x-4 font-oswald text-lg">
              {childrenRight}
            </div>
          </div>
        </div>
      </nav>

      <>{dropdownMenu}</>
    </motion.header>
  );
};

export default Header;
