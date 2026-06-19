import { useState } from "react";

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Courses from "../components/Courses";
import Gallery from "~/components/Gallery";
import Contact from "~/components/Contact";
import Footer from "~/components/Footer";
/*import Eventos from "~/components/Eventos";*/

export default function Home() {

  const [showEventos, setShowEventos] = useState(false);

  return (
    <>
      <Navbar onEventosClick={() => setShowEventos(true)} />

      <Hero />
      <About />
      <Gallery />
      <Courses />
      {/*<Contact />*/}
      <Footer />

      {/* EVENTOS OVERLAY */}
      {/*showEventos && (
        <Eventos onClose={() => setShowEventos(false)} />
      )*/}
    </>
  );
}