"use client";

import { useState } from "react";
import Image from "next/image";
import { Be_Vietnam_Pro } from "next/font/google";
const bVP = Be_Vietnam_Pro({ weight: "700", subsets: ["latin"] });

const images = [
  "/cozycupidpics/testi-1.png",
  "/cozycupidpics/testi-2.png",
  "/cozycupidpics/testi-3.png",
  "/cozycupidpics/testi-4.png",
  "/cozycupidpics/testi-8.png",
  "/cozycupidpics/testi-5.png",
  "/cozycupidpics/testi-7.png",
  "/cozycupidpics/testi-6.png",
];

export default function Carousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  return (
    <div className="pb-16 flex flex-col hidden md-tablet:block">
      <span
        className={`${bVP.className} flex flex-col text-3xl text-center text-sky-700 pb-4`}
      >
        Testimonials:
      </span>
      <div className="rounded-2xl border-dashed border-4 border-sky-500">
        <div className="relative">
          <div className="">
            <Image
              src={images[currentIndex]}
              alt="carousel"
              width={750}
              height={750}
            />
          </div>
          <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
            <button
              onClick={prevSlide}
              className="bg-blue-500 text-white p-2 rounded-full"
            >
              {"<"}
            </button>
          </div>
          <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
            <button
              onClick={nextSlide}
              className="bg-blue-500 text-white p-2 rounded-full"
            >
              {">"}
            </button>
          </div>
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 space-x-2 flex">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-4 h-4 rounded-full ${
                  currentIndex === index ? "bg-blue-500" : "bg-gray-300"
                }`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
