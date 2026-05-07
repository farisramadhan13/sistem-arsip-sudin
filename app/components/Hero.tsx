import Image from "next/image";

export default function Hero() {
  return (
    <section id="beranda" className="relative pt-40 pb-20 lg:pt-56 lg:pb-32 overflow-hidden bg-gradient-to-b from-primary/5 to-transparent">
      {/* Background Decorative Circles */}
      <div className="absolute top-0 right-0 -z-10 w-[300px] h-[300px] md:w-[500px] md:h-[500px] bg-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 -z-10 w-[200px] h-[200px] md:w-[300px] md:h-[300px] bg-primary/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="w-full lg:w-1/2 text-center lg:text-left z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/20 border border-accent/30 text-accent text-xs font-bold uppercase tracking-wider mb-8 animate-fade-in shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
              Sudin Pendidikan Wilayah 2 Jakarta Utara
            </div>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-[1.1] mb-8 tracking-tight text-primary dark:text-white">
              Transformasi <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-accent-hover">Digital</span> Kearsipan Masa Depan.
            </h1>
            
            <p className="text-lg lg:text-xl text-secondary max-w-2xl mb-10 leading-relaxed dark:text-slate-300 mx-auto lg:mx-0">
              Sistem Informasi Pengelolaan Arsip Digital yang dirancang khusus untuk meningkatkan efisiensi, 
              keamanan, dan kemudahan akses data pada Sub Bagian Tata Usaha.
            </p>

            
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <button className="px-10 py-4 bg-primary text-white dark:bg-accent dark:text-primary rounded-2xl font-black shadow-2xl hover:shadow-primary/20 hover:-translate-y-1 transition-all">
                Mulai Eksplorasi
              </button>
              <button className="px-10 py-4 glass border-2 border-primary/20 rounded-2xl font-black hover:bg-primary/5 transition-all text-primary dark:text-white">
                Pelajari Lebih Lanjut
              </button>
            </div>
          </div>

          <div className="w-full lg:w-1/2 relative mt-12 lg:mt-0">
            <div className="relative z-10 rounded-[3rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.2)] border-4 border-white dark:border-slate-800 lg:rotate-3 hover:rotate-0 transition-transform duration-700 ease-out">
              <Image 
                src="https://images.unsplash.com/photo-1568992687947-868a62a9f521?q=80&w=1632&auto=format&fit=crop" 
                alt="Digital Archive System" 
                width={800} 
                height={600}
                className="w-full h-auto object-cover aspect-[4/3]"
                priority
              />
            </div>
            
            {/* Floating Card UI mockup */}
            <div className="absolute -bottom-10 -left-10 z-20 glass p-8 rounded-[2rem] shadow-2xl border border-white/40 animate-bounce-slow hidden md:block backdrop-blur-xl">
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 bg-accent rounded-2xl flex items-center justify-center text-primary font-black text-xl shadow-lg shadow-accent/30">10k+</div>
                <div>
                  <div className="text-sm font-black text-primary">Dokumen Digital</div>
                  <div className="text-xs text-secondary font-bold uppercase tracking-wider">Terarsip Aman</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


