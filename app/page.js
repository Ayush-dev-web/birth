"use client"
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const [name, setName] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim()) {
      router.push(`/birthday?name=${encodeURIComponent(name)}`);
    }
  };
  return (
     <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-pink-200 via-fuchsia-100 to-indigo-200">
      {/* Floating Hearts Animation Layer */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <span
            key={i}
            className="absolute text-pink-400 animate-float"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 24 + 12}px`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          >
            💖
          </span>
        ))}
      </div>

      {/* Heart Pattern Background Layer */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/heart.webp')",
          backgroundRepeat: "repeat",
          backgroundSize: "contain",
          opacity: 0.08,
        }}
      />

      {/* Foreground Form */}
      <div className="z-10 text-center p-4">
        <form
          onSubmit={handleSubmit}
          className="bg-white/70 backdrop-blur-xl border border-pink-300 p-8 rounded-2xl shadow-2xl w-full max-w-md animate-zoom-in"
        >
          <label
            htmlFor="name"
            className="block text-gray-800 text-2xl font-bold mb-4 drop-shadow-sm"
          >
            💌 What&apos;s your beautiful name?
          </label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-2 border border-pink-400 rounded-md text-pink-600 font-semibold placeholder-pink-400 bg-white shadow-inner focus:outline-none focus:ring-2 focus:ring-pink-500"
            placeholder="Your name"
          />
          <button
            type="submit"
            className="mt-5 w-full py-2 text-xl bg-gradient-to-r from-pink-500 to-fuchsia-500 text-white font-bold rounded-md shadow-lg hover:scale-105 transition transform duration-300"
          >
            OK 💫
          </button>
        </form>
      </div>

      {/* Extra Sparkle Effect (Optional) */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(255,255,255,0.2)_1px,_transparent_1px)] bg-[length:20px_20px] opacity-20 z-0 pointer-events-none" />
    </div>
  );
}
