import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Courses from "../components/Courses";
import Gallery from "~/components/Gallery";
import Contact from "~/components/Contact";


export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Courses />
      <Gallery />
      <Contact />

    </>
  );
}
