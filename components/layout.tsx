import React, { useEffect, useState } from "react";
import Link from "next/link";

import Header from "./Header";

import { ILink, links } from "../data/links";

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
          <>
            {links.map(({ id, href, name }: ILink) => {
              return (
                <Link
                  key={id}
                  href={href}
                  className="header-link block px-3 py-4 transition ease-out duration-900 hover:text-tertiary"
                >
                  {name?.toUpperCase()}
                </Link>
              );
            })}
          </>
        }
        childrenRight={
          <>
            {links.map(({ id, href, name }: ILink) => {
              return (
                <Link
                  key={id}
                  href={href}
                  className="header-link block px-3 py-4 transition ease-out duration-900 hover:text-tertiary"
                >
                  {name?.toUpperCase()}
                </Link>
              );
            })}
          </>
        }
        dropdownMenu={null}
      />
      <div>{children}</div>
    </div>
  );
}
