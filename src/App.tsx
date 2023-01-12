import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { AddToChromePage } from "./pages/addToChrome";
import { HomePage } from "./pages/home";
import { SingInPage } from "./pages/signIn";

function App() {
  const [_currentUser, setCurrentUser] = useState<{
    picture?: string;
    name?: string;
  }>({});
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route
        path="/signIn"
        element={<SingInPage setCurrentUser={setCurrentUser} />}
      />
      <Route path="/addToChrome" element={<AddToChromePage />} />
    </Routes>
  );
}

export default App;
