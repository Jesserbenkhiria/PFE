import React, { useContext, useState, useEffect } from 'react';
import { Context } from '../../main';
import axios from "axios";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";
import { GoCheckCircleFill } from "react-icons/go";
import { AiFillCloseCircle } from "react-icons/ai";

const Dashboard = () => {
  const { isAuthenticated, user } = useContext(Context);
  const [appointments, setAppointments] = useState([]);
  const [studentCount, setStudentCount] = useState(0);


  useEffect(() => {
    const fetchAppointments = async () => {
      try {
        const { data } = await axios.get("http://127.0.0.1:4000/api/v1/appointment/getAllAppointment", {
          withCredentials: true
        });
        setAppointments(data.allAppointment);
      } catch (error) {
        setAppointments([]);
      }
    };
    const fetchStudentCount = async () => {
      try {
        const { data } = await axios.get("http://127.0.0.1:4000/api/v1/user/count", {
          withCredentials: true
        });
        setStudentCount(data.studentCount);
      } catch (error) {
        toast.error(error.response.data.message);
      }
    };
    fetchAppointments();
    fetchStudentCount();
  }, []);

  const handleUpdateStatus = async (appointmentId, status) => {
    try {
      const { data } = await axios.put(
        `http://127.0.0.1:4000/api/v1/appointment/update/${appointmentId}`,
        { status },
        { withCredentials: true }
      );
      setAppointments((prevAppointments) =>
        prevAppointments.map((appointment) =>
          appointment._id === appointmentId
            ? { ...appointment, status }
            : appointment
        )
      );
      toast.success(data.message);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return (
    <section className="dashboard page">
      <div className="banner">
        <div className="firstBox">
          <img src="/avatar.png" alt="avatar" />
          <div className="content">
            <div>
              <p>Bonjour ,</p>
              <h5>{user && `${user.firstName} ${user.lastName}`}</h5>
            </div>
          </div>
        </div>
        <div className="secondBox">
          <p>Les Rendez-Vous</p>
          <h3>1500</h3>
        </div>
        <div className="thirdBox">
          <p>Les Inscrit</p>
          <h3>{studentCount}</h3>
        </div>
      </div>
      <div className="banner">
        <h5>Rendez-Vous</h5>
        <table>
          <thead>
            <tr>
              <th>Étudiant</th>
              <th>Email</th>
              <th>Mobile</th>
              <th>Date</th>
              <th>Niveau anglais</th>
              <th>Visite</th>
              <th>Statut</th>
            </tr>
          </thead>
          <tbody>
            {appointments && appointments.length > 0 ? (
              appointments.map(appointment => (
                <tr key={appointment._id}>
                  <td>{`${appointment.firstName} ${appointment.lastName}`}</td>
                  <td>{appointment.email}</td>
                  <td>{appointment.phone}</td>
                  <td>{new Date(appointment.appointment_date).toLocaleDateString()}</td>
                  <td>{appointment.levelEnglish}</td>
                  <td>{appointment.hasVisited === true ? <GoCheckCircleFill  className="green"/> : <AiFillCloseCircle  className="red"/>}</td>
                  <td>
                    <select   className={
                            appointment.status === "Pending"
                              ? "value-pending"
                              : appointment.status === "Accepted"
                              ? "value-accepted"
                              : "value-rejected"
                          }
                          value={appointment.status}
                          onChange={(e) =>
                            handleUpdateStatus(appointment._id, e.target.value)
                          }  >
                      <option value="Pending"  className="value-pending">En attente</option>
                      <option value="Accepted"  className="value-accepted">Confirmer</option>
                      <option value="Rejected" className="value-rejected">Réfuser</option>
                    </select>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5">Aucun rendez-vous trouvé!</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Dashboard;
