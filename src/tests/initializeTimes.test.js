import { initializeTimes } from "../components/BookingPage";

test("initializeTimes returns a promise which resolves to an array", async () => {
  const times = await initializeTimes();
  expect(typeof times.length).toBe("number");
});
