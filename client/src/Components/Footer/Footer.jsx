import { Link } from "react-router-dom";
import { FaLocationArrow, FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import logo from "/logo.png";
import "./Footer.css";


const Footer = () => {
  const hours = [
    {
      id: 1,
      day: "Lundi",
      time: "9:00 AM - 17:00 AM",
    },
    {
      id: 2,
      day: "Mardi",
      time: "9:00 AM - 17:00 AM",
    },
    {
      id: 3,
      day: "Mercredi",
      time: "9:00 AM - 17:00 AM",
    },
    {
      id: 4,
      day: "Jeudi",
      time: "9:00 AM - 17:00 AM",
    },
    {
      id: 5,
      day: "Vendredi",
      time: "9:00 AM - 17:00 AM",
    },
    {
      id: 6,
      day: "Samedi",
      time: "9:00 AM - 11:00 PM",
    },
  ];

  return (
    <>
      <footer >
        <div className="content" style={{display:"flex",justifyContent:"space-around",alignItems:"flex-startz",marginTop:"50px",width:"70%",marginRight:"auto",marginLeft:"auto"}}>
          <div>
            <img src={logo} alt="logo" className="logo-img"/>
          </div>
          <div>
            <h4 className="footer-title">Services</h4>
            <ul style={{display:"flex",flexDirection:"column"}}>
              <Link className="footer-link" to={"/"}>Acceuil</Link>
              <Link className="footer-link" to={"/appointment"}>Rendez-vous</Link>
              <Link  className="footer-link" to={"/about"}>A propos</Link>
            </ul>
          </div>
          <div>
            <h4 className="footer-title">Heur de travail</h4>
            <ul className="list-time">
              {hours.map((element) => (
                <li key={element.id}>
                  <span>{element.day}</span>
                  <span>{element.time}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="footer-title">Contact</h4>
            <div className="elem">
              <FaPhone />
              <span>+216 71 85 85 85</span>
            </div>
            <div  className="elem">
              <MdEmail />
              <span>hello@rbk.tn</span>
            </div>
            <div  className="elem">
              <FaLocationArrow />
              <span>B24, Technopark Elghazela ariana, 2088, Tunisie</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;