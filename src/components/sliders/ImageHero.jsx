"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

// Import your images
import coverImage1 from "../../../public/images/hero_image_shadow_2.png";
import coverImage2 from "../../../public/images/hero_image_shadow_4.png"; // Replace with your second image
import coverImage3 from "../../../public/images/hero_image_shadow_3.png"; // Replace with your third image

const images = [coverImage1, coverImage2, coverImage3];

const ImageHero = ({ homeDic }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    // Automatically cycle through images every 5 seconds
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-main-gradient dark:bg-black">
      <div className="w-full h-[800px] overflow-hidden top-0 relative flex justify-start items-start flex-col maxmd:flex-col-reverse">
        {/* Images with fade effect */}
        {images.map((image, index) => (
          <Image
            key={index}
            src={image}
            width={1920}
            height={1080}
            priority
            loading="eager"
            alt="portfolio image"
            className={`object-cover maxmd:w-full bottom-14 maxmd:bottom-10 w-[70%] h-auto absolute transition-opacity duration-1000 ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        {/* Text content */}
        <div className="absolute h-full maxmd:relative top-40 maxmd:top-20 right-20 maxlg:right-0 z-10 text-white text-7xl maxlg:text-5xl font-primary w-[45%] maxmd:w-[90%] px-5 maxlg:w-[50%] ">
          <h2 className="font-primary leading-none mb-3">
            <span className="text-accent dark:text-white">
              {homeDic.imageHero.title}{" "}
            </span>
            <span className="text-white dark:text-dark">
              {homeDic.imageHero.titleTwo}
            </span>
          </h2>
          <p className="font-secondary text-lg font-medium mb-1 text-white">
            {homeDic.imageHero.pretitle}
          </p>
          <p className="font-secondary text-xs mb-1">
            {homeDic.imageHero.subtitle}
          </p>
          <div className="text-gray-300 font-secondary text-xs mb-8 maxmd:text-sm flex flex-col gap-3">
            <p className="flex items-center gap-2">{homeDic.imageHero.text}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageHero;
