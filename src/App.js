import "./App.css";
import Header from "./components/Header";
import BookingPage from "./components/BookingPage";
import Homepage from "./components/Homepage";
import ConfirmedBooking from "./components/ConfirmedBooking";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/book-a-table" element={<BookingPage />} />
        <Route path="/book-a-table/confirmed" element={<ConfirmedBooking />} />
      </Routes>
    </>
  );
}

export default App;
