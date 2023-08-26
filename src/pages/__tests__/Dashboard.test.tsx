import { describe, it, expect } from "vitest";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Dashboard from "../Dashboard";
import { ToolsProvider } from "../../context/tools.context";

describe("Dashboard", () => {
  const user = userEvent.setup()
  it("should render the title and subtitle", () => {
    render(
      <ToolsProvider>
        <Dashboard />
      </ToolsProvider>
    );

    expect(screen.getByText("FEMAQUA"))
    expect(
      screen.getByText("Ferramentas Maravilhosas que Adoro")
    )
  });

  it("should render the tools", async () => {
    render(
      <ToolsProvider>
        <Dashboard />
      </ToolsProvider>
    );

    await waitFor(() => {
      expect(screen.getAllByTestId("Delete"))
    });
  });

  it("should filter the tools by tag", async () => {
    const{ getByPlaceholderText, getAllByTestId  } = render(
      <ToolsProvider>
        <Dashboard />
      </ToolsProvider>
    );
    
    const input = getByPlaceholderText("Digite o procurado…");
    
    const cards = getAllByTestId('Delete');
    fireEvent.change(input, { target: { value: "planning" } });
    expect(cards).toHaveLength(1);
    
  });

  it("should open the add modal when the 'Novo' button is clicked", async () => {
    render(
      <ToolsProvider>
        <Dashboard />
      </ToolsProvider>
    );

    const addButton = screen.getAllByTestId("add")[0];

    await user.click(addButton);

    expect(screen.getAllByTestId("add-modal")).toHaveLength(1);

  });

  it("should open the danger modal when a tool is deleted", async () => {
    render(
      <ToolsProvider>
        <Dashboard />
      </ToolsProvider>
    );

    const deleteButton = screen.getAllByTestId("Delete")[0];

    await user.click(deleteButton);

    expect(screen.getByText("Você tem certeza que quer remover essa ferramenta?"))

  });
});