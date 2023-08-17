import { useParams } from "react-router-dom";
import { productos } from "../../../asyncMock";
import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css";

function ItemListContainer() {
  const { pais, tipo, categoria } = useParams();

  // Filtrar por país y tipo si ambos parámetros están presentes
  const productosFiltrados = productos.filter(
    (producto) =>
      (!pais || producto.pais === pais) &&
      (!categoria || producto.categoria === categoria)
  );

  return (
    <div className="itemListContainer">
      <ItemList productos={productosFiltrados} />
    </div>
  );
}

export default ItemListContainer;
