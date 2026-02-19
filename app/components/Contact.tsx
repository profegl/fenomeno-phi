"use client";
import { useState } from "react";

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section className="w-full bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white py-24 margenc" id="contacto">
      
      {/* CONTENEDOR CENTRAL */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        
      <div className="grid grid-cols-2 lg:grid-cols-2 gap-10 items-center">
          
          {/* LEFT SIDE */}
          <div className="space-y-18">
            
            <div>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-8">
                ¿Tienes <span className="text-cyan-400">preguntas?</span>
              </h2>

              <p className="text-gray-300 mt-16 leading-relaxed max-w-lg">
                Estamos aquí para ayudarte. Escríbenos y te responderemos lo antes posible
                con toda la información que necesites sobre nuestros cursos.
              </p>
            </div>

            <div className="space-y-6">
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 shadow-lg shadow-cyan-500/30 shrink-0">
                  ✉️
                </div>
                <div>
                  <p className="text-sm text-gray-400">Email</p>
                  <p className="font-medium break-words">phifenomeno@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4 mt-5">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 shadow-lg shadow-cyan-500/30 shrink-0">
                  📞
                </div>
                <div>
                  <p className="text-sm text-gray-400">Teléfono</p>
                  <p className="font-medium">+54 3517583697 </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 shadow-lg shadow-cyan-500/30 shrink-0">
                  📍
                </div>
                <div>
                  <p className="text-sm text-gray-400">Ubicación</p>
                  <p className="font-medium">Córdoba, Argentina</p>
                </div>
              </div>

            </div>
          </div>

          {/* RIGHT SIDE FORM */}
          <div className="w-full flex justify-center lg:justify-end">
            
            <div className="w-full max-w-xl bg-white/5 backdrop-blur-md p-10 rounded-2xl border border-white/10 shadow-2xl">
              
              <form onSubmit={handleSubmit} className="space-y-6">
                
                <div>
                  <label className="text-sm text-gray-300">Tu nombre</label>
                  <input
                    type="text"
                    className="w-full mt-2 p-3 rounded-xl bg-slate-800 border border-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    placeholder="Tu nombre"
                    required
                  />
                </div>

                <div>
                  <label className="text-sm text-gray-300">Correo electrónico</label>
                  <input
                    type="email"
                    className="w-full mt-2 p-3 rounded-xl bg-slate-800 border border-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    placeholder="tu@email.com"
                    required
                  />
                </div>

                <div>
                  <label className="text-sm text-gray-300">Mensaje</label>
                  <textarea
                    rows={4}
                    className="w-full mt-2 p-3 rounded-xl bg-slate-800 border border-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-500 resize-none"
                    placeholder="¿En qué podemos ayudarte?"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:opacity-90 transition shadow-lg shadow-cyan-500/30 hover:scale-[1.02] active:scale-[0.98]"
                >
                  Enviar mensaje
                </button>

                {sent && (
                  <p className="text-green-400 text-sm text-center">
                    Mensaje enviado correctamente ✔
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
