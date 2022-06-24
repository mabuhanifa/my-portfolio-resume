import { RiContactsFill } from "react-icons/ri";

const Info = () => {
  return (
    <div className="flex flex-col sm:flex sm:flex-row justify-center items-center">
      <div className="m-5 w-full">
        <span className="text-gray-300 sm:float-right text-[200px] w-96 flex justify-center">
          <RiContactsFill />
        </span>
      </div>
      <div className="sm:m-5 sm:w-full text-gray-300 p-5">
        <h2 className="text-2xl font-bold py-3">About Me</h2>
        <p className="sm:text-xl sm:w-[550px]">
          I am a Jr MERN Stack Web Developer. I have a passion for building
          beautiful and functional web applications. I have a good understanding
          of the React JS and I am always looking to learn new technologies.
        </p>

        <a className="rounded-none btn my-4 bg-[#555555]" href="/">
          Projects
        </a>
      </div>
    </div>
  );
};

export default Info;
