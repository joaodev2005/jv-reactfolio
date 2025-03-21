import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <>
      <Navbar />

      <div className="container mx-auto pt-20">
        <Hero />
        <Skills />
      </div>
    </>
  );
}
