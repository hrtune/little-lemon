import { initializeTimes } from "../components/BookingPage";

test("initializeTimes returns initial array", () => {
  const times = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];
  expect(initializeTimes()).toMatchObject(times);
});
