import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <>
      <h1>Crear cuenta</h1>
      <hr />
      <div>
        ¿Ya tienes una cuenta? <Link to="/">Iniciar sesion</Link>
      </div>
    </>
  );
};

export default Register;
