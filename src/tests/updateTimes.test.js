import { updateTimes } from "../components/BookingPage";

test("updateTimes returns an array", async () => {
  const oldState = ["Elon Musk"];
  const newState = await updateTimes(oldState, { date: "2023-09-20" });
  expect(typeof newState.length).toBe("number");
});
