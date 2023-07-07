import React from "react";
import { render, fireEvent } from "@testing-library/react";
import DropdownMenuButton from "../components/DropdownMenuButton";

describe("DropdownMenuButton component", () => {
  test("toggle button icon on click", () => {
    const handleClick = jest.fn();
    const { getByRole } = render(
      <DropdownMenuButton onClick={handleClick} isOpen={false} />
    );

    const button = getByRole("button");
    expect(button).toBeInTheDocument();

    fireEvent.click(button);

    expect(handleClick).toHaveBeenCalled();
  });
});
