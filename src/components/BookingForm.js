import { useEffect, useReducer, useState } from "react";
import { dateAPI } from "../mockAPI";
import ui from "../ui";
const initialData = {
  date: dateAPI(),
  time: "17:00",
  guests: "0",
  occasion: "Birthday",
};
const reducer = (state, action) => {
  // action: { name: "", value:"" }
  const newState = { ...state };
  if (action.name === "date") {
    newState.date = dateAPI(action.value);
  } else {
    newState[action.name] = action.value;
  }
  return newState;
};
const BookingForm = ({ availableTimesPromise, dispatchTime, submitForm }) => {
  const [data, dispatch] = useReducer(reducer, initialData);
  const [availableTimes, setAvailableTimes] = useState([]);

  useEffect(() => {
    availableTimesPromise.then((times) => setAvailableTimes(times));
  }, [availableTimesPromise]);

  useEffect(() => {
    dispatch({ name: "time", value: availableTimes[0] });
  }, [availableTimes]);

  const formStyle = {
    backgroundColor: ui.color.lightGreen,
    height: "500px",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "space-around",
    padding: "0 290px",
  };

  const submit = (event) => {
    event.preventDefault();
    submitForm(data);
    console.log(data);
  };

  const isValid = () => {
    return !(data.guests < 1 || data.guests > 10);
  };

  return (
    <form style={formStyle} onSubmit={submit}>
      <section>
        <label htmlFor="date">Choose date: </label>
        <input
          type="date"
          name="date"
          id="res-date"
          required
          value={data.date}
          onChange={async (e) => {
            dispatch({ name: "date", value: e.target.value });
            await dispatchTime({ date: e.target.value });
          }}
        />
      </section>
      <section>
        <label htmlFor="res-time">Choose time: </label>
        <select
          name="time"
          id="res-time"
          value={data.time}
          required
          onChange={(e) => dispatch({ name: "time", value: e.target.value })}
        >
          {availableTimes.map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
      </section>
      <section>
        <label htmlFor="res-guests">Number of guests: </label>
        <input
          type="number"
          name="guests"
          min="1"
          max="10"
          id="res-guests"
          value={data.guests}
          required
          onChange={(e) => {
            dispatch({ name: "guests", value: e.target.value });
          }}
        />
      </section>
      <section>
        <label htmlFor="res-occasion">Occasion: </label>
        <select
          name="occasion"
          id="res-occasion"
          value={data.occasion}
          required
          onChange={(e) =>
            dispatch({ name: "occasion", value: e.target.value })
          }
        >
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
      </section>
      <button
        alia-label="Submit Button"
        type="submit"
        disabled={isValid() ? "" : "disabled"}
      >
        Make Your Reservation
      </button>
    </form>
  );
};

export default BookingForm;
