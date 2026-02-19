export default function Hero() {
  return (
    <section className="hero" id="inicio">

      {/* ICONOS FLOTANTES */}

<img
  src="/assets/img/bot.png"
  className="floating-icon icon-left-top float-1"
  alt="decoración"
/>

<img
  src="/assets/img/robotica.png"
  className="floating-icon icon-left-bottom float-2"
  alt="decoración"
/>

<img
  src="/assets/img/tecnologia.png"
  className="floating-icon icon-right float-3"
  alt="decoración"
/>


      {/* CONTENIDO REAL */}

      <span className="badge">✨ Educación del futuro, hoy</span>

      <h1>
        Fenómeno <span>Phi</span>
      </h1>

      <h3>Robótica, Programación e Inteligencia Artificial</h3>

      <p>
        Preparamos a niñ@s y adolescentes de 7 a 17 años
        para liderar el mundo tecnológico del mañana.
      </p>

      <div className="stats">
        <div className="stat-card">
          <h2>7-17</h2>
          <p>años</p>
        </div>

        <div className="stat-card">
          <h2>3+</h2>
          <p>programas</p>
        </div>

        <div className="stat-card">
          <h2><span>∞ Infinitas ∞</span></h2>
          <p>posibilidades</p>
        </div>
      </div>

      <div className="hero-buttons">
        <button className="btn-primary">Inscribirse ahora</button>
        <button className="btn-secondary"> <a href="#cursos">Ver cursos</a></button>
      </div>

    </section>
  );
}
