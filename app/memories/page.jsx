"use client"
import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
// import '../styles/memories.css';
import { useRouter } from 'next/navigation';
// import '@fontsource/pacifico';

const images = [
  '/image1.jpg',
  '/image2.jpg',
  '/image3.jpg',
  '/image4.jpg',
  '/image5.jpg',
  '/image6.jpg',
  '/image7.jpg',
  '/image8.jpg',
  '/image9.jpg',
  '/image10.jpg',
 
];

export default function Memories() {
  const ringRef = useRef(null);
  const wrapperRef = useRef(null);
  const router = useRouter();

  useEffect(() => {
    let angle = 0;
    const rotateSpeed = 0.1;

    const rotate = () => {
      angle += rotateSpeed;
      if (ringRef.current) {
        ringRef.current.style.transform = `rotateY(${angle}deg)`;
      }
      requestAnimationFrame(rotate);
    };
    rotate();

    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 40;
      const y = (e.clientY / window.innerHeight - 0.5) * 40;
      if (wrapperRef.current) {
        wrapperRef.current.style.transform = `perspective(1000px) rotateX(${-y}deg) rotateY(${x}deg)`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="memories-container bg-black">
      <div className="wrapper" ref={wrapperRef}>
        <div className="ring" ref={ringRef}>
          {images.map((src, index) => (
  <div className="img" key={index}>
    <Image src={src} alt={`memory-${index}`} width={200} height={200} className="main-image" />
    <Image src={src} alt={`reflection-${index}`} width={200} height={200} className="reflection" />
  </div>
))}

        </div>

        <h1 className="center-text">
          Happy<br />Birthday<br />Baby <br />❤️
        </h1>
      </div>
    </div>
  );
}
