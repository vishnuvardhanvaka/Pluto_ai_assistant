
import Header from "./components/Header"
import Footer from './components/Footer';
import { SendHorizontal } from 'lucide-react';

export default function Home() {
  return (
    <div className="z-10 bg-black text-white w-full flex flex-col h-screen">
      <Header />
      {/* hero */}
      <div className="w-full justify-center items-center mt-20 flex">
        <div className="lg:w-[50%]">
          <h1 className="text-5xl lg:text-6xl font-bold"><span className="bg-gradient-to-r from-blue-600 to-[#f83dc6] inline-block text-transparent bg-clip-text">Hello </span><></> <span className="bg-gradient-to-r from-[#cc78fa] to-[#ff80b7] inline-block text-transparent bg-clip-text"> there,</span></h1>
          <h1 className="text-2xl lg:text-5xl font-bold text-gray-600">How can I help you today?</h1>
        </div>
      </div>

      {/* chat input */}
      <div className="lg:w-[60%] sticky bottom-0 mx-auto z-10 mt-auto px-4">
        <div className="bg-gray-800 px-6 py-3 z-10 rounded-full flex items-center w-[100%] bg:border-transparent text-gray-300 focus:outline-none">
          <input
            placeholder="What can I help you with?"
            className="w-[100%] text-lg placeholder-slate-300 bg-gray-800 bg:border-transparent text-gray-300 focus:outline-none"
          />
          <div className="hover:cursor-pointer hover:bg-gray-700 rounded-full p-2">
            <SendHorizontal className="w-7 h-7" />
          </div>
        </div>
        <div className="text-center text-xs lg:text-sm p-2 text-slate-300">
          Pluto may display inaccurate info, including about people, so double-check its responses.
        </div>
      </div>

    </div>
  )
}

