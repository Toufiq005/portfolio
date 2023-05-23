import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Navbar from "../Components/Navbar";

export default function ContactPage() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("{env.REACT_APP_EMAIL_KEY}", "", form.current, "").then(
      (result) => {
        console.log(result.text);
      },
      (error) => {
        console.log(error.text);
      }
    );
  };
  return (
    <div className="w-full h-screen">
      <Navbar />
      <div className="flex flex-col justify-start items-center">
      <div className="text-3xl m-5">Contact Me!</div>
      <form ref={form} className="flex flex-col items-center" onSubmit={sendEmail}>
        <input
        className="w-72 mx-5 h-12 border p-3"
          type="text"
          name="user_name"
          id="user_name"
          placeholder="Name"
          required
        />
        <input
        className="w-72 m-5 h-12 border p-3"
          type="email"
          name="user_email"
          id="user_email"
          placeholder="Email"
          required
        />
        <input
        className="w-72 mx-5 h-24 border p-3"
          type="text"
          name="message"
          id="message"
          placeholder="Message"
          required
        />
        <button type="submit" className="m-5 h-12 w-32 items-center flex justify-center  font-semibold bg-black text-white">Submit</button>
      </form>
      </div>
    </div>
  );
}
