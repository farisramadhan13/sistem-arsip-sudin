"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "glass shadow-xl py-3" : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group shrink-0">
          <div className="w-10 h-10 md:w-12 md:h-12 bg-primary text-accent rounded-xl md:rounded-2xl flex items-center justify-center font-black text-lg md:text-xl shadow-lg group-hover:rotate-12 transition-transform">
            SA
          </div>
          <div className="flex flex-col">
            <span className="font-extrabold text-lg md:text-xl leading-tight tracking-tighter text-primary dark:text-white whitespace-nowrap">Arsip<span className="text-accent">Digital</span></span>
            <span className="text-[8px] md:text-[9px] uppercase tracking-[0.15em] md:tracking-[0.2em] text-secondary dark:text-slate-400 font-bold hidden sm:block">Sudin Pendidikan Wilayah 2 JU</span>
          </div>
        </Link>


        <div className="hidden md:flex items-center gap-10">
          <Link href="#beranda" className="text-sm font-bold text-primary/70 dark:text-white/70 hover:text-accent dark:hover:text-accent transition-colors">Beranda</Link>
          <Link href="#profil" className="text-sm font-bold text-primary/70 dark:text-white/70 hover:text-accent dark:hover:text-accent transition-colors">Profil</Link>
          <Link href="#fitur" className="text-sm font-bold text-primary/70 dark:text-white/70 hover:text-accent dark:hover:text-accent transition-colors">Fitur</Link>
          <Link href="#kontak" className="text-sm font-bold text-primary/70 dark:text-white/70 hover:text-accent dark:hover:text-accent transition-colors">Kontak</Link>
          <Link 
            href="/login" 
            className="bg-primary text-white dark:bg-accent dark:text-primary px-8 py-3 rounded-2xl text-sm font-black hover:scale-105 hover:shadow-accent/20 transition-all shadow-lg"
          >
            Masuk Sistem
          </Link>
        </div>


        <button className="md:hidden text-primary dark:text-white">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
        </button>
      </div>
    </nav>
  );
}
