import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <Link className="brand" to="/">
        NEO NOMAD
      </Link>
    </div>
  );
}

export default Header;
