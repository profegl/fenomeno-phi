export default function Courses() {
  return (
    <section className="courses" id="cursos">

      <p className="courses-label">PROGRAMAS</p>

      <h2 className="courses-title">
        Nuestros <span>Cursos</span>
      </h2>

      <p className="courses-description">
        Programas diseñados especialmente para cada etapa de desarrollo,
        desde los más pequeños hasta adolescentes preparándose para el futuro.
      </p>

      <div className="courses-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

        {/* CARD 1 
        <div className="course-card">
          <div className="course-top blue">
            <div className="course-icon">🤖</div>
            <span className="age-badge">7-9 años</span>
            <h3>Pequeños Inventores</h3>
          </div>

          <div className="course-body">
            <p>
              Introducción al mundo de la robótica con bloques de construcción
              y programación visual.
            </p>

            <div className="tags">
              <span>Robótica</span>
              <span>Programación visual</span>
              <span>Lógica</span>
            </div>

            <div className="course-info">
              <span>⏱ 3 meses</span>
              <span>🌐 Virtual</span>
            </div>

            <button className="btn-gradient blue-btn">
              Más información
            </button>
          </div>
        </div>

        CARD 2 
        <div className="course-card">
          <div className="course-top purple">
            <div className="course-icon">💻</div>
            <span className="age-badge">10-13 años</span>
            <h3>Creadores Digitales</h3>
          </div>

          <div className="course-body">
            <p>
              Programación con Scratch y Python básico.
              Desarrollo de videojuegos y robótica con Arduino.
            </p>

            <div className="tags">
              <span>Scratch</span>
              <span>Python básico</span>
              <span>Arduino</span>
            </div>

            <div className="course-info">
              <span>⏱ 4 meses</span>
              <span>🌐 Online</span>
            </div>

            <button className="btn-gradient purple-btn">
              Más información
            </button>
          </div>
        </div>

         CARD 3 
        <div className="course-card">
          <div className="course-top pink">
            <div className="course-icon">🧠</div>
            <span className="age-badge">14-17 años</span>
            <h3>Futuros Innovadores</h3>
          </div>

          <div className="course-body">
            <p>
              Programación avanzada, inteligencia artificial y
              machine learning con proyectos reales.
            </p>

            <div className="tags">
              <span>Python</span>
              <span>Machine Learning</span>
              <span>IA</span>
            </div>

            <div className="course-info">
              <span>⏱ 6 meses</span>
              <span>🌐 Online</span>
            </div>

            <button className="btn-gradient pink-btn">
              Más información
            </button>
          </div>
        </div>*/}

        <div className="course-card">
          <div className="course-top pink-btn">
            <div className="course-icon">🤖 🦾</div>
            <span className="age-badge">6-17 años</span>
            <h3>Taller de Robótica Online</h3>
          </div>

          <div className="course-body">
            <p>
              Introducción al mundo de la robótica con Arduino. Programación y videojuegos con Scratch y Python básico.
              Electrónica básica, armado de circuitos y su programación.
            </p>

            <div className="tags">
              <span>Robótica</span>
              <span>Pensamiento lógico</span>
              <span>Arduino</span>
            </div>

            <div className="course-info">
              
              <video src=".\assets\img\tALLER Robótica kids (2).mp4" autoPlay loop></video>
            </div>

            <button className="btn-gradient pink-btn"><a href="https://web.whatsapp.com/35175836987">
              Más información</a>
            </button>
          </div>
        </div>

        {/* CARD 2 */}
        <div className="course-card">
          <div className="course-top purple">
            <div className="course-icon">💻 👩🏻‍💻</div>
            <span className="age-badge">12-17 años</span>
            <h3>Programación Web para principiantes</h3>
          </div>

          <div className="course-body">
            <p>
              Programación de paginas web con html, css y js. Paginas estáticas y animaciones. Github y deploy. Práctica con ejemplos. 
            </p>

            <div className="tags">
              <span>HTML</span>
              <span>CSS</span>
              <span>JAVASCRIPT</span>
              
            </div>

            <div className="course-info">
              <video src=".\assets\img\tALLER Robótica kids (1).mp4" autoPlay loop></video>
            </div>

            <button className="btn-gradient purple-btn"> <a href="https://web.whatsapp.com/35175836987">
              Más información</a>
            </button>
          </div>
        </div>

        {/* CARD 3 */}
        <div className="course-card">
          <div className="course-top blue">
            <div className="course-icon">🧠</div>
            <span className="age-badge">Docentes</span>
            <h3>Charla: Robótica en el aula</h3>
          </div>

          <div className="course-body">
            <p>
              Exposición  y charla sobre el uso de la robótica en el aula. Implemetación de un proyecto interdisciplinas: 
              Lengua y Tecnología
            </p>

            <div className="tags">
              <span>Robótica</span>
              <span>Interdisciplinas</span>
              <span>Tecnología</span>
            </div>

            <div className="course-info">
              
              <img src=".\assets\img\phi_6.jpg"></img>
            </div>

            <button className="btn-gradient blue"><a href="https://web.whatsapp.com/35175836987">
              PRÓXIMAMENTE</a>
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
