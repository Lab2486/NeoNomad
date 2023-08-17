import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "./PaisesDropdown.css";

const PaisesDropdown = () => {
  const paisesLatinoamerica = [
    "Argentina",
    "Bolivia",
    "Brasil",
    "Chile",
    "Colombia",
    "Costa Rica",
    "Cuba",
    "Ecuador",
    "El Salvador",
    "Guatemala",
    "Honduras",
    "México",
    "Nicaragua",
    "Panamá",
    "Paraguay",
    "Perú",
    "Uruguay",
    "Venezuela",
  ];

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  // Usamos useRef para obtener una referencia al contenedor del menú desplegable
  const dropdownRef = useRef();

  const handleDropdownToggle = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Usamos useEffect para agregar un evento click al body y cerrar el menú desplegable cuando se hace clic fuera de él
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <li ref={dropdownRef} className="dropdownContainer">
      {" "}
      {/* Agregar la clase dropdownContainer */}
      <span className="navLinks" onClick={handleDropdownToggle}>
        Paises
      </span>
      {isDropdownOpen && (
        <ul className="dropdownMenu">
          {paisesLatinoamerica.map((pais) => (
            <li key={pais}>
              <Link to={`/paises/${pais.toLowerCase()}`} className="navLinks">
                {pais}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
};

export default PaisesDropdown;
