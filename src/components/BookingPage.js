import About from "./About";
import Footer from "./Footer";
import Headings from "./Headings";
import BookingForm from "./BookingForm";
import { useReducer } from "react";
import { fetchAPI, dateAPI } from "../mockAPI";

export const updateTimes = (state, action) => {
  return fetchAPI(dateAPI(action.date));
};

export const initializeTime = () => {
  return fetchAPI(dateAPI());
};

const BookingPage = () => {
  const [availableTimesPromise, dispatchTime] = useReducer(
    updateTimes,
    null,
    initializeTime
  );

  return (
    <>
      <Headings />
      <BookingForm
        availableTimesPromise={availableTimesPromise}
        dispatchTime={dispatchTime}
      />
      <About />
      <Footer />
    </>
  );
};

export default BookingPage;
