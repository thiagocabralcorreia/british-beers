import React from "react";

interface DropdownMenuButtonProps {
  onClick: () => void;
  isOpen: boolean;
}

const DropdownMenuButton = ({ onClick, isOpen }: DropdownMenuButtonProps) => {
  return (
    <button
      onClick={onClick}
      type="button"
      className="lg:hidden items-center justify-center p-2 rounded-md duration-500"
      aria-controls="mobile-menu"
      aria-expanded="false"
    >
      {!isOpen ? (
        <svg
          className="block h-6 w-6 transition ease-out duration-900 hover:text-tertiary"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      ) : (
        <svg
          className="block h-6 w-6 transition ease-out duration-900 hover:text-tertiary"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      )}
    </button>
  );
};

export default DropdownMenuButton;
