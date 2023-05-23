import React from "react";
import Projects from "../Pages/Projects";
import react from "../assets/gifs/react.gif";
import js from "../assets/gifs/js.gif";
import css from "../assets/gifs/css.gif";
import git from "../assets/gifs/git.gif";
import des from "../assets/gifs/des.gif";

export default function Skills() {
  return (
    <>
      <img src={react} alt="img" className="react" />
      <img src={js} alt="img" className="js" />
      <img src={css} alt="img" className="css" />
      <img src={git} alt="img" className="git" />
      <img src={des} alt="img" className="des" />
      <Projects/>
    </>
  );
}
