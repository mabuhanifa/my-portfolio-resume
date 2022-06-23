import { Route, Routes } from "react-router-dom";
import About from "./Components/About";
import Blogs from "./Components/Blogs";
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
        <Route path="/blogs" element={<Blogs/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/singleproject/:name" element={<SingleProject/> } />
      </Routes>
      
      <Footer/>
    </div>
  );
}

export default App;
