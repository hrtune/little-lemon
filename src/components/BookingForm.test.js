import { render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";
import { BrowserRouter } from "react-router-dom";
import { fetchAPI, dateAPI } from "../mockAPI";

test("Renders the BookingForm button", () => {
  render(
    <BrowserRouter>
      <BookingForm
        availableTimesPromise={fetchAPI(dateAPI())}
        dispatchTime={() => null}
      />
    </BrowserRouter>
  );
  const headingElement = screen.getByText("Make Your Reservation");
  expect(headingElement).toBeInTheDocument();
});
