"use client";
import { useState } from "react";

export default function About() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="p-12">
      <h1 className="text-4xl font-bold mb-6 text-gray-800">Tentang Tugas Ini</h1>
      
      <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 max-w-2xl">
        <p className="text-lg text-gray-600 mb-4">
          Tugas ini dibuat untuk memenuhi mata kuliah Pemrograman Web 2, 
          menggunakan framework Next.js dengan fitur interaktif React Hooks.
        </p>

        {isExpanded && (
          <div className="mt-4 p-4 bg-blue-50 text-blue-800 rounded-lg border border-blue-100">
            <p>
              Halaman ini menggunakan <strong>useState</strong> untuk melakukan 
              toggle elemen tanpa memuat ulang halaman (reload).
            </p>
          </div>
        )}

        <button 
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg transition"
        >
          {isExpanded ? "Sembunyikan Detail" : "Baca Selengkapnya"}
        </button>
      </div>
    </div>
  );
}