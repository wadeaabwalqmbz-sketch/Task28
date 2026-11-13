import Header from "./components/Header";
import Hero from "./components/Hero";
import ContactForm from "./components/ContactForm";

export default function App() {
  return (
    <div dir="rtl" className="font-sans text-slate-900 leading-relaxed bg-white">
      <Header />
      <Hero />
      <ContactForm />
    </div>
  );
}