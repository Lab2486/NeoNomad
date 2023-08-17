import React from "react";
import CategoryImg from "../CategoryImg/CategoryImg";
import "./CategoryImgContainer.css";

const presentacion = [
  {
    titulo: "Remeras",
    categoria: "remeras",
    imagen:
      "https://www.distritomoda.com.ar/sites/default/files/styles/producto_interior/public/imagenes/bfa797bb-3b6b-469c-a0dc-e1725043bfc6_1690851386.jpeg?itok=z1eDQtMk",
  },
  {
    titulo: "Pantalones",
    categoria: "pantalones",
    imagen:
      "https://www.distritomoda.com.ar/sites/default/files/styles/producto_interior/public/imagenes/whatsapp_image_2023-08-01_at_22.49.52_1690978237.jpeg?itok=NopIculH",
  },
  {
    titulo: "Accesorios",
    categoria: "accesorios",
    imagen:
      "https://www.distritomoda.com.ar/sites/default/files/styles/producto_interior/public/imagenes/sweater_varon_plush_sinless_by_mch_beige_1689164887.jpeg?itok=oJez1cX8",
  },
];

function CategoryImgContainer() {
  return (
    <div className="categoryImgContainer">
      {presentacion.map((categoria) => (
        <CategoryImg
          key={categoria.categoria}
          titulo={categoria.titulo}
          imagen={categoria.imagen}
        />
      ))}
    </div>
  );
}

export default CategoryImgContainer;
