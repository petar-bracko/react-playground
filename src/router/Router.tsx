import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ContextConsumer, ContextMutator, Homepage, UseStateHell } from "pages";
import { NavBar } from "components";

export const Router = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <div id="page">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/useStateHell" element={<UseStateHell />} />
          <Route path="/contextConsumer" element={<ContextConsumer />} />
          <Route path="/contextMutator" element={<ContextMutator />} />
          <Route path="*" element={<div>Unknown route &#x1F6A9;</div>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};
