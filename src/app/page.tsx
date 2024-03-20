"use client"
import Header from "./components/Header"
import Footer from './components/Footer';
import { SendHorizontal } from 'lucide-react';
import { useState } from "react";
import { TypewriterEffectSmooth } from "../components/ui/typewriter-effect";

export default function Home() {
  const [query, setQuery] = useState('')
  const words = [
    {
      text: "Your",
      className: "text-blue-500 text-md dark:text-blue-500",
    },
    {
      text: "fridenly",
      className: "text-blue-500 text-md dark:text-blue-500",
    },
    {
      text: "guide to",
      className: "text-blue-500 text-md dark:text-blue-500",
    },
    {
      text: "endless",
      className: "text-blue-500 text-md dark:text-blue-500",  
    },
    {
      text: "possibilities.",
      className: "text-blue-500 text-md dark:text-blue-500",
    },
  ];
  return (
    <div className="z-10 bg-black text-white w-full flex flex-col h-screen">
      <Header />
      {/* hero */}
      <div className="w-full h-screen justify-center items-center my-auto flex">
        <div className="lg:w-[50%]">
          <h1 className="text-5xl lg:text-6xl font-bold"><span className="bg-gradient-to-r from-blue-600 to-[#f83dc6] inline-block text-transparent bg-clip-text">Hello </span><></> <span className="bg-gradient-to-r from-[#cc78fa] to-[#ff80b7] inline-block text-transparent bg-clip-text"> there,</span></h1>
          <h1 className="text-2xl mt-3 lg:text-2xl font-bold"><span className="bg-gradient-to-r from-blue-600 to-[#f83dc6] inline-block text-transparent bg-clip-text">I'm </span><></> <span className="bg-gradient-to-r from-[#cc78fa] to-[#ff80b7] inline-block text-transparent bg-clip-text"> Pluto,</span></h1>
          {/* <h1 className="text-2xl lg:text-5xl font-bold text-gray-600">How can I help you today?</h1> */}
          <TypewriterEffectSmooth words={words} />
        </div>
      </div>

      {/* chat input */}
      <div className="lg:w-[60%] sticky bottom-0 mx-auto z-10 mt-auto px-4">
        <div className="bg-gray-800 px-6 py-3 z-10 rounded-full flex items-center w-[100%] bg:border-transparent text-gray-300 focus:outline-none">
          <input
            onChange={(e) => { setQuery(e.target.value) }}
            value={query}
            placeholder="What can I help you with?"
            className="w-[100%] text-lg placeholder-slate-400 focus:placeholder-slate-300 bg-gray-800 bg:border-transparent text-gray-300 focus:outline-none"
          />
          <div className="hover:cursor-pointer hover:bg-gray-700 rounded-full p-2">
            <SendHorizontal className={`w-7 h-7 ${query ? 'text-gray-300' : 'text-gray-600'}`} />
          </div>
        </div>
        <div className="text-center text-xs lg:text-sm p-2 text-slate-300">
          Pluto may display inaccurate info, including about people, so double-check its responses.
        </div>
      </div>

    </div>
  )
}

