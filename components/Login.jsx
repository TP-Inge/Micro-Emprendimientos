import React from "react";
import "../css/login.css";
import "../css/title.css"

const Login = ({ handleSubmit }) => {
  return (
    <>
      <h1 className="title">Micro-Emprendimientos</h1>
      <div className="login">
        <h5>Ingresar</h5>
        <input
          className="controles"
          type="text"
          name="usuario"
          placeholder="Usuario"
        />
        <input
          className="controles"
          type="password"
          name="password"
          placeholder="Password"
        />

        <button className="boton" onClick={handleSubmit}>
          Submit
        </button>

        <p>
          <a href="#">forgot your password?</a>
        </p>
      </div>
    </>
  );
};

export default Login;
