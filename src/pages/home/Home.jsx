import React, { useContext } from "react";
import { loginContext } from "../../useContext/loginContext/LoginContext";
import { Link, Route, Routes } from "react-router-dom";
import Users from "./users/Users";
import Profile from "./profile/Profile";

const Home = () => {
  const { login, loginUser } = useContext(loginContext);

  return (
    <>
      <header>
        <h1>Bienvenido {login.name}</h1>
        <hr />
      </header>

      {/* <nav>
        <ul>
          <li>
            <Link to="users">Users</Link>
          </li>
          <li>
            <Link to="profile/CD">Perfil</Link>
          </li>
        </ul>
      </nav>
      <hr />
      <Routes>
        <Route path="users" element={<Users />} />
        <Route path="profile/:id" element={<Profile />} />
      </Routes> */}

      <footer>
        <button onClick={() => loginUser()}>Cerrar sesión</button>
      </footer>
    </>
  );
};

export default Home;
