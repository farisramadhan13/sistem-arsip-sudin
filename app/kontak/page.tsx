import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function KontakPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-24">
        <div className="bg-primary/5 dark:bg-slate-800/50 py-12">
          <div className="container mx-auto px-6">
            <h1 className="text-4xl md:text-5xl font-extrabold text-primary dark:text-white text-center mb-4">Kontak Kami</h1>
            <p className="text-center text-secondary dark:text-slate-400 max-w-2xl mx-auto text-lg">
              Hubungi kami untuk informasi lebih lanjut mengenai sistem kearsipan digital.
            </p>
          </div>
        </div>
        <section className="py-24">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto bg-white dark:bg-slate-900 rounded-[2.5rem] shadow-xl p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <h2 className="text-3xl font-extrabold text-primary dark:text-white mb-6">Informasi Kontak</h2>
                  <div className="space-y-6 text-secondary dark:text-slate-300">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-accent/10 text-accent rounded-full flex items-center justify-center shrink-0 mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                      </div>
                      <div>
                        <h4 className="font-bold text-primary dark:text-white text-lg">Telepon</h4>
                        <p>+62 123 4567 890</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-accent/10 text-accent rounded-full flex items-center justify-center shrink-0 mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                      </div>
                      <div>
                        <h4 className="font-bold text-primary dark:text-white text-lg">Email</h4>
                        <p>info@sudinpendidikan-ju2.go.id</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-accent/10 text-accent rounded-full flex items-center justify-center shrink-0 mt-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                      </div>
                      <div>
                        <h4 className="font-bold text-primary dark:text-white text-lg">Alamat</h4>
                        <p>Kantor Walikota Jakarta Utara, Jl. Yos Sudarso No.27-29, RT.13/RW.16, Kb. Bawang, Tj. Priok, Kota Jkt Utara, DKI Jakarta 14320</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h2 className="text-3xl font-extrabold text-primary dark:text-white mb-6">Kirim Pesan</h2>
                  <form className="space-y-4">
                    <div>
                      <input type="text" placeholder="Nama Lengkap" className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-accent" />
                    </div>
                    <div>
                      <input type="email" placeholder="Alamat Email" className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-accent" />
                    </div>
                    <div>
                      <textarea placeholder="Pesan Anda" rows={4} className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-accent"></textarea>
                    </div>
                    <button type="button" className="w-full py-3 bg-primary text-white dark:bg-accent dark:text-primary rounded-xl font-bold shadow-lg hover:opacity-90 transition-opacity">
                      Kirim Pesan
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
