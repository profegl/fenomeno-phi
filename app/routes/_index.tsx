import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Courses from "../components/Courses";
import Gallery from "~/components/Gallery";
import Contact from "~/components/Contact";
import Footer from "~/components/Footer";


export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Gallery />
      <Courses />
      <Contact />
      <Footer />

    </>
  );
}
