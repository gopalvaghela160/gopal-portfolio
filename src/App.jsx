import "./App.css";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";
import Header from "./components/Header.jsx";
import Hero from "./components/Hero.jsx";
import Project from "./components/Project.jsx";
import Resume from "./components/Resume.jsx";
import Services from "./components/Services.jsx";
import Testimonial from "./components/Testimonial.jsx";

function App() {
  return (
    <div className="" style={{ overflow: "hidden" }}>
      <Header />
      <Hero />
      <About />
      <Services />  
      <Resume />
      <Project />
      <Testimonial />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
