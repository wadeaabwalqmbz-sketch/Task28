import { useState, useEffect } from "react";

const LINK =
  "flex w-full md:w-auto items-center justify-between md:justify-start gap-1.5 px-2 md:px-3.5 py-3 md:py-2 rounded-md font-medium hover:bg-white/10 hover:text-teal-300 transition-colors";

export default function NavItem({ item, isChild = false }) {
  const [open, setOpen] = useState(false);
  const hasChildren = item.children && item.children.length > 0;

  useEffect(() => {
    if (!open) return;
    const close = () => setOpen(false);
    document.addEventListener("click", close);
    return () => document.removeEventListener("click", close);
  }, [open]);

  if (!hasChildren) {
    return (
      <li className="relative">
        <a href={item.link} className={`${LINK} ${isChild ? "md:text-slate-900 md:hover:bg-slate-100 md:hover:text-teal-600" : ""}`}>
          {item.name}
        </a>
      </li>
    );
  }

  return (
    <li className="relative">
      <button
        className={LINK}
        aria-expanded={open}
        onClick={(e) => {
          e.stopPropagation();
          setOpen(!open);
        }}
      >
        {item.name}
        <span className={`inline-block transition-transform ${open ? "rotate-180" : ""}`} aria-hidden="true">▾</span>
      </button>

      {open && (
        <ul className="bg-white/10 md:bg-white md:text-slate-900 md:absolute md:top-full md:start-0 md:min-w-[190px] md:rounded-lg md:p-1.5 md:shadow-xl mb-1.5 md:mb-0">
          {item.children.map((child) => (
            <NavItem key={child.name} item={child} isChild />
          ))}
        </ul>
      )}
    </li>
  );
}