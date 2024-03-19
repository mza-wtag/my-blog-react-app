import React from "react";
import { render } from "@testing-library/react";
import NotFound from "./NotFound";

it("renders NotFound component with provided text", () => {
  const text = "Page not found";
  const { getByText } = render(<NotFound text={text} />);
  const textElement = getByText(text);
  expect(textElement).toBeInTheDocument();
});
