import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {

  const [costo, setCosto] = useState(0);

  const isCartEmpty = costo === 0;

  class Producto {
    static contadorProductos = 0;

    constructor(nombre, precio) {
      this._idProducto = ++Producto.contadorProductos;
      this._nombre = nombre;
      this._precio = precio;
    }

    toString() {
      return `ID del producto: ${this._idProducto}, Nombre: ${this._nombre}, Precio: ${this._precio}`;
    }
  }
  let articulos =["ropa1", "ropa2", "ropa3", "ropa4","ropa5", "ropa6", "ropa7", "ropa8", "ropa6", "ropa7", "ropa9", "ropa10", "ropa11", "ropa12"]
  const setArticle = (precio, nombre) => {
    const product = new Producto(nombre, precio);
    console.log("Nuevo producto creado:", product);
    setCosto((prevCosto) => prevCosto + precio);
  };

  return (
    <div className="App">
      <section>
        <p>cantidad de articulos: {articulos.length}</p>
        <div className="articles">
          {articulos.map((nombre, index) => (
            <div className="article" key={index}>
              <img src={reactLogo} alt="React Logo" />
              <h5>Artículo: {nombre}</h5>
              <p>Costo: 100</p>
              <button onClick={() => setArticle(100, nombre)}>
                Agregar al carrito
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="cart">
        <h2>Carrito</h2>
        <p>
          <b>
            {isCartEmpty
              ? "Tu carrito está vacío"
              : `El costo total es: $${costo}`}
          </b>
        </p>
      </section>
    </div>
  );
}

export default App;
