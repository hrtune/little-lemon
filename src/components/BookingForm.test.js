import { render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";
import { BrowserRouter } from "react-router-dom";
import { fetchAPI, dateAPI } from "../mockAPI";
import userEvent from "@testing-library/user-event";

test("Renders the BookingForm button", () => {
  render(
    <BrowserRouter>
      <BookingForm
        availableTimesPromise={fetchAPI(dateAPI())}
        dispatchTime={() => null}
      />
    </BrowserRouter>
  );
  const button = screen.getByText("Make Your Reservation");
  expect(button).toBeInTheDocument();
});

test("Submit button is disabled by default", () => {
  render(
    <BrowserRouter>
      <BookingForm
        availableTimesPromise={fetchAPI(dateAPI())}
        dispatchTime={() => null}
        submitForm={() => null}
      />
    </BrowserRouter>
  );
  const button = screen.getByText("Make Your Reservation");
  expect(button).toBeDisabled();
});

test("Submit button is not disabled with valid input", () => {
  render(
    <BrowserRouter>
      <BookingForm
        availableTimesPromise={fetchAPI(dateAPI())}
        dispatchTime={() => null}
        submitForm={() => null}
      />
    </BrowserRouter>
  );
  const guests = screen.getByLabelText("Number of guests:");
  userEvent.type(guests, "1");
  const button = screen.getByText("Make Your Reservation");
  expect(button).toBeEnabled();
});

test("Submit button is disabled with an invalid value", () => {
  render(
    <BrowserRouter>
      <BookingForm
        availableTimesPromise={fetchAPI(dateAPI())}
        dispatchTime={() => null}
        submitForm={() => null}
      />
    </BrowserRouter>
  );
  const guests = screen.getByLabelText("Number of guests:");
  userEvent.type(guests, "0");
  const button = screen.getByText("Make Your Reservation");
  expect(button).toBeDisabled();
});

test("Submission occurs with valid values", () => {
  const mock = jest.fn();
  render(
    <BrowserRouter>
      <BookingForm
        availableTimesPromise={fetchAPI(dateAPI())}
        dispatchTime={() => null}
        submitForm={mock}
      />
    </BrowserRouter>
  );
  const guests = screen.getByLabelText("Number of guests:");
  userEvent.type(guests, "5");

  const button = screen.getByText("Make Your Reservation");
  userEvent.click(button);

  expect(mock.mock.calls).toHaveLength(1);
});
