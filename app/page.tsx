import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Features from "./components/Features";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <Features />
        <section className="py-24 bg-accent text-primary">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-extrabold mb-8 tracking-tight">Siap Untuk Mendigitalisasi Arsip Anda?</h2>
            <p className="text-xl mb-10 max-w-2xl mx-auto font-medium opacity-90">
              Bergabunglah dengan transformasi digital kami dan rasakan kemudahan dalam pengelolaan data.
            </p>
            <button className="px-10 py-4 bg-primary text-white rounded-full font-bold shadow-2xl hover:scale-105 transition-transform">
              Hubungi Administrator
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

