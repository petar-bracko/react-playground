import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Homepage, UseStateHell } from "pages";
import { NavBar } from "components";

export const Router = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/useStateHell" element={<UseStateHell />} />
      </Routes>
    </BrowserRouter>
  );
};
