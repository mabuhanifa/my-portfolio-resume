import { Route, Routes } from "react-router-dom";
import Biospc from "./Components/All Projects/Biospc";
import Gadgetarena from "./Components/All Projects/Gadgetarena";
import Snapmaster from "./Components/All Projects/Snapmaster";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import Nav from "./Components/Nav";
import Projects from "./Components/Projects";
import SingleProject from "./Components/SingleProject";

function App() {
  return (
    <div >
      <Nav/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/projects" element={<Projects>
        <Route path="/projects/biospc" element={<Biospc/>} />
        <Route path="/projects/gadgetarena" element={<Gadgetarena/>} />
        <Route path="/projects/snapmaster" element={<Snapmaster/>} />
        </Projects>} />
        <Route path="/singleproject/:name" element={<SingleProject/> } />
      </Routes>
      
      <Footer/>
    </div>
  );
}

export default App;
