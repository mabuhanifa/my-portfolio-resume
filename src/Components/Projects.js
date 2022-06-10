import biospc from '../assets/biospc.png';
import gadgetarena from '../assets/gadgetarena.png';
import snapmaster from '../assets/snapmaster.png';
const Projects = () => {
  
   
  return (
    <>
      <h1 className="text-3xl">Services</h1>
      <div className="flex flex-col sm:flex-row justify-center text-gray-300 sm:mx-20 items-center sm:p-20">
        <div className="w-80 mx-auto shadow-xl rounded p-2">
          <img className="w-96 h-64 object-cover rounded-xl p-2" src={biospc} alt="" />
          <div className="py-2">
            <h2 className="text-2xl">Bios Pc</h2>
            <p className="py-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
              accusantium sit labore nulla quas sapiente voluptatem officiis
              quo. Neque, quisquam exercitationem soluta fuga eaque rem.
            </p>
            <div className="text-sm text-center">
              <a href='./' className="border hover:text-blue-500 hover:border-blue-500 p-2 block my-2">Live Website</a>
              <a href='./' className="border hover:text-blue-500 hover:border-blue-500 p-2 block my-2">Client Side Code</a>
              <a href='./' className="border hover:text-blue-500 hover:border-blue-500 p-2 block my-2">Server Side Code</a>
            </div>
          </div>
        </div>
        <div className="w-80 mx-auto shadow-xl rounded p-2">
          <img className="w-96 h-64 object-cover rounded-xl p-2" src={gadgetarena} alt="" />
          <div className="p-2">
            <h2 className="text-2xl">Gadget Arena</h2>
            <p className="py-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
              accusantium sit labore nulla quas sapiente voluptatem officiis
              quo. Neque, quisquam exercitationem soluta fuga eaque rem.
            </p>
            <div className="text-sm text-center">
              <a href='./' className="border hover:text-blue-500 hover:border-blue-500 p-2 block my-2">Live Website</a>
              <a href='./' className="border hover:text-blue-500 hover:border-blue-500 p-2 block my-2">Client Side Code</a>
              <a href='./' className="border hover:text-blue-500 hover:border-blue-500 p-2 block my-2">Server Side Code</a>
            </div>
          </div>
        </div>
        <div className="w-80 mx-auto shadow-xl rounded p-2">
          <img className="w-96 h-64 object-cover rounded-xl p-2" src={ snapmaster} alt="" />
          <div className="p-2">
            <h2 className="text-2xl">SnapMaster</h2>
            <p className="py-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
              accusantium sit labore nulla quas sapiente voluptatem officiis
              quo. Neque, quisquam exercitationem soluta fuga eaque rem.
            </p>
            <div className="text-sm text-center">
              <a href='./' className="border hover:text-blue-500 hover:border-blue-500 hover:bg-white p-2 block my-2">Live Website</a>
              <a href='./' className="border hover:text-blue-500 hover:border-blue-500 p-2 block my-2">Client Side Code</a>
              <a href='./' className="border hover:text-blue-500 hover:border-blue-500 p-2 block my-2">Server Side Code</a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
