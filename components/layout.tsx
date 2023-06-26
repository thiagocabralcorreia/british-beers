import React, { useEffect, useState } from "react";
import Link from "next/link";
import { MdOutlineSearch, MdPerson, MdShoppingCart } from "react-icons/md";

import Header from "./Header";

import { ILink, links } from "../data/links";
import DropdownMenuButton from "./DropdownMenuButton";

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const closeDropdownMenu = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };

    closeDropdownMenu();

    window.addEventListener("resize", closeDropdownMenu);

    return () => {
      window.removeEventListener("resize", closeDropdownMenu);
    };
  }, []);

  return (
    <div>
      <Header
        childrenLeft={
          <div className="flex content-center">
            <DropdownMenuButton
              onClick={() => setIsOpen(!isOpen)}
              isOpen={isOpen}
            />
            {links.map(({ id, href, name }: ILink) => {
              return (
                <Link
                  key={id}
                  href={href}
                  className="max-lg:hidden header-link block px-3 py-4 transition ease-out duration-900 hover:text-tertiary"
                >
                  {name?.toUpperCase()}
                </Link>
              );
            })}
          </div>
        }
        childrenRight={
          <>
            <div className="flex space-x-4 max-sm:space-x-1">
              <div className="flex items-center justify-center w-8 h-8">
                <MdOutlineSearch
                  className="text-xl transition-colors duration-300
                cursor-pointer text-white hover:text-tertiary"
                />
              </div>
              <div className="flex items-center justify-center w-8 h-8">
                <MdPerson
                  className="text-xl transition-colors duration-300
                cursor-pointer text-white hover:text-tertiary "
                />
              </div>
              <div className="flex items-center justify-center w-8 h-8">
                <MdShoppingCart
                  className="text-xl transition-colors duration-300
                cursor-pointer text-white hover:text-tertiary "
                />
              </div>
            </div>
          </>
        }
        dropdownMenu={<div className="flex font-oswald text-lg"></div>}
      />
      <div>{children}</div>
    </div>
  );
}
