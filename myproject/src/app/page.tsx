import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";

export default function Home() {
  return (
    <>
      <Navbar />

      <div className="container mx-auto px-5 sm:px-10 lg:px-28">
        <Hero />
        <Skills />
      </div>
    </>
  );
}
