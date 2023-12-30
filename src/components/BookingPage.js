import About from "./About";
import Footer from "./Footer";
import Headings from "./Headings";
import BookingForm from "./BookingForm";
import { useReducer } from "react";

export const initializeTimes = () => {
  return ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
};

export const updateTimes = (state, action) => {
  return state;
};

const BookingPage = () => {
  const [availableTimes, dispatchTime] = useReducer(
    updateTimes,
    initializeTimes()
  );

  return (
    <>
      <Headings />
      <BookingForm
        availableTimes={availableTimes}
        dispatchTime={dispatchTime}
      />
      <About />
      <Footer />
    </>
  );
};

export default BookingPage;
