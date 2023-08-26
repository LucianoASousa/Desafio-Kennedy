import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Input from "../Input";

describe("Input", () => {
  const user = userEvent.setup()
  it("renders an input element", () => {
    render(<Input />);
    const inputElement = screen.getByPlaceholderText("Required...") as HTMLInputElement;
    expect(inputElement)
  });

  it("renders an error message when there is an error", () => {
    const error = ["This field is required."];
    render(<Input error={error} name="field" />);
    const errorMessage = screen.getByTestId("error-message");
    expect(errorMessage)
  });

 it("displays a focused placeholder when input is focused", async () => {
   render(<Input />);
   const inputElement = screen.getByPlaceholderText("Required...") as HTMLInputElement;
   await user.click(inputElement);
   expect(inputElement.placeholder).toBe("Focused...");
  });

  it("displays a required placeholder when input is not focused", () => {
    render(<Input />);
    const inputElement = screen.getByPlaceholderText("Required...") as HTMLInputElement;
    
    expect(inputElement.placeholder).toBe("Required...");
  });
});