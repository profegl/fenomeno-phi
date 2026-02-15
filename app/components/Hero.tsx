export default function Hero() {
  return (
    <section className="hero">
      <span className="badge">✨ Educación del futuro, hoy</span>

      <h1>
        Fenómeno <span>Phi</span>
      </h1>

      <h3>Robótica, Programación e Inteligencia Artificial</h3>

      <p>
        Preparamos a niñ@s y adolescentes de 7 a 17 años
        para liderar el mundo tecnológico del mañana.
      </p>

      
        {/* STATS PRIMERO */}
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

{/* BOTONES DEBAJO */}
<div className="hero-buttons">
  <button className="btn-primary">Inscribirse ahora</button>
  <button className="btn-secondary">Ver cursos</button>
</div>

      
    </section>
  );
}
