import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import About from "@/components/About";
import MetricsBar from "@/components/MetricsBar";
import Portfolio from "@/components/Portfolio";
import Skills from "@/components/Skills";
import WhySpotnana from "@/components/WhySpotnana";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <MetricsBar />
        <Portfolio />
        <Skills />
        <WhySpotnana />
      </main>
      <Footer />
    </>
  );
}
