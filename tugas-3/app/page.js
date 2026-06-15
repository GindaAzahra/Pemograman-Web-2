"use client";
import { useState } from "react";

export default function Home() {
  // State untuk mengontrol apakah modal muncul atau tidak
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="flex-1 flex items-center justify-center bg-gradient-to-br from-blue-600 to-indigo-900 text-white p-6">
      
      {/* Konten Utama Halaman Home */}
      <div className="text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6">Selamat Datang</h1>
        <p className="text-lg md:text-xl mb-8 text-gray-200">
          Selamat datang di landing page tugas Pemrograman Web 2.
        </p>
        
        {/* Tombol untuk memicu state showModal menjadi true */}
        <button 
          onClick={() => setShowModal(true)} 
          className="bg-white text-blue-700 py-3 px-8 rounded-full font-bold shadow-lg hover:scale-105 transition transform duration-300"
        >
          Lihat Informasi
        </button>
      </div>

      {/* Modal Popup (Hanya muncul jika showModal bernilai true) */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center p-4 z-50">
          <div className="bg-white text-gray-900 p-8 rounded-2xl max-w-sm w-full shadow-2xl">
            <h2 className="text-2xl font-bold mb-4 text-blue-600">Informasi Sistem</h2>
            <p className="mb-6 text-gray-600">
              Landing page ini dikembangkan menggunakan <strong>Next.js</strong> dan <strong>Tailwind CSS</strong>. 
              Fitur ini menggunakan <em>useState</em> untuk mendemonstrasikan interaksi UI tanpa memuat ulang halaman.
            </p>
            
            {/* Tombol untuk menutup modal (set showModal ke false) */}
            <button 
              onClick={() => setShowModal(false)} 
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition"
            >
              Tutup
            </button>
          </div>
        </div>
      )}
    </div>
  );
}