"use client";
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white p-4 shadow-lg sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold tracking-widest text-blue-400">TUGAS.WEB2</h1>
        
        <div className="hidden md:flex gap-6 font-medium">
          <Link href="/" className="hover:text-blue-400 transition">Home</Link>
          <Link href="/about" className="hover:text-blue-400 transition">About</Link>
          <Link href="/project" className="hover:text-blue-400 transition">Project</Link>
          <Link href="/contact" className="hover:text-blue-400 transition">Contact</Link>
        </div>

        <button className="md:hidden bg-blue-600 px-3 py-1 rounded text-sm" onClick={() => setIsOpen(!isOpen)}>
          Menu
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden flex flex-col gap-4 mt-4 bg-gray-800 p-4 rounded-lg">
          <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/about" onClick={() => setIsOpen(false)}>About</Link>
          <Link href="/project" onClick={() => setIsOpen(false)}>Project</Link>
          <Link href="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
        </div>
      )}
    </nav>
  );
}