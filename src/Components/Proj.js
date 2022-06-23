
import { Link } from "react-router-dom";
;

const Proj = ({ project }) => {
  return (
    <div>
    <div className="w-96 mx-auto shadow-2xl rounded p-2 bg-[#1b232e] my-5">
      <img className="w-96 h-64 object-cover rounded-xl p-2" src={project.img} alt="" />
      <div className="p-2">
        <h1 className="text-3xl">{project.name}</h1>
        <p className="my-2">{project.info}</p>
        <Link to={`/singleproject/${project.name}`}><button className="btn bg-indigo-700 block mx-auto text-white w-full my-5">Details</button></Link>
      </div>
    </div>
    </div>
  );
};

export default Proj;
