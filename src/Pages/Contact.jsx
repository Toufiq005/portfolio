import React from "react";
import cv from "../assets/Toufiq Mowla.pdf";

export default function Contact() {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl">Contact Me!</h1>
      <div className='flex justify-center items-center m-12'>
      <a href={cv} title="Download" className="w-32 h-12 flex items-center justify-center border" download>CV</a>
      <a href="/contact" className="m-7 h-12 w-32 items-center flex justify-center  font-semibold bg-black text-white">Contact</a>
      </div>
    </div>
  );
}
