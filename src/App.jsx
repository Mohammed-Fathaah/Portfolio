import Navbar from "./components/Navbar";
import ThemeToggle from "./components/ThemeToggle";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import ScrollProgress from "./components/ScrollProgress";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-white dark:bg-black text-black dark:text-white">
      <ScrollProgress />
      <Navbar />
      <ThemeToggle />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;