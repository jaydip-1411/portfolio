"use client"
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Info from "./components/Info";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";


export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Info />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
