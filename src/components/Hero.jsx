import { useState } from "react";
import VideoModal from "./VideoModal";

export default function Hero() {
  const [videoOpen, setVideoOpen] = useState(false);

  return (
    <section
      id="about"
      dir="ltr"
      className="grid md:grid-cols-2 gap-12 items-center px-[6%] py-12 md:py-20 bg-slate-100"
    >
      <div>
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4 bg-gradient-to-r from-slate-900 via-teal-600 to-cyan-500 bg-clip-text text-transparent">
          We design websites that tell your brand's story
        </h1>
        <p className="text-lg text-slate-600 max-w-[46ch] mb-7">
          A small team combining design, development, and motion to make your website fast, clear, and uniquely yours.
        </p>
        <a
          href="#contact"
          className="inline-block bg-teal-600 hover:bg-teal-700 text-white font-bold px-7 py-3 rounded-lg transition-colors"
        >
          Start Your Project
        </a>
      </div>

      <button
        className="group relative block w-full aspect-[4/3] rounded-2xl overflow-hidden cursor-pointer"
        aria-label="Play introductory video"
        onClick={() => setVideoOpen(true)}
      >
        <img
          className="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=900&q=70"
          alt="Computer screen displaying code"
        />
        <span
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 grid place-items-center w-[76px] h-[76px] rounded-full bg-teal-600 text-white text-2xl ring-[10px] ring-teal-600/35 group-hover:scale-110 transition-transform"
          aria-hidden="true"
        >
          ▶
        </span>
      </button>

      {videoOpen && <VideoModal onClose={() => setVideoOpen(false)} />}
    </section>
  );
}