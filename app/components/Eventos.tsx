type Props = {
  onClose: () => void;
};

export default function Eventos({ onClose }: Props) {
  return (
    <div className="eventos-overlay">

      {/* FONDO OSCURO */}
      <div className="eventos-backdrop" onClick={onClose}></div>

      {/* CONTENIDO */}
      <div className="eventos-modal">
        <button className="close-btn" onClick={onClose}>✖</button>

        <h1>Eventos y Talleres</h1>

        <div className="eventos-grid">
          <div className="evento-card">
            <h3>🤖 Taller Arduino</h3>
            <p>Experiencia práctica con sensores.</p>
          </div>

          <div className="evento-card">
            <h3>🎬 Animaciones con Impress</h3>
            <p>Creá animaciones con software libre.</p>
          </div>
        </div>
      </div>

    </div>
  );
}