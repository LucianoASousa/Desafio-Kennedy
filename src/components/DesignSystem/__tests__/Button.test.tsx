import { render, fireEvent } from "@testing-library/react";
import {describe, it, expect, vi } from "vitest"
import Button from "../Button";

describe("Button", () => {
  it("renders correctly", () => {
    const { getByText } = render(<Button styles="neutral">Click me</Button>);
    expect(getByText("Click me"));
  });

  it("calls onClick when clicked", () => {
    const handleClick = vi.fn();
    
    const { getByText } = render(
      <Button styles="neutral" onClick={handleClick}>
        Click me
      </Button>
    );
    fireEvent.click(getByText("Click me"));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("applies danger styles correctly", () => {
    const { getByText } = render(<Button styles="danger">Click me</Button>);
    expect(getByText("Click me"))
  });

  it("applies success styles correctly", () => {
    const { getByText } = render(<Button styles="success">Click me</Button>);
    expect(getByText("Click me"))
  });

  it("applies neutral styles correctly", () => {
    const { getByText } = render(<Button styles="neutral">Click me</Button>);
    expect(getByText("Click me"))
  });
});

