import React from "react";

export default function Navbar() {
  return (
    <nav className="inter border-b">
      <div className="flex items-center justify-between">
        <a href="/" title="Home">
        <h1 className="text-4xl m-7 font-medium">Toufiq Mowla</h1>
        </a>
        {/* <navbar>
          <ul>
            <li className="text-2xl">
              <a href="/">Home</a>
            </li>
            <li className="text-2xl">
              <a href="/skills">Skills</a>
            </li>
            <li className="text-2xl">
              <a href="/projects">Projects</a>
            </li>
          </ul>
        </navbar> */}
        <a href="/contact" title="contact" className="m-7 h-12 w-32 items-center flex justify-center  font-semibold bg-black text-white"> Contact</a>
      </div>
    </nav>
  );
}
