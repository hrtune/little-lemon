import { updateTimes } from "../components/BookingPage";

test("updateTimes returns the same state", () => {
  const oldState = ["Elon Musk"];
  const newState = updateTimes(oldState, {});
  expect(newState).toMatchObject(oldState);
});
