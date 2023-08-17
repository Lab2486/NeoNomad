import React from "react";
import { Link } from "react-router-dom";
import "./CategoryImg.css";

function CategoryImg({ titulo, imagen }) {
  const cardStyle = {
    backgroundImage: `url(${imagen})`,
  };

  return (
    <div className="categoryCard" style={cardStyle}>
      <h3 className="cardTitle">{titulo}</h3>
      <Link className="linkCategory" to={`/${titulo.toLowerCase()}`}>
        Ver más
      </Link>
    </div>
  );
}

export default CategoryImg;
