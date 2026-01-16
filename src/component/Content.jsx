import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useTypewriter, Cursor } from "react-simple-typewriter";

function Content() {
  const [text] = useTypewriter({
    words: ["Employee Management System"],
    loop: true,
    typeSpeed: 80,
    deleteSpeed: 60,
    delaySpeed: 1200,
  });

  return (
    <div
      className="min-h-screen flex flex-col bg-slate-900
    selection:bg-teal-100 selection:text-teal-900"
    >
      <Navbar />
      <main className="pt-32 lg:pt-36 flex-1">
        <div className="flex flex-col items-center justify-center min-h-[70vh] px-2">
          <h1 className="text-5xl font-bold text-white text-center">
            {text}
            <Cursor cursorStyle="|" />
          </h1>
        </div>
      </main>
      <hr className="border border-gray-700"></hr>
      <Footer />
    </div>
  );
}

export default Content;
