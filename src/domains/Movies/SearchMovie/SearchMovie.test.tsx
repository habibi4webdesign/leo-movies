import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import SearchMovie from "./SearchMovie";

describe("Testing the SearchMovie:", () => {

  it("Check if SearchMovie render correctly", () => {
    const onChangeSearchHandler = jest.fn();
    render(<SearchMovie onChangeSearch={onChangeSearchHandler} />);
    expect(screen.getByTestId("MovieSearchInput")).toBeInTheDocument();
  });

  it("Check if SearchMovie search onChange works orrectly", async () => {
    const onChangeSearchHandler = jest.fn();

    render(<SearchMovie onChangeSearch={onChangeSearchHandler} />);
    const searchInput: HTMLInputElement = screen.getByTestId("MovieSearchInput");

    userEvent.type(searchInput, "abc");

    expect(onChangeSearchHandler).toHaveBeenCalled()
    expect(onChangeSearchHandler).toHaveBeenCalledTimes(3)
  });
});
