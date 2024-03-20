"use client"
import Header from "./components/Header"
import Footer from './components/Footer';
import { SendHorizontal } from 'lucide-react';
import { useState } from "react";
import { TypewriterEffectSmooth } from "../components/ui/typewriter-effect";
import './Scrollbar.css'
import { Textarea } from "@/components/ui/textarea"
import { list } from "postcss";
// import OpenAI from "openai";


export default function Home() {
  const [menuOpened, setMenuOpened] = useState(false)
  const [query, setQuery] = useState('')
  const [spin, setSpin] = useState(false)
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

  const { GoogleGenerativeAI } = require("@google/generative-ai");
  const genAI = new GoogleGenerativeAI("AIzaSyAU_L_qPbG-7fzYuFOt5YGmTN8IONx2hwI");
  const [chatHistory, setChatHistory] = useState<any>([])
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });
  const chat = model.startChat({
    history: [
      {
        role: "user",
        parts: [{ text: "What is your name?" }],
      },
      {
        role: "model",
        parts: [{ text: "My name is Pluto. Developed by Neuron." }],
      },
    ],
    generationConfig: {
      maxOutputTokens: 10000,
    },
  });

  async function askOpenAi() {
    setSpin(true)
    setChatHistory((prevChat: any) => [
      ...prevChat,
      { role: 'user', content: query },
    ]);

    // const chatCompletion = await openai.chat.completions.create({
    //   messages:[...chatHistory,{role:'assistant',content:query}],
    //   model:'gpt-3.5-turbo',
    // });

    // setChatHistory((prevChat:any)=>[
    //   ...prevChat,
    //   {role:'assistant',content:chatCompletion.choices[0].message.content},
    // ]);
    setQuery('')
    setSpin(false)
  }

  async function ask() {
    let userQ = { role: 'user', text: query }
    setChatHistory((prevChat: any) => [
      ...prevChat,
      { role: 'user', content: query },
    ]);

    const result = await chat.sendMessage(query);
    const response = await result.response;
    const text = response.text();
    setChatHistory((prevChat: any) => [
      ...prevChat,
      { role: 'model', content: text },
    ]);

    // console.log(chat)
    console.log(text);
    console.log(chat)
    console.log(chat.model)
    // console.log(chat._history)
    console.log(chatHistory)

  }


  return (
    <div className=" bg-black relative text-white mx-auto">

      <nav className="bg-black mb-2 z-40 sticky w-full top-0 border-[#4d4d5d] border-b-[1px]">
        <div className="container px-6 py-4  mx-auto md:flex md:justify-between md:items-center">
          <div className="flex items-center justify-between">
            <a href="/" className="z-20">
              {/* <img className="w-auto h-6 sm:h-7" src="https://merakiui.com/images/full-logo.svg" alt="" /> */}
              <h1 className="text-2xl font-bold">Pluto.</h1>
            </a>
            <div onClick={(e) => { setMenuOpened(!menuOpened) }} className="flex md:hidden">
              <div className="text-gray-200 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400" aria-label="toggle menu">
                {!menuOpened ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
                  </svg>


                ) : (
                  <svg x-show="isOpen" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                    strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </div>
            </div>

          </div>
          {menuOpened && (
            <div className="text-lg font-bold absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-gray-900 md:bg-transparent md:dark:bg-transparent md:mt-0 md:p-0 md:top-0 md:relative md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center">
              <div className="flex flex-col md:flex-row">
                {/* <a onClick={(e) => { setMenuOpened(!menuOpened) }} href='#hero-section' className="my-2 transition-colors duration-300 transform text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-6 md:my-0">Home</a>
                                <a onClick={(e) => { setMenuOpened(!menuOpened) }} href='#skills-section' className="my-2 transition-colors duration-300 transform text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-6 md:my-0">Skills</a>
                                <a onClick={(e) => { setMenuOpened(!menuOpened) }} href='#services-section' className="my-2 transition-colors duration-300 transform text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-6 md:my-0">Services</a>
                                <a onClick={(e) => { setMenuOpened(!menuOpened) }} href='#projects-section' className="my-2 transition-colors duration-300 transform text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-6 md:my-0">Projects</a>
                                <a onClick={(e) => { setMenuOpened(!menuOpened) }} href='#about-section' className="my-2 transition-colors duration-300 transform text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-6 md:my-0">About</a>
                                <a onClick={(e) => { setMenuOpened(!menuOpened) }} href='#contact-section' className="my-2 transition-colors duration-300 transform text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-6 md:my-0">Contact</a> */}

              </div>
            </div>
          )}
          <div className="hidden lg:flex text-lg font-bold absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white dark:bg-gray-900 md:bg-transparent md:dark:bg-transparent md:mt-0 md:p-0 md:top-0 md:relative md:w-auto md:opacity-100 md:translate-x-0 md:flex md:items-center">
            <div className="flex flex-col md:flex-row">
              {/* <a href='#hero-section' className="my-2 transition-colors duration-300 transform text-gray-200 hover:text-blue-500 dark:hover:text-blue-400 md:mx-6 md:my-0">Home</a> */}

            </div>
          </div>
        </div>
      </nav>





      {/* hero/chat container*/}
      <div
        id='scrollbar-chat'
        className="max-h-[70vh] overflow-y-auto overflow-x-hidden"
      // className="p-4 max-h-[80vh] fixed top-20 justify-center items-center flex flex-col overflow-y-scroll scrollbar bg-black flex-grow"
      >
        {chatHistory == 0 ? (
          <div className="mx-auto my-auto h-[50vh] lg:w-[50%] items-center justify-center flex flex-col">
            <h1 className="text-5xl lg:text-6xl font-bold"><span className="bg-gradient-to-r from-blue-600 to-[#f83dc6] inline-block text-transparent bg-clip-text">Hello </span><></> <span className="bg-gradient-to-r from-[#cc78fa] to-[#ff80b7] inline-block text-transparent bg-clip-text"> there,</span></h1>
            <h1 className="text-2xl mt-3 lg:text-2xl font-bold"><span className="bg-gradient-to-r from-blue-600 to-[#f83dc6] inline-block text-transparent bg-clip-text">I'm </span><></> <span className="bg-gradient-to-r from-[#cc78fa] to-[#ff80b7] inline-block text-transparent bg-clip-text"> Pluto,</span></h1>
            {/* <h1 className="text-2xl lg:text-5xl font-bold text-gray-600">How can I help you today?</h1> */}
            <TypewriterEffectSmooth words={words} />
          </div>

        ) : (
          <div className="lg:w-[65%] mx-auto m-4">
            {chatHistory.map((message: any, index: number) => (
              <div key={index}>
                <div className="flex relative justify-between items-start p-4">
                  {message.role === 'user' ? (
                    <img
                      src='/bear.png'
                      className="w-9 h-9"
                    />
                  ) : (
                    <img
                      src='https://www.gstatic.com/lamda/images/gemini_sparkle_v002_d4735304ff6292a690345.svg'
                      // src='/bear.png'
                      className="w-9 h-9 animate"
                    />
                  )

                  }
                  {/* <p>Role: {message.role}</p> */}
                  <p className="w-[95%] ml-5">{message.content}</p>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>



      {/* chat input */}
      <div className="lg:w-[60%] fixed bottom-0 left-0 p-2 right-0 mx-auto z-2 bg-black flex-grow">

        <div className="bg-gray-800 px-6 py-2 z-10 rounded-full flex items-center w-[100%] bg:border-transparent text-gray-300 focus:outline-none">
          <Textarea
            onKeyDown={(e) => {
              if (e.keyCode == 13 && !e.shiftKey) {
                ask()
                if (e.preventDefault) {
                  e.preventDefault(); // This should fix it
                }
                setQuery('')
                return false;
              }
            }}
            onChange={(e) => { setQuery(e.target.value) }}
            value={query}
            placeholder="What can I help you with?"
            className="w-[100%] text-xs lg:text-lg placeholder-slate-500 focus:placeholder-slate-400 bg-gray-800 bg:border-transparent text-gray-300 focus:outline-none"
          />
          <div
            onClick={(e) => {
              ask()
              if (e.preventDefault) {
                e.preventDefault(); // This should fix it
              }
              setQuery('')
            }}
            className="hover:cursor-pointer hover:bg-gray-700 rounded-full p-2"
          >
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

