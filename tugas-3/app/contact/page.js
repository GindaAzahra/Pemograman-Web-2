"use client";
import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState("idle");
  return (
    <div className="p-16 flex flex-col items-center">
      <h1 className="text-4xl font-bold mb-8">Hubungi Saya</h1>
      <form onSubmit={(e) => { e.preventDefault(); setStatus("success"); }} className="w-full max-w-md">
        <input className="w-full border p-2 mb-4" placeholder="Email" required />
        <textarea className="w-full border p-2 mb-4" placeholder="Pesan" required></textarea>
        <button className="bg-blue-600 text-white w-full py-2">Kirim</button>
      </form>
      {status === "success" && <p className="mt-4 text-green-600 font-bold">Pesan Terkirim!</p>}
    </div>
  );
}