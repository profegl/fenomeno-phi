export default function About() {
  return (
    <section className="about">
      <h2>Sobre Fenómeno Phi</h2>

      <p>
        Fenómeno Phi es un espacio educativo innovador dedicado
        a la enseñanza de robótica, programación e inteligencia
        artificial para niños, niñas y adolescentes. Nos basamos en la enseñanza Maker. Nuestros ejes centrales son:
      </p>

      <div className="about-grid">
        <div className="about-card">
          <h3>Aprendizaje práctico</h3>
          <p>Basado en proyectos reales y desafíos tecnológicos.</p>
          <img className="about_img" src="/assets/img/phi_4.jpg"></img>

        </div>

        <div className="about-card">
          <h3>Pensamiento lógico</h3>
          <p>Desarrollamos habilidades fundamentales para el futuro.</p>
          <img className="about_img" src="/assets/img/phi_8.jpg"></img>
        </div>

        <div className="about-card">
          <h3>Creatividad e innovación</h3>
          <p>Convertimos ideas en proyectos tecnológicos.</p>
          <img className="about_img" src="/assets/img/phi_12.jpg"></img>
        </div>
      </div>
    </section>
  );
}
