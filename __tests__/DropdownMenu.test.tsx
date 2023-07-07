import React from "react";
import { render, screen } from "@testing-library/react";
import DropdownMenu from "../components/DropdownMenu";

describe("Dropdown", () => {
  test("renders dropdown menu items", () => {
    render(<DropdownMenu show={true} onClose={() => {}} />);

    const shopLink = screen.getByText("SHOP");
    const visitLink = screen.getByText("VISIT");
    const aboutLink = screen.getByText("ABOUT US");

    expect(shopLink).toBeInTheDocument();
    expect(visitLink).toBeInTheDocument();
    expect(aboutLink).toBeInTheDocument();
  });
});
