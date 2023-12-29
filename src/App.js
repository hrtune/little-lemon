import "./App.css";
import Header from "./components/Header";
import BookTablePage from "./components/BookTablePage";
import Homepage from "./components/Homepage";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/book-a-table" element={<BookTablePage />} />
      </Routes>
    </>
  );
}

export default App;
