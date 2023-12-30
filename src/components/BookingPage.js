import About from "./About";
import Footer from "./Footer";
import Headings from "./Headings";
import BookingForm from "./BookingForm";
import { useEffect, useReducer } from "react";
import useInitializeTime from "../useInitializeTime";

export const updateTimes = (state, action) => {
  if (action.type === "INIT") {
    return action.value;
  }
  return state;
};

const BookingPage = () => {
  const initializeTime = useInitializeTime();
  const [availableTimes, dispatchTime] = useReducer(updateTimes, []);

  useEffect(() => {
    dispatchTime({ type: "INIT", value: initializeTime() });
  }, [initializeTime]);

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
