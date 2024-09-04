import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import CreatePassword from "./pages/CreatePassword";
import EnterOtp from "./pages/EnterOtp";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/create-password" element={<CreatePassword />} />
        <Route path="/enter-otp" element={<EnterOtp />} />
      </Routes>
    </Router>
  );
}

export default App;
