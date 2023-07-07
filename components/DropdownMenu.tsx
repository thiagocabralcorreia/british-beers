import React, { useRef } from "react";
import Link from "next/link";
import { Transition } from "@headlessui/react";
import { ILink, links } from "../data/links";

interface DropdownMenuProps {
  show: boolean;
  onClose: () => void;
}

const DropdownMenu = ({ show, onClose }: DropdownMenuProps) => {
  const ref = useRef(null);

  return (
    <Transition
      show={show}
      enter="transition ease-out duration-950"
      enterFrom="opacity-0 translate-y-[-100%]"
      enterTo="opacity-100 translate-y-0"
      leave="transition ease-in duration-950"
      leaveFrom="opacity-100 translate-y-0"
      leaveTo="opacity-0 translate-y-[-100%]"
    >
      <nav className="lg:hidden top-0 left-0 w-full">
        <div ref={ref} className="h-full overflow-hidden text-center z-40">
          <div className="h-screen pt-8 pb-3 space-y-1 sm:px-3 bg-primaryDark">
            {links.map(({ id, href, name }: ILink) => {
              return (
                <Link
                  key={id}
                  href={href}
                  className="header-link block px-3 py-2 text-xl font-oswald transition ease-out duration-900
                  text-white hover:text-tertiary"
                >
                  {name?.toUpperCase()}
                </Link>
              );
            })}
          </div>
          <div onClick={onClose} className="bg-transparent w-full h-full" />
        </div>
      </nav>
    </Transition>
  );
};

export default DropdownMenu;
