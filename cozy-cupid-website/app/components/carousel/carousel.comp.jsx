"use client";

import { useState } from "react";
import Image from "next/image";

const images = [
  "/cozycupidpics/ad-perfectgift.jpg",
  "/cozycupidpics/ad-workfromhome.jpg",
  "/cozycupidpics/ad-uses.jpg",
  // Add more images as needed
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
    <div className="container mx-auto">
      <div className="relative">
        <div className="">
          <Image
            src={images[currentIndex]}
            alt="carousel"
            layout="responsive"
            width={500}
            height={500}
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
  );
}
