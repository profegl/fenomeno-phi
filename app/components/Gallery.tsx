export default function Gallery() {
  return (
    <section id="galeria" className="gallery">
      <h2>Un poquito de nosotros</h2>

      <div className="gallery-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
        <div className="gallery-item">
          <img src="assets\img\phi_4.jpg"></img>
        </div>
        <div className="gallery-item">
          <img src="assets\img\phi_10.jpg"></img>
        </div>
        <div className="gallery-item">
          <img src="assets\img\phi_6.jpg"></img>
        </div>
        <div className="gallery-item">
          <img src="\assets\img\phi_7.jpg"></img>
        </div>
        <div className="gallery-item">
          <img src="\assets\img\phi_8.jpg"></img>
        </div>
        <div className="gallery-item">
          <img src="\assets\img\phi_12.jpg"></img>
        </div>
      </div>
    </section>
  );
}
