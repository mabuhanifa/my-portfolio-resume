import { useState } from "react";
import projects from "../Data/projects";
import Proj from "./Proj";

const Allprojects = () => {
  const [project, setProject] = useState(projects);
  return (
    <div>
      <h1 className='text-3xl font-bold text-center text-gray-300 mt-20 mb-20'>Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 text-gray-300 content-end place-items-center mx-40">
        {project.map((project) => (
          <Proj key={project.id} project={project}></Proj>
        ))}
      </div>
    </div>
  );
};

export default Allprojects;
