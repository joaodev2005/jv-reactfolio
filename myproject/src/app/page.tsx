import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <>
      <Navbar />
      <h1>salve</h1>

      <div className="container mx-auto pt-20">
        <Hero />
      </div>
    </>
  );
}
