import React from "react";
import "./LoginForm.css";

function LoginForm() {
  return (
    <div className="loginFormCont">
      <div className="formLogin">
        <form action="#" className="form">
          <div className="inputCont">
            <label htmlFor="email">Email</label>
            <input type="email" placeholder="Email" />
          </div>
          <div className="inputCont">
            <label htmlFor="password">Contraseña</label>
            <input type="password" placeholder="Contraseña" />
          </div>
          <button className="loginFromBtn">Login</button>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
