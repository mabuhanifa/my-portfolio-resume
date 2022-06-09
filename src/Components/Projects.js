import React from 'react';
import biospc from '../assets/biospc.png';
import gadgetarena from '../assets/gadgetarena.png';
import snapmaster from '../assets/snapmaster.png';
const Projects = () => {
  
   
  return (
    <>
      <h1 className="text-3xl">Services</h1>
      <div className="flex justify-center text-gray-300 mx-20 items-center p-20">
        <div className="w-80 mx-auto shadow-xl rounded">
          <img className="w-80 h-80 object-cover rounded" src={biospc} alt="" />
          <div className="p-3">
            <h2 className="text-2xl">Static Website.</h2>
            <p className="py-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
              accusantium sit labore nulla quas sapiente voluptatem officiis
              quo. Neque, quisquam exercitationem soluta fuga eaque rem.
            </p>
            <div className="text-sm">
              <a href='./' className="border hover:text-blue-500 hover:border-blue-500 p-2 block my-2">Live Website</a>
              <a href='./' className="border hover:text-blue-500 hover:border-blue-500 p-2 block my-2">Client Side Code</a>
              <a href='./' className="border hover:text-blue-500 hover:border-blue-500 p-2 block my-2">Server Side Code</a>
            </div>
          </div>
        </div>
        <div className="w-80 mx-auto rounded">
          <img className="w-80 h-80 object-cover rounded" src={gadgetarena} alt="" />
          <div className="p-3">
            <h2 className="text-2xl">Single Page Application</h2>
            <p className="py-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
              accusantium sit labore nulla quas sapiente voluptatem officiis
              quo. Neque, quisquam exercitationem soluta fuga eaque rem.
            </p>
            <div className="text-sm">
              <a href='./' className="border hover:text-blue-500 hover:border-blue-500 p-2 block my-2">Live Website</a>
              <a href='./' className="border hover:text-blue-500 hover:border-blue-500 p-2 block my-2">Client Side Code</a>
              <a href='./' className="border hover:text-blue-500 hover:border-blue-500 p-2 block my-2">Server Side Code</a>
            </div>
          </div>
        </div>
        <div className="w-80 mx-auto rounded">
          <img className="w-80 h-80 object-cover rounded" src={ snapmaster} alt="" />
          <div className="p-3">
            <h2 className="text-2xl">Web Application</h2>
            <p className="py-3">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
              accusantium sit labore nulla quas sapiente voluptatem officiis
              quo. Neque, quisquam exercitationem soluta fuga eaque rem.
            </p>
            <div className="text-sm">
              <a href='./' className="border hover:text-blue-500 hover:border-blue-500 p-2 block my-2">Live Website</a>
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
