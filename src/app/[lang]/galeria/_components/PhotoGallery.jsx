"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

// Import the GALLERY constant
import { GALLERY } from "@/constants";

const PhotoGallery = () => {
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const openLightbox = (index) => {
    setSelectedImageIndex(index);
    setIsLightboxOpen(true);
  };

  const closeLightbox = () => {
    setIsLightboxOpen(false);
  };

  const goToNextImage = () => {
    setSelectedImageIndex((prevIndex) => (prevIndex + 1) % GALLERY.length);
  };

  const goToPreviousImage = () => {
    setSelectedImageIndex(
      (prevIndex) => (prevIndex - 1 + GALLERY.length) % GALLERY.length
    );
  };

  return (
    <div className="container mx-auto px-4 py-8 pt-20 bg-main-gradient ">
      {/* Gallery Grid */}
      <div className="flex flex-wrap gap-4">
        {GALLERY.map((photo, index) => (
          <motion.div
            key={photo.id}
            className={`relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer w-32 h-auto ${
              photo.span ? `col-span-${photo.span}` : ""
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => openLightbox(index)}
          >
            <Image
              src={photo.url}
              alt={`Gallery Image ${photo.id}`}
              width={500}
              height={500}
              className="w-full h-full object-cover"
            />
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            {/* Lightbox Content */}
            <motion.div
              className="relative max-w-4xl w-full mx-4"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the lightbox
            >
              {/* Close Button */}
              <button
                className="absolute -top-10 right-0 text-white text-2xl hover:text-gray-300"
                onClick={closeLightbox}
              >
                &times;
              </button>

              {/* Image */}
              <Image
                src={GALLERY[selectedImageIndex].url}
                alt={`Gallery Image ${GALLERY[selectedImageIndex].id}`}
                width={1200}
                height={800}
                className="w-full h-full object-contain rounded-lg"
                layout="responsive"
              />

              {/* Navigation Buttons */}
              <button
                className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white text-4xl hover:text-gray-300"
                onClick={(e) => {
                  e.stopPropagation();
                  goToPreviousImage();
                }}
              >
                &#10094;
              </button>
              <button
                className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white text-4xl hover:text-gray-300"
                onClick={(e) => {
                  e.stopPropagation();
                  goToNextImage();
                }}
              >
                &#10095;
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default PhotoGallery;
