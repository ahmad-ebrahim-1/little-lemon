import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/icons/logo.svg";
import "./nav.css";

export default function Nav() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    let navLinks = document.querySelectorAll(".nav-item");
    for (let i = 0; i < navLinks.length; i++) {
      navLinks[i].addEventListener("click", () => {
        setIsVisible(false);
      });
    }
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <nav className="nav-bar">
      <img className="logo" src={logo} alt="Logo" onClick={scrollToTop} />
      <div onClick={() => setIsVisible(!isVisible)} className="hamburger">
        <span className={isVisible ? "line x-line" : "line"}></span>
        <span className={isVisible ? "line x-line" : "line"}></span>
        <span className={isVisible ? "line x-line" : "line"}></span>
      </div>
      <ul className={isVisible ? "nav-items visible" : "nav-items"}>
        <li className="nav-item">
          <Link to="/little-lemon/" className="router-link">
            Home
          </Link>
        </li>
        {/* <li className="nav-item">
          <Link to="/little-lemon/" className="router-link">
            About
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/little-lemon/" className="router-link">
            Menu
          </Link>
        </li> */}
        <li className="nav-item">
          <Link to="/little-lemon/booking-table" className="router-link">
            Reservations
          </Link>
        </li>
        {/* <li className="nav-item">
          <Link to="/little-lemon/" className="router-link">
            Order Online
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/little-lemon/" className="router-link">
            Login
          </Link>
        </li> */}
      </ul>
    </nav>
  );
}
