export default function Courses() {
  return (
    <section id="cursos" className="courses">
      <h2>Nuestros Programas</h2>

      <div className="courses-grid">
        <div className="course-card">
          <h3>Robótica Inicial</h3>
          <p>Construcción y programación con Arduino.</p>
        </div>

        <div className="course-card">
          <h3>Programación Creativa</h3>
          <p>Desarrollo con Scratch y Python.</p>
        </div>

        <div className="course-card premium">
          <h3>IA para Jóvenes</h3>
          <p>Introducción a Machine Learning y visión artificial.</p>
        </div>
      </div>
    </section>
  );
}
