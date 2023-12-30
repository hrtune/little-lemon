import About from "./About";
import Footer from "./Footer";
import Headings from "./Headings";
import BookingForm from "./BookingForm";
import { useReducer } from "react";
import { submitAPI, fetchAPI, dateAPI } from "../mockAPI";
import { useNavigate } from "react-router-dom";

export const updateTimes = (state, action) => {
  return fetchAPI(dateAPI(action.date));
};

export const initializeTimes = () => {
  return fetchAPI(dateAPI());
};

const BookingPage = () => {
  const navigate = useNavigate();
  const [availableTimesPromise, dispatchTime] = useReducer(
    updateTimes,
    null,
    initializeTimes
  );

  const submitForm = async (data) => {
    const result = await submitAPI(data);
    if (result === true) {
      navigate("/book-a-table/confirmed");
    }
  };

  return (
    <>
      <Headings />
      <BookingForm
        availableTimesPromise={availableTimesPromise}
        dispatchTime={dispatchTime}
        submitForm={submitForm}
      />
      <About />
      <Footer />
    </>
  );
};

export default BookingPage;
