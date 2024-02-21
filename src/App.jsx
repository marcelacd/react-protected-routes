import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import StateLogin from "./useContext/loginContext/StateLogin";
import { Admin, Analytics, Dashboard, Home, Landing } from "./pages";

function App() {
  Navigation();

  return (
    <StateLogin>
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route index element={<Landing />} />
          <Route path="/landing" element={<Landing />} />
          <Route path="/home" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/admin" element={<Admin />} />
        </Routes>
      </BrowserRouter>
    </StateLogin>
  );
}

const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/landing">Loading</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link to="/home">Home</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link to="/Analytics">Analytics</Link>
        </li>
      </ul>
      <ul>
        <li>
          <Link to="/admin">Admin</Link>
        </li>
      </ul>
    </nav>
  );
};

export default App;
