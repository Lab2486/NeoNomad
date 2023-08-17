import Item from "../Item/Item";
import "./ItemList.css";

function ItemList(props) {
  return (
    <div className="itemList">
      {props.productos.map((item) => (
        <Item
          key={item.id}
          id={item.id}
          nombre={item.nombre}
          descripcion={item.descripcion}
          categoria={item.categoria}
          precio={item.precio}
          imagen={item.imagen}
        />
      ))}
    </div>
  );
}

export default ItemList;
