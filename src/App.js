import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./Navbar";
import Rent from "./Rent";
import "./App.css";
import { Fragment } from "react";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Rent />} />
      </Routes>
    </BrowserRouter>
  );
}
{
  /* <Rent /> */
}
export default App;
