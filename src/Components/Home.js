import About from './About';
import Allprojects from './Allprojects';
import Contact from './Contact';
import Info from './Info';
import Services from './Services';
import Skills from './Skills';

const Home = () => {
    return (
        <div>
    <About/>
      <Info/>
      <Skills/>
      <Services/>
      <Allprojects/>
      <Contact/>
        </div>
    );
};

export default Home;