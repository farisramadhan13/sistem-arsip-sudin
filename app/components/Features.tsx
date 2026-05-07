export default function Features() {
  const features = [
    {
      title: "Digitalisasi Arsip",
      description: "Konversi dokumen fisik menjadi format digital berkualitas tinggi yang mudah dikelola.",
      color: "bg-blue-500/10 text-blue-500",
      border: "hover:border-blue-500/50",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="12" y1="18" x2="12" y2="12"></line><line x1="9" y1="15" x2="15" y2="15"></line></svg>
      ),
    },
    {
      title: "Pencarian Cepat",
      description: "Temukan dokumen yang Anda butuhkan dalam hitungan detik dengan fitur pencarian pintar.",
      color: "bg-amber-500/10 text-amber-500",
      border: "hover:border-amber-500/50",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
      ),
    },
    {
      title: "Keamanan Terjamin",
      description: "Data Anda dilindungi dengan enkripsi tingkat tinggi dan sistem otentikasi yang aman.",
      color: "bg-emerald-500/10 text-emerald-500",
      border: "hover:border-emerald-500/50",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
      ),
    },
    {
      title: "Aksesibilitas Tinggi",
      description: "Akses arsip Anda kapan saja dan di mana saja melalui berbagai perangkat digital.",
      color: "bg-purple-500/10 text-purple-500",
      border: "hover:border-purple-500/50",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
      ),
    }
  ];

  return (
    <section id="fitur" className="py-24 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-sm font-bold text-accent uppercase tracking-widest mb-4">Fitur Utama</h2>
          <p className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight text-primary dark:text-white">Solusi Modern untuk Pengelolaan Arsip</p>
          <div className="w-20 h-1.5 bg-accent mx-auto rounded-full mb-8"></div>
          <p className="text-secondary dark:text-slate-400 leading-relaxed text-lg">
            Sistem kami menyediakan berbagai fitur unggulan yang dirancang untuk memudahkan 
            kinerja administratif di lingkungan Suku Dinas Pendidikan.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className={`p-8 bg-slate-50 dark:bg-slate-800 rounded-[2.5rem] shadow-xl hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-2 border-transparent ${feature.border} group`}
            >
              <div className={`w-16 h-16 ${feature.color} rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform shadow-inner`}>
                {feature.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-primary dark:text-white">{feature.title}</h3>
              <p className="text-secondary dark:text-slate-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>

  );
}
