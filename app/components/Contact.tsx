"use client";
import { useState } from "react";

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section className="w-full bg-slate-950 text-white py-20">

      {/* CONTENEDOR CENTRAL */}
      <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12">

        {/* GRID RESPONSIVE */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">

          {/* LEFT */}
          <div className="space-y-8">

            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
                ¿Tienes <span className="text-cyan-400">preguntas?</span>
              </h2>

              <p className="text-gray-400 leading-relaxed max-w-lg">
                Estamos aquí para ayudarte. Escríbenos y te responderemos lo antes posible con toda la información que necesites.
              </p>
            </div>

            <div className="space-y-6">

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 flex items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600">
                  ✉️
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <p className="font-medium break-all">info@fenomenophi.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 flex items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600">
                  📞
                </div>
                <div>
                  <p className="text-sm text-gray-500">Teléfono</p>
                  <p className="font-medium">+54 351 7583697</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-11 h-11 flex items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600">
                  📍
                </div>
                <div>
                  <p className="text-sm text-gray-500">Ubicación</p>
                  <p className="font-medium">Córdoba, Argentina</p>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT FORM */}
          <div>

            <div className="bg-slate-900 border border-white/10 rounded-2xl p-6 sm:p-8 shadow-xl">

              <form onSubmit={handleSubmit} className="space-y-6">

                <div>
                  <label className="text-sm text-gray-400">Tu nombre</label>
                  <input
                    type="text"
                    className="w-full mt-2 p-3 rounded-xl bg-slate-800 border border-white/10 focus:ring-2 focus:ring-cyan-500 focus:outline-none"
                    placeholder="Tu nombre"
                  />
                </div>

                <div>
                  <label className="text-sm text-gray-400">Correo electrónico</label>
                  <input
                    type="email"
                    className="w-full mt-2 p-3 rounded-xl bg-slate-800 border border-white/10 focus:ring-2 focus:ring-cyan-500 focus:outline-none"
                    placeholder="tu@email.com"
                  />
                </div>

                <div>
                  <label className="text-sm text-gray-400">Mensaje</label>
                  <textarea
                    rows={4}
                    className="w-full mt-2 p-3 rounded-xl bg-slate-800 border border-white/10 focus:ring-2 focus:ring-cyan-500 focus:outline-none resize-none"
                    placeholder="¿En qué podemos ayudarte?"
                  />
                </div>
                

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 font-medium"
                  >
                  <a href="https://docs.google.com/forms/d/e/1FAIpQLSerUx9jScfvWCPr1zsSFVn_s_tl1i-l5ZtEi4-UqTQrlantnA/viewform?usp=dialog" target="_blank"   className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-center block">
                    Enviar mensaje
                  </a>

                </button>

                {sent && (
                  <p className="text-green-400 text-sm text-center">
                    Mensaje enviado ✔
                  </p>
                )}

              </form>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
