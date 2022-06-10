import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Info from "./Components/Info";
import Nav from "./Components/Nav";
import Projects from "./Components/Projects";
import Services from "./Components/Services";

function App() {
  return (
    <div >
      <Nav/>
      <About/>
      <Info/>
      <Services/>
      <Projects/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
