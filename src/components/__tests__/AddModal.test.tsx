import { describe, vi, expect, it, } from "vitest";
import { render, screen, fireEvent } from "@testing-library/react";
import AddModal from "../AddModal";

describe("AddModal", () => {
  it("should render the modal with the correct title", () => {
    render(<AddModal isOpen={true} closeModal={() => {}} />);
    const titleElement = screen.getByText("Adicionar Ferramenta");
    expect(titleElement)
  });

  it("should close the modal when the X button is clicked", () => {
    const closeModalMock = vi.fn();
    render(<AddModal isOpen={true} closeModal={closeModalMock} />);
    const xButton = screen.getAllByTestId("close-modal")[0];
    fireEvent.click(xButton);
    expect(closeModalMock).toHaveBeenCalled();
  });

  it("should show an error message when the form is submitted with invalid data", () => {
    render(<AddModal isOpen={true} closeModal={() => {}} />);
    const submitButton = screen.getByText("Salvar");
    fireEvent.click(submitButton);
    const errorMessage = screen.getAllByTestId("error-message")[0];
    expect(errorMessage)
  });
});