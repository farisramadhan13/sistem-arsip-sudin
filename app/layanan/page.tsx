import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Features from "../components/Features";

export default function LayananPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-24">
        <div className="bg-primary/5 dark:bg-slate-800/50 py-12">
          <div className="container mx-auto px-6">
            <h1 className="text-4xl md:text-5xl font-extrabold text-primary dark:text-white text-center mb-4">Layanan</h1>
            <p className="text-center text-secondary dark:text-slate-400 max-w-2xl mx-auto text-lg">
              Berbagai layanan digitalisasi arsip untuk memudahkan pengelolaan dokumen pendidikan.
            </p>
          </div>
        </div>
        <Features />
      </main>
      <Footer />
    </div>
  );
}
