import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Landing from "./screens/Landing";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
