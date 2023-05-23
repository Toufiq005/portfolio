import React from "react";
import data from "../data.json";
import Contact from "./Contact";
export default function Projects() {

  return (
    <div className="w-full sticky top-0 z-20 min-h-screen bg-white">
      {data.map((prop) => {
        return (
          <div className="flex mt-10 flex-col items-center justify-center">
            <img src={prop.screenshot} className="w-1/2 p-5" />
            <div className="flex flex-col items-center justify-center">
              <h1 className="text-3xl">{prop.name}</h1>
              <p className=" text-black  opacity-50">{prop.discription}</p>
            </div>
            <div className="flex">
            <a href={prop.netlify} target="_blank" title="Website" className="m-7 h-12 w-32 items-center flex justify-center  font-semibold bg-black text-white"> Live site</a>
            <a href={prop.github} target="_blank" title="Code" className="m-7 h-12 w-32 items-center flex justify-center  font-semibold bg-white border"> Git hub</a>
            </div>
          </div>
        );
      })}
      <Contact />
    </div>
  );
}
