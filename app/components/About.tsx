import Image from "next/image";

export default function About() {


  return (
    <section id="profil" className="py-24 overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="w-full lg:w-1/2 relative group">
            <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
              <Image 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1470&auto=format&fit=crop" 
                alt="Sub Bagian Tata Usaha" 
                width={600} 
                height={600}
                className="w-full h-full object-cover aspect-square"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent flex items-end p-8">
                <div className="text-white">
                  <h4 className="text-xl font-bold">Ruang Kerja Digital</h4>
                  <p className="text-sm opacity-80">Sub Bagian Tata Usaha</p>
                </div>
              </div>
            </div>


            {/* Decorative dots */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent/20 rounded-full -z-10"></div>
            <div className="absolute -top-6 -left-6 w-24 h-24 border-4 border-accent/20 rounded-3xl -z-10"></div>
          </div>
          
          <div className="w-full lg:w-1/2">
            <h2 className="text-sm font-bold text-accent uppercase tracking-widest mb-4">Tentang Kami</h2>
            <h3 className="text-4xl font-extrabold mb-8 leading-tight">Mewujudkan Tata Kelola Arsip yang Modern dan Efisien.</h3>
            
            <div className="space-y-6 text-secondary leading-relaxed">
              <p>
                Sub Bagian Tata Usaha pada Suku Dinas Pendidikan Wilayah 2 Jakarta Utara memiliki peran 
                vital dalam mengelola administrasi dan dokumentasi pendidikan. Di era digital ini, 
                kami berkomitmen untuk melakukan transformasi menyeluruh pada sistem kearsipan kami.
              </p>
              <p>
                Melalui Sistem Arsip Digital ini, kami berupaya menghilangkan hambatan birokrasi yang 
                disebabkan oleh tumpukan dokumen fisik, risiko kehilangan data, serta lambatnya proses 
                pencarian informasi.
              </p>
              
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-accent/20 text-accent rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </div>
                  <span className="text-sm font-semibold">Integritas Data</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-accent/20 text-accent rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </div>
                  <span className="text-sm font-semibold">Efisiensi Waktu</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-accent/20 text-accent rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </div>
                  <span className="text-sm font-semibold">Ramah Lingkungan</span>
                </li>
                <li className="flex items-center gap-3">
                  <div className="w-5 h-5 bg-accent/20 text-accent rounded-full flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </div>
                  <span className="text-sm font-semibold">Transparansi</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
