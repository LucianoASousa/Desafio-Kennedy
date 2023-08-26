import {describe, expect, it} from "vitest";
import { render } from "@testing-library/react";
import { Loading } from "../Loading";

describe("Loading component", () => {
  it("renders the spinner icon", () => {
    const { getByTestId } = render(<Loading />);
    expect(getByTestId("spinner-icon"))
  });
});