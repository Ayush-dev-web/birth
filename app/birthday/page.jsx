"use client"
import { useSearchParams   ,useRouter} from "next/navigation";
import { useEffect, useState, useRef } from "react";
import Typewriter from "typewriter-effect";

export default function BirthdayPage({}) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const name=searchParams.get('name')
 
  const [displayName, setDisplayName] = useState("");
  const [currentGifIndex, setCurrentGifIndex] = useState(0);
  const gifs = [
    "/bear1.gif",
    "/bear2.gif",
    "/bear3.gif",
    "/bear4.gif",
    "/bear5.gif"
  ];

  const fireworksRef = useRef(null);

  useEffect(() => {
    if (name) setDisplayName(name);
  }, [name]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGifIndex((prevIndex) => (prevIndex + 1) % gifs.length);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (fireworksRef.current) {
      const container = fireworksRef.current;
      const fireworks = new Fireworks(container, {
        rocketsPoint: { min: 0, max: 100 },
        hue: { min: 0, max: 360 },
        delay: { min: 15, max: 30 },
        speed: 2,
        acceleration: 1.05,
        friction: 0.97,
        gravity: 1.5,
        particles: 80,
        trace: 3,
        explosion: 6,
        autoresize: true,
        brightness: { min: 50, max: 80 },
        decay: { min: 0.015, max: 0.03 },
        mouse: { click: false, move: false, max: 0 },
      });
      fireworks.start();
      return () => fireworks.stop();
    }
  }, []);

  return (
    <div className="relative min-h-screen ">
     
      

      <div
        className="flex flex-col items-center justify-center min-h-screen z-10 relative text-center p-4"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, #A294F9, #FDCEDF), url('/heart.webp')",
          backgroundRepeat: "repeat",
          backgroundSize: "contain",
          backgroundBlendMode: "overlay"
        }}
      >
        <img
          src={gifs[currentGifIndex]}
          alt="Cute Birthday Bear"
          className="w-40 sm:w-40 mb-6 transition-opacity duration-500 ease-in-out"
        />
        <h1 className="text-2xl sm:text-4xl font-bold text-pink-900">
          Happy Birthday, {displayName}!
        </h1>

        <div className="bg-pink-200 mt-6 px-6 py-4 rounded-lg shadow-md text-gray-800 max-w-md w-full">
          <Typewriter
            options={{
              strings: [
                "Do you know what makes today extra special?",
                "It's your birthday!",
                
              ],
              autoStart: true,
              loop: true,
              delay: 40,
              deleteSpeed: 30,
              pauseFor: 2000
            }}
          />
          <button
  onClick={() => router.push("/memories")}
  className="mt-8 px-6 py-3 bg-pink-500 text-white font-semibold rounded-full shadow-lg hover:bg-pink-600 transition duration-300 animate-bounce"
>
  Surprise for you 🎁
</button>

        </div>
      </div>
    </div>
  );
}
