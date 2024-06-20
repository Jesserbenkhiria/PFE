import React, { useContext, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from "./Pages/Home.jsx";
import OurProgram from "./Pages/OurProgram.jsx";
import Appointment from "./Pages/Appointment.jsx"
import Navbar from "./Components/Navbar/Navbar.jsx";
import { Context } from "./main.jsx";
import Login from "./Pages/Login.jsx";
import Register from "./Pages/Register.jsx";
import axios from "axios";
import Footer from "./Components/Footer/Footer.jsx";
import Scroller from "./Pages/Scoller.jsx";
import "./App.css"



const App = () => {
  const { isAuthenticated, setIsAuthenticated, setUser } = useContext(Context);
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:4000/api/v1/user/student/me",
          {
            withCredentials: true,
          }
        );
        setIsAuthenticated(true);
        setUser(response.data.user);
      } catch (error) {
        setIsAuthenticated(false);
        setUser({});
      }
    };
    fetchUser();
  }, [isAuthenticated]);
  return (
    <>
      <Router>
        <Scroller />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<OurProgram />} />
          <Route path="/appointment" element={<Appointment />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
        <ToastContainer position="top-center" />
      </Router>
    </>
  );

}

export default App;