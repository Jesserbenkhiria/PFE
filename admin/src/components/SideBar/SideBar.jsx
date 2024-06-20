import React, { useContext, useState } from "react";
import { Context } from "../../main";
import { TiHome } from "react-icons/ti";
import { RiLogoutBoxFill } from "react-icons/ri";
import { AiFillMessage } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";

import { MdAddModerator } from "react-icons/md";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { PiStudentBold } from "react-icons/pi";







const SideBar = () => {
    const [show, setShow] = useState(false);
  
    const { isAuthenticated, setIsAuthenticated } = useContext(Context);
    const navigate = useNavigate();
  
    const handleLogout = async () => {
      await axios
        .get("http://127.0.0.1:4000/api/v1/user/admin/logout", {
            withCredentials  : true,
        })
        .then((res) => {
          toast.success(res.data.message);
          setIsAuthenticated(false);
          navigate("/login"); 
        })
        .catch((err) => {
          toast.error(err.response.data.message);
        });
    };
  
    const navigateTo = useNavigate();
  
    const gotoHomePage = () => {
      navigateTo("/");
      setShow(!show);
    };
    const gotoDoctorsPage = () => {
      navigateTo("/students");
      setShow(!show);
    };
    const gotoMessagesPage = () => {
      navigateTo("/messages");
      setShow(!show);
    };
   
    const gotoAddNewAdmin = () => {
      navigateTo("/admin/addnew");
      setShow(!show);
    };
  
    return (
      <>
         <nav
        style={!isAuthenticated ? { display: "none" } : { display: "flex" }}
        className={show ? "show SibeBar" : "SibeBar"}
      >
          <div className="links">
            <TiHome onClick={gotoHomePage} />
            <PiStudentBold onClick={gotoDoctorsPage}/>
         
            <MdAddModerator onClick={gotoAddNewAdmin} />
            <AiFillMessage onClick={gotoMessagesPage} />
            <RiLogoutBoxFill onClick={handleLogout} />
          </div>
        </nav>
        <div
          className="wrapper"
          style={!isAuthenticated ? { display: "none" } : { display: "flex" }}
        >
          <GiHamburgerMenu className="hamburger" onClick={() => setShow(!show)} />
        </div>
      </>
    );
  };
  


export default SideBar
