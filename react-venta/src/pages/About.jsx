import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <h1>Sobre Nosotros</h1>
      <p>Bienvenido a la página de información sobre el e-commerce.</p>
      <Link to="/">Volver a Home</Link>
    </div>
  );
};

export default About;
