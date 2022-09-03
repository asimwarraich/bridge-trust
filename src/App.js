import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Landing from "./screens/Landing";
import Invester from "./screens/Invester";
import Contact from "./screens/Contact";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/invester" element={<Invester />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
