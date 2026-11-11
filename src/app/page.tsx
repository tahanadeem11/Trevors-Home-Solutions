import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import Services from "@/components/Services";
import Stats from "@/components/Stats";
import About from "@/components/About";
import Process from "@/components/Process";
import Work from "@/components/Work";
import Area from "@/components/Area";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Preloader from "@/components/Preloader";
import Cursor from "@/components/Cursor";
import ScrollFx from "@/components/ScrollFx";

export default function Home() {
  return (
    <>
      <Preloader />
      <Cursor />
      <ScrollFx />
      <Header />
      <main>
        <Hero />
        <Marquee />
        <Services />
        <Stats />
        <About />
        <Process />
        <Work />
        <Area />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
