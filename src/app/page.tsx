import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import Awards from "@/components/Awards";
import Leadership from "@/components/Leadership";
import News from "@/components/News";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Stats />
      <Portfolio />
      <Services />
      <Awards />
      <Leadership />
      <News />
      <Contact />
      <Footer />
    </main>
  );
}
