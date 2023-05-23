import React from "react";
import Skill from "../Pages/Skills";
import Navbar from "../Components/Navbar";

export default function Home() {

  return (
    <>
      <Navbar />
      <div className="wrapper">
        <div className="flex justify-center sticky top-0 items-center w-full h-screen">
          <p className="w-1/4 text-center text-4xl mb-40">
            Hello, I’m Toufiq <span >Mowla and I am a</span> Front End Developer
          </p>
        </div>
        <Skill />
      </div>

    </>
  );
}
