import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Header from "../components/Header";

jest.mock("next/image", () => ({
  __esModule: true,
  // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
  default: jest.fn().mockImplementation((props) => <img {...props} />),
}));

const mockWindowLocationAssign = (url: string) => {
  Object.defineProperty(window, "location", {
    value: {
      assign: jest.fn((newUrl) => {
        window.location.href = newUrl;
      }),
    },
    writable: true,
  });

  window.location.assign(url);
};

describe("Header component", () => {
  it("renders the logo correctly", () => {
    render(
      <Header dropdownMenu={null} childrenLeft={null} childrenRight={null} />
    );

    const logoElement = document.querySelector("img");

    expect(logoElement).toBeInTheDocument();
  });

  it("renders left children correctly", () => {
    const childrenLeft = (
      <>
        <h1>Left Child 1</h1>
        <p>Left Child 2</p>
        <span>Left Child 3</span>
      </>
    );

    render(
      <Header
        dropdownMenu={null}
        childrenLeft={childrenLeft}
        childrenRight={null}
      />
    );

    const leftChild1 = document.querySelector("h1");
    const leftChild2 = document.querySelector("p");
    const leftChild3 = document.querySelector("span");

    expect(leftChild1).toBeInTheDocument();
    expect(leftChild2).toBeInTheDocument();
    expect(leftChild3).toBeInTheDocument();
  });

  it("renders right children correctly", () => {
    const childrenRight = (
      <>
        <h1>Right Child 1</h1>
        <p>Right Child 2</p>
        <span>Right Child 3</span>
      </>
    );

    render(
      <Header
        dropdownMenu={null}
        childrenLeft={null}
        childrenRight={childrenRight}
      />
    );

    const rightChild1 = document.querySelector("h1");
    const rightChild2 = document.querySelector("p");
    const rightChild3 = document.querySelector("span");

    expect(rightChild1).toBeInTheDocument();
    expect(rightChild2).toBeInTheDocument();
    expect(rightChild3).toBeInTheDocument();
  });

  it("renders dropdown menu correctly", () => {
    const dropdownMenu = (
      <div>
        <h1>Dropdown Menu</h1>
      </div>
    );

    render(
      <Header
        dropdownMenu={dropdownMenu}
        childrenLeft={null}
        childrenRight={null}
      />
    );

    const dropdownMenu1 = document.querySelector("div");

    expect(dropdownMenu1).toBeInTheDocument();
  });

  it("redirects to homepage when logo is clicked", () => {
    render(
      <Header childrenLeft={null} childrenRight={null} dropdownMenu={null} />
    );

    const logoElement = screen.getByAltText("British Beers logo");

    mockWindowLocationAssign("/");

    fireEvent.click(logoElement);

    expect(window.location.assign).toHaveBeenCalledWith("/");
  });
});
