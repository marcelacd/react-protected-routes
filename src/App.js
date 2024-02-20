import React from "react";
import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import StateLogin from "./useContext/loginContext/StateLogin";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import NotFound from "./pages/notFound/NotFound";
import Home from "./pages/home/Home";

function App() {
  return (
    <StateLogin>
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          {/* <Route path="/home/*" element={<Home />} /> */}
          {/* <Route exact path="*" element={<NotFound />} /> */}
        </Routes>
      </Router>
      {/* <Login /> */}
    </StateLogin>
  );
}

export default App;
