import { useState } from "react";
import { SendHorizontal } from "lucide-react";

const EMPTY = { name: "", email: "", subject: "", message: "" };
const inputClass =
  "px-3.5 py-2.5 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-600 focus:border-teal-600";

export default function ContactForm() {
  const [form, setForm] = useState(EMPTY);
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const allFilled = Object.values(form).every((v) => v.trim() !== "");

  const handleChange = (e) => {
    setSent(false);
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (sending) return;
    console.log("Form data:", form);
    setSending(true); 

    setTimeout(() => {
      setSending(false);
      setSent(true);
      setForm(EMPTY);
    }, 800);
  };

  return (
    <section id="contact" dir="ltr" className="max-w-xl mx-auto px-[6%] py-20">
      <h2 className="text-3xl font-extrabold mb-6">Contact Us</h2>
      <form onSubmit={handleSubmit} noValidate className="grid gap-[18px]">
        <label className="grid gap-1.5 font-medium">Name
          <input type="text" name="name" value={form.name} onChange={handleChange} autoComplete="name" className={inputClass} />
        </label>
        <label className="grid gap-1.5 font-medium">Email
          <input type="email" name="email" value={form.email} onChange={handleChange} autoComplete="email" dir="ltr" className={inputClass} />
        </label>
        <label className="grid gap-1.5 font-medium">Subject
          <input type="text" name="subject" value={form.subject} onChange={handleChange} className={inputClass} />
        </label>
        <label className="grid gap-1.5 font-medium">Message
          <textarea name="message" rows={5} value={form.message} onChange={handleChange} className={inputClass} />
        </label>

        <button
          type="submit"
          disabled={!allFilled}
          className="justify-self-start flex items-center gap-2 overflow-hidden bg-teal-600 hover:bg-teal-700 text-white font-bold px-7 py-3 rounded-lg transition-colors disabled:bg-slate-300 disabled:text-slate-500 disabled:cursor-not-allowed"
        >
          <SendHorizontal
            size={20}
            className={`transition-all duration-700 ease-in ${sending ? "translate-x-16 opacity-0" : ""}`}
            />
          Send Message
           
        </button>
        {sent && <p role="status" className="font-bold text-teal-700">Thanks! Your message has been sent.</p>}
      </form>
    </section>
  );
}