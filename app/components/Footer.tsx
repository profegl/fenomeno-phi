export default function Footer() {
  return (
    <footer className="footer" id="contacto">
      <div className="footer-container">
        
        <div className="footer-section">
          <h3>Fenómeno Phi</h3>
          <p>Educación en robótica, programación e IA para jóvenes.</p>
        </div>

        <div className="footer-section">
          <h4>Contacto</h4>
          <p>📍 Córdoba, Argentina</p>
          <p>📧 phifenomeno@gmail.com</p>
          <p>📞 +54 351 7583697</p>
        </div>

        <div className="footer-section">
          <h4>Seguinos</h4>
          <div className="socials">
            <a href="#" target="_blank">Instagram</a>
            <a href="#" target="_blank">Facebook</a>
            <a href="#" target="_blank">LinkedIn</a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
        © {new Date().getFullYear()} Fenómeno Phi — Todos los derechos reservados
      </div>
    </footer>
  );
}
