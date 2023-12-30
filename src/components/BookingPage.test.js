import { render, screen } from "@testing-library/react";
import BookingPage from "./BookingPage";
import { BrowserRouter } from "react-router-dom";

test("Renders the BookingPage heading", () => {
  render(
    <BrowserRouter>
      <BookingPage />
    </BrowserRouter>
  );
  const headingElement = screen.getByText("Book a table");
  expect(headingElement).toBeInTheDocument();
});
