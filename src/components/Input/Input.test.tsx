import { render, screen, waitFor } from "@testing-library/react";
import Input from "./Input";
import userEvent from "@testing-library/user-event";

describe("Testing the Input:", () => {
  it("Check if Input render correctly", () => {
    render(<Input />);
    expect(screen.getByTestId("Input")).toBeInTheDocument();
  });

  it("Check if Input search onChange works orrectly", async () => {
    render(<Input />);
    const searchInput: HTMLInputElement = screen.getByTestId("Input");

    userEvent.type(searchInput, "abc");

    expect(searchInput.value).toEqual("abc");
    
  });
});
