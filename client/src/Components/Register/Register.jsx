import React, { useContext, useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import { Context } from '../../main';

const Register = () => {
  const { isAuthenticated, setIsAuthenticated } = useContext(Context);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [genre, setGenre] = useState("");
  const [password, setPassword] = useState("");
  const [levelEnglish, setLevelEnglish] = useState("");
  const navigateTo = useNavigate()

  const handleRegister = async (e) => {
    e.preventDefault()
    try {
      await axios
        .post(
          "http://127.0.0.1:4000/api/v1/user/student/register",
          { firstName, lastName, email, phone, genre, password, levelEnglish, role: "Student" },
          {
            withCredentials: true,
            headers: { "Content-Type": "application/json" },
          }
        )
        .then((res) => {
          toast.success(res.data.message);
          setIsAuthenticated(true);
          navigateTo("/login");
          setFirstName("");
          setLastName("");
          setEmail("");
          setPhone("");
          setGenre("");
          setPassword("");
        });
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  if (isAuthenticated) {
    return <Navigate to={"/"} />
  }

  return (
    <div className="centered-component">
      <div className="form-component ">
        <h2>S'inscrire</h2>
        <form onSubmit={handleRegister}>
          <div>
            <input type='text' placeholder='Nom' value={firstName} onChange={(e) => setFirstName(e.target.value)} />
            <input type='text' placeholder='Prénom' value={lastName} onChange={(e) => setLastName(e.target.value)} />
            <input type='email' placeholder='email' value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type='tel' placeholder='Num de Téléphone' value={phone} onChange={(e) => setPhone(e.target.value)} />
            <div >
              <div style={{display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "row" }}>
                <label>
                  Homme
                </label>
                <input
                  type="radio"
                  name="genre"
                  value="Homme"
                  checked={genre === "Homme"}
                  onChange={(e) => setGenre(e.target.value)}
                />
              </div>
              <div style={{display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "row" }}>
             
              
                 <label>
                Femme
              </label>
              <input
                  type="radio"
                  name="genre"
                  value="Femme"
                  checked={genre === "Femme"}
                  onChange={(e) => setGenre(e.target.value)}
                />
              </div>
            </div>
            <select value={levelEnglish} onChange={(e) => setLevelEnglish(e.target.value)}>
              <option value="">Niveau d'Anglais</option>
              <option value="A1">A1</option>
              <option value="A2">A2</option>
              <option value="B1">B1</option>
              <option value="B2">B2</option>
              <option value="C1">C1</option>
              <option value="C2">C2</option>
            </select>
            <input
              type='password'
              placeholder='Mot de passe'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div style={{ gap: "10px", justifyContent: "flex-end", flexDirection: "row" }}>
            <p style={{ marginBottom: 0 }}>Déjà inscrit? <Link to={"/login"}
              style={{ textDecoration: "none", color: "#271776ca" }}
            >
              Connecter
            </Link></p>
          </div>
          <div  className="login-form" style={{ justifyContent: "center", alignItems: "center", display: "flex", marginTop: "30px" }}>
            <button type='submit'>Enregistrer</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Register
