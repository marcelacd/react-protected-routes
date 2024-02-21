import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import StateLogin from "./useContext/loginContext/StateLogin";
import { Admin, Analytics, Dashboard, Home, Landing } from "./pages";
import { ProtectedRoute } from "./components/ProtectedRoute";

function App() {
  const [user, setUser] = useState(null);

  const login = () => {
    //Request done
    setUser({
      id: 1,
      name: "Marcela",
      permissions: ["analize"],
      role: ["admin"],
    });
  };

  const logout = () => setUser(null);

  return (
    <StateLogin>
      <BrowserRouter>
        <Navigation />

        {user ? (
          <button onClick={logout}>Logout</button>
        ) : (
          <button onClick={login}>Login</button>
        )}
        <Routes>
          <Route index element={<Landing />} />
          <Route path="/landing" element={<Landing />} />

          {/* Proteger multiples rutas */}
          <Route element={<ProtectedRoute isAllowed={!!user} />}>
            <Route path="/home" element={<Home />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>

          {/* Solo proteger una ruta */}
          <Route
            path="/analytics"
            element={
              <ProtectedRoute
                isAllowed={!!user && user.permissions.includes("analize")}
                redirectTo="/home"
              >
                <Analytics />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin"
            element={
              <ProtectedRoute
                isAllowed={!!user && user.role.includes("admin")}
                redirectTo="/home"
              >
                <Admin />
              </ProtectedRoute>
            }
          />
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
