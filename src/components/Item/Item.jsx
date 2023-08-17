import "./Item.css";
import { BsHeart } from "react-icons/bs";

function Item({ nombre, categoria, precio, imagen, descripcion }) {
  const precioConDescuento = precio * 0.8;

  const precioRedondeado = precioConDescuento.toFixed(2);
  return (
    <div className="itemContainer">
      <main className="itemMain">
        <aside className="imageContainer">
          <img src={imagen} alt="" />
        </aside>
        <div className="itemInfoCont ">
          <header className="itemHeader">
            <h3 className="productName">{nombre}</h3>
            <a href="#" className="fav-btn">
              <BsHeart />
            </a>
          </header>
          <div className="itemCenter">
            <p className="itemDescription">{descripcion}</p>
            <div className="priceCont">
              <p className="productPrice">$ {precioRedondeado}</p>
              <p className="productPriceFull">${precio}</p>
              <p className="descuento">20% off</p>
            </div>
          </div>
          <div className="itemFooter">
            <div className="talles">
              <button className="tallesBtn">S</button>
              <button className="tallesBtn">M</button>
              <button className="tallesBtn">L</button>
              <button className="tallesBtn">XL</button>
            </div>
            <div className="footerBtnsCont">
              <button className="footerBtn">Buy Now</button>
              <button className="footerBtn">Add to Cart</button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Item;
