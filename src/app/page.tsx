import Navbar from '@/app/components/Navbar';
import Hero from '@/app/components/Hero';
import About from '@/app/components/About';
import Experience from '@/app/components/Experience';
import Education from '@/app/components/Education';
import Skills from '@/app/components/Skills';
import Contact from '@/app/components/Contact';
import Footer from '@/app/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Education />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
