import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { About } from "@/components/About";
import { Tools } from "@/components/Tools";
import { Projects } from "@/components/Projects";
import { Journey } from "@/components/Journey";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Tools />
        <Projects />
        <Journey />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
