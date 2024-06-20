import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import "./messageForm.css";
import image from "./image.jpeg"
const MessageForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleMessage = async (e) => {
    e.preventDefault();
    try {
      await axios
        .post(
          "http://127.0.0.1:4000/api/v1/message/send",
          { firstName, lastName, email, phone, message },
          {
            withCredentials: true,
            headers: { "Content-Type": "application/json" },
          }
        )
        .then((res) => {
          toast.success(res.data.message);
          setFirstName("");
          setLastName("");
          setEmail("");
          setPhone("");
          setMessage("");
        });
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center",marginTop:"100px",background:"#fafafa"}}>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
        <div className="form-component" style={{ height: "100%" }}>
          <h2>Envoyer Un Message</h2>
          <form onSubmit={handleMessage}>
            <div>
              <input
                type="text"
                placeholder="Tapez votre nom"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <input
                type="text"
                placeholder="Tapez votre prénom"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Tapez votre Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="text"
                placeholder="Tapez votre téléphone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <textarea
              rows={7}
              placeholder="Votre message s'il vous plait!"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />

            <div style={{ justifyContent: "center", alignItems: "center" }}>
              <button type="submit">Envoyer</button>
            </div>
          </form>
        </div>


        <img src={image} alt="" style={{ width: "30%" }} />
      </div>
    </div>


  );
};

export default MessageForm;