import { useState } from "react";
import { VscLinkExternal } from "react-icons/vsc";
import { useParams } from "react-router-dom";
import projects from "../Data/projects";

const SingleProject = () => {
  const { name } = useParams();
  const [items, setItems] = useState(
    projects.filter((project) => project.name === name)[0]
  );
  console.log(items.tech[0].outline);
  return (
    <div className="p-5 text-gray-300 sm:mx-40">
      <div className="w-full h-full ">
        <h1 className="my-10 text-4xl font-bold"> {items.name}</h1>
        <p className="my-10 text-xl font-bold">{items.info}</p>
        <div className="flex flex-col sm:flex-row text-blue-500 text-lg font-[500] font-firacode">
          <a
            className="flex "
            target="_blank"
            rel="noopener noreferrer"
            href={items.link.live}
          >
            Live Website
            <span className="mx-1 my-auto">
              <VscLinkExternal />{" "}
            </span>
          </a>
          <a
            className="flex sm:mx-20 my-5 sm:my-0"
            target="_blank"
            rel="noopener noreferrer"
            href={items.link.client}
          >
            Client Side Code{" "}
            <span className="mx-1 my-auto">
              <VscLinkExternal />{" "}
            </span>
          </a>
          <a
            className="flex "
            target="_blank"
            rel="noopener noreferrer"
            href={items.link.server}
          >
            Server Side Code{" "}
            <span className="mx-1 my-auto">
              <VscLinkExternal />{" "}
            </span>
          </a>
        </div>
        <p className="my-5 text-2xl font-bold">Screenshots of the project.</p>
        <div className="flex flex-col sm:flex-row justify-center items-center">
          {items.images.map((img) => (
            <img
              className="max-w-lg max-h-full mx-2 p-2 rounded-2xl "
              src={img}
              alt=""
            />
          ))}
        </div>
        <div>
          <p className="text-2xl m-4 font-bold">Details</p>
          {items.info_bullets.map((bullet) => (
            <ul className="list-disc ">
              <li className="my-2 mx-8">{bullet}</li>
            </ul>
          ))}
        </div>

        <h2 className="font-bold text-2xl m-4">Technologies used</h2>
        <div className="w-full grid grid-cols-3 gap-5 sm:flex items-center mx-2 mb-10 font-notosans ">
          {items.tech.map((tech) => (
            <span className={`text-sm text-[${tech.text}] `}>
              <p
                className={`block mx-2 px-3 py-1.5 rounded-lg bg-[${tech.bg}] `}
              >
                {tech.name}
              </p>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SingleProject;
