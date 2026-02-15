"use client";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <img src="/assets/img/FenomenoPhi__04_EscaladeGrises_Negativo(fondoOscuro)-04.png" className="logo"></img>
      <div className="logoName"></div>

      <ul className={`nav-links ${open ? "active" : ""}`}>
        <li><a href="#inicio">Inicio</a></li>
        <li><a href="#about">Sobre</a></li>
        <li><a href="#cursos">Cursos</a></li>
        <li><a href="#galeria">Galería</a></li>
        <li><a href="#contacto">Contacto</a></li>
      </ul>

      <div className="hamburger" onClick={() => setOpen(!open)}>
        ☰
      </div>
    </nav>
  );
}

