import {
    SiCss3,
    SiExpress,
    SiFirebase,
    SiGit,
    SiHtml5,
    SiJavascript,
    SiMongodb,
    SiNextdotjs,
    SiNodedotjs,
    SiReact,
    SiStripe,
    SiTypescript
} from "react-icons/si";

const Skills = () => {
  return (
    <div>
        <h2 className="text-center text-4xl font-bold text-gray-300 my-32">Skills </h2>
      <div className="w-full mt-20">
        <div className="w-full grid grid-flow-col gap-5 text-[100px] place-content-center text-gray-400">
          <span className=" hover:text-orange-600">
            <SiHtml5 />
          </span>
          <span className=" hover:text-blue-500">
            <SiCss3 />
          </span>

          <span className=" hover:text-yellow-400">
            <SiJavascript />
          </span>
          <span className=" hover:text-sky-600">
            <SiTypescript />
          </span>
          <span className=" hover:text-sky-500">
            <SiReact />
          </span>
          <span className=" hover:text-white">
            <SiNextdotjs />
          </span>
          <span className=" hover:text-green-600">
            <SiNodedotjs/>
          </span>
          <span className=" hover:text-green-500">
            <SiExpress />
          </span>
          <span className=" hover:text-orange-600">
            <SiGit />
          </span>
          <span className=" hover:text-red-500">
            <SiFirebase />
          </span>
          <span className=" hover:text-indigo-500">
            <SiStripe />
          </span>
          <span className=" hover:text-green-500">
            <SiMongodb />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Skills;
