import React, { useContext } from "react";
import { loginContext } from "../../useContext/loginContext/LoginContext";
import { Link, Route, Router, Routes, useNavigate } from "react-router-dom";
import Home from "../home/Home";

export const Login = () => {
  const { login, loginUser } = useContext(loginContext);
  const navigate = useNavigate();

  const redirectToHome = () => {
    navigate("/home/*"); // Navegar a la ruta '/home'
  };

  return (
    <>
      {login.isLogin ? (
        // redirectToHome()
        <Home></Home>
      ) : (
        <>
          <h1>Inicio de sesion</h1>
          <hr />

          <button onClick={() => loginUser()}>Iniciar sesion</button>
          <div>
            ¿No tienes una cuenta?<Link to="/register">Crear cuenta</Link>
          </div>
        </>
      )}
    </>
  );
};

export default Login;
