import React, { useContext, useState } from 'react'
import "./Login.css"

import { Link, Navigate, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from "react-toastify";
import { Context } from '../../main';


const Login = () => {
  const { isAuthenticated, setIsAuthenticated } = useContext(Context);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const navigateTo = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post(
          "http://127.0.0.1:4000/api/v1/user/login",
          { email, password, confirmPassword, role: "Student" },
          {
            withCredentials: true,
            headers: { "Content-Type": "application/json" },
          }
        )
        .then((res) => {
          toast.success(res.data.message);
          setIsAuthenticated(true);
          navigateTo("/");
          setEmail("");
          setPassword("");
          setConfirmPassword("");
        });
    } catch (error) {
      toast.error(error.response.data.message);

    }
  };
  if (isAuthenticated) {
    return <Navigate to={"/"} />;
  }
  return (
    <div>
      <div className="centered-component">
        <div className='login-form'>
          <h1>Se connecter</h1>
          <form onSubmit={handleLogin}>
            <input
              type='text' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Email' />
            <input
              type='text' value={password} onChange={(e) => setPassword(e.target.value)} placeholder='Votre Mot De Passse SVP'></input>
            <input
              type='text' value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder='Confirmez Votre Mot De Passse'></input>
            <div
              style=
              {
                {
                  gap: "10px",
                  justifyContent: "flex-end",
                  flexDirection: "row"
                }}>
              <p style={{ marginBottom: 0 }}>Non Inscrit?
                 <Link
                to={"/register"}
                style={{ textDecoration: "none", alignItems: "center" }}>Inscrire maintenant
                </Link> </p>

            </div>
            <div style={{ justifyContent: "center", alignItems: "center", display: "flex", marginTop: "30px" }}>
              <button type='sumbit'>Connecter</button>
            </div>
          </form>

        </div>
      </div>
    </div>
  )
}

export default Login
