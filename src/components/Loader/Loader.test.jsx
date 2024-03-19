import React from "react";
import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Loader } from "./Loader";

describe("Loader Component", () => {
  it("renders the loader component", () => {
    const { getByTestId } = render(<Loader />);
    const loaderComponent = getByTestId("loader-component");
    expect(loaderComponent).toBeInTheDocument();
  });
});
