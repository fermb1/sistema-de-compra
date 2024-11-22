import React, { useState } from "react";
import { Link } from "react-router-dom";
import remera1 from "../assets/remera1.png"; // Ajusta la ruta según tu estructura de proyecto
import "./app.css";
import "./index.css"; // Archivo de estilos para Home

const Home = () => {
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

  const [signin, setSignin] = useState(false);
  const [costo, setCosto] = useState(0);

  const articulos = ["ropa1", "ropa2", "ropa3", "ropa4", "ropa5", "ropa6"];
  const imges = [remera1];

  const setArticle = (precio, nombre) => {
    const product = new Producto(nombre, precio);
    console.log("Nuevo producto creado:", product.toString());
    setCosto((prevCosto) => prevCosto + precio);
  };

  return (
    <div className="home-container">
      <section>
        <div className="articles">
          {articulos.map((nombre, index) => (
            <div className="article" key={index}>
              <img className="img-app" src={imges[0]} alt={nombre} />
              <h5>Artículo: {nombre}</h5>
              <p>$45.000 ARS</p>
              <button onClick={() => setArticle(45000, nombre)}>
                Agregar al Carrito
              </button>
            </div>
          ))}
        </div>
      </section>

      <div className="header">
        <h3 className="title-name">E-commerce</h3>
        {signin ? <p>Bienvenido, Usuario</p> : <p>Por favor, inicia sesión</p>}
        <button className="log-button" onClick={() => setSignin(!signin)}>
          <link to="/about"/>{signin ? "Cerrar Sesión" : "Iniciar Sesión"}
        </button>
      </div>

      <footer>
        <p>Total Gastado: ${costo.toLocaleString()} ARS</p>
      </footer>
    </div>
  );
};

export default Home;
