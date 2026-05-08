"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-sm font-bold text-primary/70 dark:text-white/70 hover:text-accent dark:hover:text-accent transition-colors">Beranda</Link>
          <Link href="/profil" className="text-sm font-bold text-primary/70 dark:text-white/70 hover:text-accent dark:hover:text-accent transition-colors">Profil</Link>
          <Link href="/layanan" className="text-sm font-bold text-primary/70 dark:text-white/70 hover:text-accent dark:hover:text-accent transition-colors">Layanan</Link>
          <Link href="/kontak" className="text-sm font-bold text-primary/70 dark:text-white/70 hover:text-accent dark:hover:text-accent transition-colors">Kontak</Link>
          <div className="flex items-center gap-4 border-l border-primary/10 dark:border-white/10 pl-8">
            <ThemeToggle />
            <Link 
              href="/login" 
              className="bg-primary text-white dark:bg-accent dark:text-primary px-8 py-3 rounded-2xl text-sm font-black hover:scale-105 hover:shadow-accent/20 transition-all shadow-lg"
            >
              Masuk Sistem
            </Link>
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 md:hidden">
          <ThemeToggle />
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="text-primary dark:text-white focus:outline-none"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white dark:bg-slate-900 border-t border-primary/10 dark:border-white/10 shadow-xl py-4 px-6 flex flex-col gap-4">
          <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="text-sm font-bold text-primary/70 dark:text-white/70 hover:text-accent dark:hover:text-accent transition-colors py-2 border-b border-primary/5 dark:border-white/5">Beranda</Link>
          <Link href="/profil" onClick={() => setIsMobileMenuOpen(false)} className="text-sm font-bold text-primary/70 dark:text-white/70 hover:text-accent dark:hover:text-accent transition-colors py-2 border-b border-primary/5 dark:border-white/5">Profil</Link>
          <Link href="/layanan" onClick={() => setIsMobileMenuOpen(false)} className="text-sm font-bold text-primary/70 dark:text-white/70 hover:text-accent dark:hover:text-accent transition-colors py-2 border-b border-primary/5 dark:border-white/5">Layanan</Link>
          <Link href="/kontak" onClick={() => setIsMobileMenuOpen(false)} className="text-sm font-bold text-primary/70 dark:text-white/70 hover:text-accent dark:hover:text-accent transition-colors py-2 border-b border-primary/5 dark:border-white/5">Kontak</Link>
          <Link 
            href="/login" 
            onClick={() => setIsMobileMenuOpen(false)}
            className="bg-primary text-white dark:bg-accent dark:text-primary px-8 py-3 rounded-2xl text-sm font-black hover:scale-105 hover:shadow-accent/20 transition-all shadow-lg text-center mt-2"
          >
            Masuk Sistem
          </Link>
        </div>
      )}
    </nav>
  );
}
