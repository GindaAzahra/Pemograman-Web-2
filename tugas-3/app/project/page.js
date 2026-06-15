"use client";
import { useState, useEffect } from "react";

export default function Project() {
  const [isLoading, setIsLoading] = useState(true);
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Simulasi mengambil data dari database selama 2 detik (Fake Loading)
    const timer = setTimeout(() => {
      setProjects([
        { id: 1, title: "Sistem Kasir Online", tech: "Next.js & Supabase", desc: "Aplikasi manajemen stok dan transaksi realtime." },
        { id: 2, title: "Web Portofolio", tech: "Tailwind CSS", desc: "Landing page interaktif dengan desain modern." },
        { id: 3, title: "Audit Keamanan Web", tech: "OWASP Tools", desc: "Analisis celah keamanan pada aplikasi web." }
      ]);
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="container mx-auto p-12 flex-1">
      <h1 className="text-4xl font-bold mb-8 text-gray-800 border-b-2 border-blue-600 inline-block">Proyek Saya</h1>

      {isLoading ? (
        // Animasi Loading (Memenuhi syarat 'menarik' dari dosen)
        <div className="flex flex-col items-center justify-center py-20">
          <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-blue-600 mb-4"></div>
          <p className="text-blue-600 font-bold animate-pulse">Sedang sinkronisasi data...</p>
        </div>
      ) : (
        // Tampilan daftar proyek dalam bentuk Card
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((item) => (
            <div key={item.id} className="bg-white p-6 rounded-2xl shadow-xl border border-gray-100 hover:scale-105 transition transform duration-300">
              <h2 className="text-2xl font-bold text-blue-700 mb-2">{item.title}</h2>
              <p className="text-gray-600 mb-4">{item.desc}</p>
              <span className="bg-blue-100 text-blue-800 text-xs font-bold px-3 py-1 rounded-full">{item.tech}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}