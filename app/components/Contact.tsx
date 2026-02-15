"use client";
import { useState } from "react";

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contacto" className="contact">
      <h2>Contacto</h2>

      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Nombre" required />
        <input type="email" placeholder="Email" required />
        <textarea placeholder="Mensaje" required></textarea>
        <button type="submit">Enviar</button>
      </form>

      {sent && <p className="success">Mensaje enviado ✔</p>}
    </section>
  );
}
