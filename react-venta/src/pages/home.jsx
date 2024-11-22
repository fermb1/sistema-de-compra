import React, { useState } from "react";
import { Link } from "react-router-dom";
import remera1 from "../assets/remera1.png"; // Asegúrate de que la imagen esté en esta ubicación
import "./app.css"; // Archivo CSS para estilos

const Home = () => {
  const articulos = ["ropa1", "ropa2", "ropa3", "ropa4", "ropa5", "ropa6"];
  const [signin, setSignin] = useState(false);

  const agregarProducto = (nombre) => {
    console.log(`Producto agregado: ${nombre}`);
  };

  return (
    <div className="home-container">
      <h1>Bienvenido al E-commerce</h1>

      <section className="articles">
        {articulos.map((nombre, index) => (
          <div className="article" key={index}>
            <img className="img-app" src={remera1} alt={`Artículo ${nombre}`} />
            <h5>{nombre}</h5>
            <button onClick={() => agregarProducto(nombre)}>Agregar al carrito</button>
          </div>
        ))}
      </section>

      <footer className="footer">
        <Link to="/about">Ir a la página About</Link>
      </footer>
    
      <div className="header">
        <h3 className="title-name">E-commerce</h3>
        {signin ? <p>Bienvenido, Usuario</p> : <p>Por favor, inicia sesión</p>}
        <button className="log-button" onClick={() => setSignin(!signin)}>
          <Link to="/about">
          {signin ? "Cerrar Sesión" : "Iniciar Sesión"}</Link>
        </button>
      </div>

      <footer>
        <p>Total Gastado: ${costo.toLocaleString()} ARS</p>
      </footer>
    </div>

  )
};

export default Home;
