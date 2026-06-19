export default function About() {
  return (
    <section className="about" id="sobre">

      <p className="about-label">QUIÉNES SOMOS</p>

      <h2 className="about-title">
        Sobre <span>Fenómeno Phi</span>
      </h2>

      {/* CONTENEDOR FLEX */}
      <div className="about-container">

        {/* IMAGEN */}
        <div className="about-image">
          <img src="/assets/img/fotocv.jpg" alt="Laura - Fenómeno Phi" />
        </div>

        {/* TEXTO */}
        <div className="about-text">
          <p>
            Soy Laura, la fundadora y mentora de Fenómeno Phi, un espacio donde la tecnología se transforma en una herramienta para crear, pensar y construir ideas propias.
            Trabajo enseñando programación, robótica, desarrollo web e inteligencia artificial a niños, niñas y adolescentes, en modalidad online.
            Creo que la tecnología no debería ser solo consumo, sino comprensión, creatividad y autonomía.
          </p>

          <p>
            En cada clase busco que mis estudiantes no solo aprendan a programar, sino que desarrollen pensamiento lógico, capacidad de resolución de problemas y confianza para animarse a crear sus propios proyectos.
          </p>

          <p>
            Fenómeno Phi nació con una misión clara: acompañar a las nuevas generaciones para que pasen de usar tecnología… a construirla.
          </p>
        </div>

      </div>

      {/* CARDS */}
      <p className="about-label">Nuestros pilares son:</p>
      <div className="about-features">
        
        <div className="feature-card">
          <img src="/assets/img/idea-genial.png" className="feature-icon" />
          <h4 className="about-label">Aprendizaje Creativo</h4>
          <p>Metodología basada en proyectos reales.</p>
        </div>

        <div className="feature-card">
          <img src="/assets/img/grupo-de-personas.png" className="feature-icon" />
          <h4 className="about-label">Grupos reducidos</h4>
          <p>Atención personalizada.</p>
        </div>

        <div className="feature-card">
          <img src="/assets/img/ensenar.png" className="feature-icon" />
          <h4 className="about-label">Tecnología en tendencia</h4>
          <p>Herramientas actuales.</p>
        </div>

        <div className="feature-card">
          <img src="/assets/img/bienestar.png" className="feature-icon" />
          <h4 className="about-label">Pasión por enseñar</h4>
          <p>Inspirando a la próxima generación.</p>
        </div>
      </div>

    </section>
  );
}