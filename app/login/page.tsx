"use client";

import { useState } from "react";
import { loginAction } from "./actions";
import { useRouter } from "next/navigation";
import Link from "next/link";
import ThemeToggle from "../components/ThemeToggle";

export default function LoginPage() {
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const result = await loginAction(formData);

    if (result?.error) {
      setError(result.error);
      setLoading(false);
    } else if (result?.success) {
      router.push("/admin");
    }
  }

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-slate-50 dark:bg-[#020617] p-6">
      <div className="absolute top-6 right-6">
        <ThemeToggle />
      </div>

      <div className="w-full max-w-md bg-white dark:bg-slate-900 rounded-[2.5rem] shadow-2xl p-8 border border-slate-100 dark:border-slate-800">
        <div className="text-center mb-10">
          <Link href="/" className="inline-flex items-center gap-3 group mb-6">
            <div className="w-12 h-12 bg-primary text-accent rounded-xl flex items-center justify-center font-black text-xl shadow-lg group-hover:rotate-12 transition-transform">
              SA
            </div>
          </Link>
          <h1 className="text-2xl font-extrabold text-primary dark:text-white mb-2">Masuk ke Sistem</h1>
          <p className="text-secondary dark:text-slate-400 text-sm">Masuk menggunakan email dan password Anda</p>
        </div>

        {error && (
          <div className="bg-red-50 dark:bg-red-900/20 text-red-500 text-sm p-4 rounded-xl mb-6 border border-red-100 dark:border-red-900/30 text-center font-medium">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-bold text-primary dark:text-white mb-2">Email</label>
            <input 
              type="email" 
              name="email" 
              required
              defaultValue="admin@gmail.com"
              className="w-full px-5 py-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-primary dark:text-white focus:outline-none focus:ring-2 focus:ring-accent transition-all" 
              placeholder="Masukkan email Anda"
            />
          </div>

          <div>
            <label className="block text-sm font-bold text-primary dark:text-white mb-2">Password</label>
            <input 
              type="password" 
              name="password" 
              required
              defaultValue="password"
              className="w-full px-5 py-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-primary dark:text-white focus:outline-none focus:ring-2 focus:ring-accent transition-all" 
              placeholder="Masukkan password Anda"
            />
          </div>

          <button 
            type="submit" 
            disabled={loading}
            className="w-full py-4 bg-primary text-white dark:bg-accent dark:text-primary rounded-xl font-bold shadow-lg hover:opacity-90 transition-opacity disabled:opacity-70 flex justify-center items-center"
          >
            {loading ? (
              <svg className="animate-spin h-5 w-5 mr-3 text-white dark:text-primary" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            ) : "Masuk"}
          </button>
        </form>

        <div className="mt-8 text-center">
          <Link href="/" className="text-sm font-semibold text-secondary dark:text-slate-400 hover:text-accent dark:hover:text-accent transition-colors">
            &larr; Kembali ke Beranda
          </Link>
        </div>
      </div>
    </div>
  );
}
