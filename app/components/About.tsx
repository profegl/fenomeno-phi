export default function About() {
  return (
    <section className="about" id="sobre">
      
      <p className="about-label">QUIÉNES SOMOS</p>

      <h2 className="about-title">
        Sobre <span>Fenómeno Phi</span>
      </h2>

      <p className="about-description">
        Somos un emprendimiento educativo dedicado a despertar el interés 
        por la tecnología en niños y adolescentes, preparándolos para los 
        desafíos del futuro a través de experiencias prácticas y divertidas.
      </p>

      

      {/* CARDS INFERIORES */}
      <div className="about-features">

        <div className="feature-card">
          
          <div className="feature-content">
            <img src="assets\img\idea-genial.png" className="feature-icon" alt="Aprendizaje creativo"></img>
            
            <h4>Aprendizaje Creativo</h4>
            <p>
              Metodología basada en proyectos reales que estimulan la creatividad y el pensamiento crítico.
            </p>
          </div>
        </div>

        <div className="feature-card">
          <div className="feature-content">
            <img src="assets\img\grupo-de-personas.png" className="feature-icon" alt="Aprendizaje creativo"></img>
            <h4>Grupos reducidos</h4>
            <p>
            Atención personalizada con grupos pequeños para maximizar el aprendizaje de cada estudiante.
            </p>
          </div>
            
        </div>

        <div className="feature-card">
          <div className="feature-content">
            <img src="\assets\img\ensenar.png" className="feature-icon" alt="Aprendizaje creativo"></img>
            <h4>Tecnología en tendencia</h4>
            <p>
            Herramientas digitales y estrategias de enseñanzas adaptadas para cada edad.</p>
          </div>
            
        </div>
        <div className="feature-card">
          <div className="feature-content">
            <img src="\assets\img\bienestar.png" className="feature-icon" alt="Aprendizaje creativo"></img>
            <h4>Pasión por enseñar</h4>
            <p>
            Instructores apasionados que inspiran y guían a la próxima generación de innovadores
            </p>
          </div>
            
        </div>

      </div>      


    </section>
  );
}
