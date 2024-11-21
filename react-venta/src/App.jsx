import { useState } from "react";
import remera1 from "./assets/remera1.png";
import "./App.css";
function App() {
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
  
  let articulos =["ropa1", "ropa2", "ropa3", "ropa4", "ropa5", "ropa6 "]
  let imges = [remera1]
  const setArticle = (precio, nombre) => {
    const product = new Producto(nombre, precio);
    console.log("Nuevo producto creado:", product);
    setCosto((prevCosto) => prevCosto + precio);
  };

  return (
    <div className="App">
      <section>
        <div className="articles">
          {articulos.map((nombre, index) => (
            <div className="article" key={index}>
              {imges.map((nombre,index)=> (
                <img className="img-app" src={nombre} />
              ))}
              <h5>Artículo: {nombre}</h5>
              <p>$45.000 ARS</p>
              
             </div> 
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;
