import React, { useState } from "react";

import { BrowserRouter as Router, Route,Routes, Navigate } from "react-router-dom";
import Home1 from "./Pages/Home1";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "./theme";
import Login from "../../admin/src/components/Login/Login";



import  { useContext, useEffect } from "react";
import 'react-toastify/dist/ReactToastify.css';
import { Context } from "./main.jsx";

import axios from "axios";
import Dashboard from "../../admin/src/components/Dashbord/Dashbord.jsx";
import AddNewAdmin from "../../admin/src/components/AddAdmin/AddNewAdmin.jsx";
import Students from "../../admin/src/components/Students/Students.jsx";
import Message from "../../admin/src/components/Message/Message.jsx";


const App1=()=>{
    const { isAuthenticated, setIsAuthenticated, setUser } = useContext(Context);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const fetchUser = async () => {
        try {
          const response = await axios.get("http://127.0.0.1:4000/api/v1/user/admin/me", {
            withCredentials: true,
          });
          setIsAuthenticated(true);
          setUser(response.data.user);
        } catch (error) {
          setIsAuthenticated(false);
          setUser({});
        } finally {
          setLoading(false);
        }
      };
      fetchUser();
    }, [setIsAuthenticated, setUser]);
  
    if (loading) {
      return <div>Loading...</div>;
    }
    return (
        <>
        < ThemeProvider theme={theme} >
        <CssBaseline/>
        <Router>
        <Routes>


        <Route path="/" element={<Home1 />} />
        <Route path="/login" element={<Login />} />
       

        </Routes>
         </Router>
        </ThemeProvider>
         

        </>
    )
}
export default App1;
  