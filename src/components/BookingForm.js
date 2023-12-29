import { useReducer } from "react";
const initialData = {
  date: "",
  time: "17:00",
  guests: "1",
  occasion: "Birthday",
};
const reducer = (state, action) => {
  // action: { name: "", value:"" }
  const newState = { ...state };
  newState[action.name] = action.value;
  return newState;
};
const BookingForm = () => {
  const [data, dispatch] = useReducer(reducer, initialData);

  const availableTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];

  const formStyle = {
    backgroundColor: "grey",
    height: "500px",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "space-around",
    padding: "0 290px",
  };

  const submit = (event) => {
    event.preventDefault();
    console.log(data);
  };

  return (
    <form style={formStyle} onSubmit={submit}>
      <section>
        <label htmlFor="date">Choose date:</label>
        <input
          type="date"
          name="date"
          id="res-date"
          value={data.date}
          onChange={(e) => dispatch({ name: "date", value: e.target.value })}
        />
      </section>
      <section>
        <label htmlFor="time">Choose time:</label>
        <select
          name="time"
          id="res-time "
          value={data.time}
          onChange={(e) => dispatch({ name: "time", value: e.target.value })}
        >
          {availableTimes.map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
      </section>
      <section>
        <label htmlFor="guests">Number of guests:</label>
        <input
          type="number"
          name="guests"
          placeholder="1"
          min="1"
          max="10"
          id="res-guests"
          value={data.guests}
          onChange={(e) => dispatch({ name: "guests", value: e.target.value })}
        />
      </section>
      <section>
        <label htmlFor="occasion">Occasion:</label>
        <select
          name="occasion"
          id="res-occasion"
          value={data.occasion}
          onChange={(e) =>
            dispatch({ name: "occasion", value: e.target.value })
          }
        >
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
      </section>
      <button type="submit">Make Your Reservation</button>
    </form>
  );
};

export default BookingForm;
