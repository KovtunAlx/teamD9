import React from "react";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/home";
import { SingInPage } from "./pages/signIn";

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signIn" element={<SingInPage />} />
    </Routes>
  );
}

export default App;
