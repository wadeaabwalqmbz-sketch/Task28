import { useState } from "react";
import { nav } from "../data";
import NavItem from "./NavItem";

function WaveMark() {
  return (
    <svg viewBox="0 0 120 90" className="w-11 h-9" aria-hidden="true">
      <defs>
        <linearGradient id="waveGrad" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0%" stopColor="#1f8fe0" />
          <stop offset="100%" stopColor="#35d6e6" />
        </linearGradient>
      </defs>
      <g fill="none" stroke="url(#waveGrad)" strokeLinecap="round">
        <path d="M60 10 C92 2 116 30 106 58 C98 80 70 84 50 72" strokeWidth="7" />
        <path d="M62 23 C84 19 98 38 92 56 C86 70 68 72 58 64" strokeWidth="6" />
        <path d="M66 35 C78 33 84 46 78 54 C74 60 64 58 64 50" strokeWidth="5" />
        <path d="M3 68 C25 48 45 50 60 64 C75 76 90 72 100 64" strokeWidth="6" />
        <path d="M12 77 C30 62 48 64 62 75" strokeWidth="5" />
      </g>
    </svg>
  );
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header id="home" dir="ltr" className="sticky top-0 z-50 bg-slate-900 text-white">
      <div className="relative flex items-center justify-between px-[6%] py-3.5">
        <a
          href="#home"
          aria-label="Wave"
          className="flex items-center gap-2 text-2xl font-extrabold tracking-tight hover:text-cyan-300 transition-colors"
        >
          <WaveMark />
          Wave
        </a>

        <button
          className="md:hidden w-11 h-11 text-2xl leading-none rounded-lg hover:bg-white/10 transition-colors"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

       {menuOpen && (
          <div
            className="md:hidden fixed inset-0 top-[68px] bg-black/50 -z-10"
            onClick={() => setMenuOpen(false)}
            aria-hidden="true"
          />
        )}

        <nav
          onClick={(e) => {
            if (e.target.closest("a")) setMenuOpen(false);
          }}
          className={`${menuOpen ? "block" : "hidden"} md:block absolute md:static top-full right-[4%] left-[4%] md:right-auto md:left-auto mt-2 md:mt-0 bg-slate-800 md:bg-transparent rounded-2xl md:rounded-none shadow-xl shadow-black/40 md:shadow-none ring-1 ring-white/10 md:ring-0 px-4 py-2 md:p-0`}
        >
          <ul className="flex flex-col md:flex-row md:items-center md:gap-1.5">
            {nav.map((item) => (
              <NavItem key={item.name} item={item} />
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}