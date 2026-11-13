import { useEffect } from "react";

const VIDEO_URL = "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"; 

export default function VideoModal({ onClose }) {

  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[100] bg-slate-900/85 flex items-center justify-center p-5" onClick={onClose}>
      <div className="relative w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
        <button className="absolute -top-11 end-0 text-white text-3xl" aria-label="إغلاق الفيديو" onClick={onClose}>
          ✕
        </button>
        <div className="aspect-video bg-black rounded-xl overflow-hidden">
          <iframe
            className="w-full h-full"
            src={VIDEO_URL}
            title="فيديو تعريفي"
            allow="autoplay; encrypted-media"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  );
}