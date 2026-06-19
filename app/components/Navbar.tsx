"use client";
import { useState } from "react";

type Props = {
  onEventosClick: () => void;
};

export default function Navbar({ onEventosClick }: Props) {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      
      {/* LOGO */}
      <img
        src="/assets/img/FenomenoPhi__04_EscaladeGrises_Negativo(fondoOscuro)-04.png"
        className="logo"
        alt="Fenómeno Phi"
      />

      {/* LINKS */}
      <ul className={`nav-links ${open ? "active" : ""}`}>
        
        <li>
          <a href="#inicio" onClick={() => setOpen(false)}>
            Inicio
          </a>
        </li>

        <li>
          <a href="#sobre" onClick={() => setOpen(false)}>
            Sobre
          </a>
        </li>

        <li>
          <a href="#galeria" onClick={() => setOpen(false)}>
            Galería
          </a>
        </li>

        <li>
          <a href="#cursos" onClick={() => setOpen(false)}>
            Cursos
          </a>
        </li>

        {/* EVENTOS (BOTÓN) 
        <li>
          <button
            className="nav-button"
            onClick={() => {
              onEventosClick();
              setOpen(false);
            }}
          >
            Eventos
          </button>
        </li>-->*/}

      </ul>

      {/* HAMBURGER */}
      <div className="hamburger" onClick={() => setOpen(!open)}>
        {open ? "✖" : "☰"}
      </div>

    </nav>
  );
}

