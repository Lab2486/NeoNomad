import "./Navbar.css";
import { AiOutlineUser, AiOutlineHome, AiOutlineMessage } from "react-icons/ai";
import { BsCart } from "react-icons/bs";
import { Link } from "react-router-dom";
import { PiTShirt, PiPants, PiBaseballCap } from "react-icons/pi";
import { GiMonclerJacket } from "react-icons/gi";

function Navbar() {
  return (
    <>
      <div className="navbarContainer">
        <nav className="nav">
          <li className="loginCont">
            <Link to="/login" className="nav-btn login-btn">
              <AiOutlineUser className="user" />
            </Link>
          </li>
          <ul className="navOptions">
            <li className="navLinksCont">
              <Link to="/" className="navLinks">
                <AiOutlineHome />
                HOME
              </Link>
            </li>
            <li className="navLinksCont">
              <Link to="/cart" className="navLinks">
                <BsCart />
                CART
              </Link>
            </li>
            <li className="navLinksCont">
              <Link to="/remeras" className="navLinks">
                <PiTShirt />
                TSHRTS
              </Link>
            </li>
            <li className="navLinksCont">
              <Link to="/pantalones" className="navLinks">
                <PiPants />
                PANTS
              </Link>
            </li>
            <li className="navLinksCont">
              <Link to="/accesorios" className="navLinks">
                <PiBaseballCap />
                ACCESORIES
              </Link>
            </li>
            <li className="navLinksCont">
              <Link to="/abrigos" className="navLinks">
                <GiMonclerJacket />
                COATS
              </Link>
            </li>
            <li className="navLinksCont">
              <Link to="/contacto" className="navLinks">
                <AiOutlineMessage />
                CONTACT
              </Link>
            </li>
          </ul>
          <footer className="navFooter">
            <p>©Neo Nomad, 2023</p>
            <p>Designed by Lab2486</p>
            <p>
              Clothes designs by{" "}
              <a href="https://www.instagram.com/yagisama.art/">Yagisama</a>
            </p>
          </footer>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
