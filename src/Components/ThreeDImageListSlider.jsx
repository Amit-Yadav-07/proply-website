// ThreeDImageListSlider.jsx
import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ThreeDImageListSlider = () => {
  // Sample image data
  const images = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=800&fit=crop",
      alt: "AI Security Dashboard",
      title: "AI-Powered Security"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=600&h=800&fit=crop",
      alt: "Network Architecture",
      title: "Network Security"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&h=800&fit=crop",
      alt: "Blockchain Technology",
      title: "Blockchain Security"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=800&fit=crop",
      alt: "Cloud Infrastructure",
      title: "Cloud Computing"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600&h=800&fit=crop",
      alt: "Quantum Computing",
      title: "Quantum Cryptography"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1750218537952-0ae056c7f53a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8",
      alt: "IoT Devices",
      title: "IoT Security"
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=800&fit=crop",
      alt: "Data Protection",
      title: "Data Security"
    }
  ];

  // Start from middle index to have both sides filled initially
  const [activeIndex, setActiveIndex] = useState(Math.floor(images.length / 2));

  // Navigate to previous image (cyclic)
  const goToPrevious = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Navigate to next image (cyclic)
  const goToNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Click on specific image to make it active
  const handleImageClick = (index) => {
    setActiveIndex(index);
  };

  // Calculate position relative to active index for 3D transforms - MORE SPREAD OUT
  const getTransformStyle = (index) => {
    const diff = index - activeIndex;
    const absIndex = Math.abs(diff);

    if (diff === 0) {
      // Active/center image
      return {
        transform: 'translateX(0) scale(1) rotateY(0deg)',
        zIndex: 5,
        opacity: 1,
      };
    } else if (absIndex === 1) {
      // Adjacent images - MORE SPREAD
      return {
        transform: `translateX(${diff > 0 ? '40%' : '-40%'}) scale(0.85) rotateY(${diff > 0 ? '-25deg' : '25deg'})`,
        zIndex: 4,
        opacity: 0.8,
      };
    } else if (absIndex === 2) {
      // Second adjacent images - MORE SPREAD
      return {
        transform: `translateX(${diff > 0 ? '80%' : '-80%'}) scale(0.7) rotateY(${diff > 0 ? '-35deg' : '35deg'})`,
        zIndex: 3,
        opacity: 0.6,
      };
    } else if (absIndex === 3) {
      // Third adjacent images - NEW LAYER
      return {
        transform: `translateX(${diff > 0 ? '120%' : '-120%'}) scale(0.6) rotateY(${diff > 0 ? '-45deg' : '45deg'})`,
        zIndex: 2,
        opacity: 0.5,
      };
    } else {
      // Far images - EVEN MORE SPREAD
      return {
        transform: `translateX(${diff > 0 ? '160%' : '-160%'}) scale(0.5) rotateY(${diff > 0 ? '-55deg' : '55deg'})`,
        zIndex: 1,
        opacity: 0.3,
      };
    }
  };

  return (
    <div className="w-full px-4 lg:px-8 py-16">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Solutions</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Explore our comprehensive security solutions designed to protect your digital assets
        </p>
      </div>

      {/* 3D Slider Container - Full Width with Extended Overflow */}
      <div className="relative h-[500px] md:h-[600px] lg:h-[700px] overflow-hidden">
        {/* Navigation Buttons */}
        <button
          onClick={goToPrevious}
          className="absolute left-6 lg:left-12 top-1/2 -translate-y-1/2 z-20 w-14 h-14 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white hover:shadow-xl transition-all duration-300 flex items-center justify-center text-gray-700 hover:text-blue-600"
        >
          <ChevronLeft className="w-7 h-7" />
        </button>

        <button
          onClick={goToNext}
          className="absolute right-6 lg:right-12 top-1/2 -translate-y-1/2 z-20 w-14 h-14 bg-white/90 backdrop-blur-sm rounded-full shadow-lg hover:bg-white hover:shadow-xl transition-all duration-300 flex items-center justify-center text-gray-700 hover:text-blue-600"
        >
          <ChevronRight className="w-7 h-7" />
        </button>

        {/* Images Container - Increased Perspective for Better 3D Effect */}
        <div className="relative h-full flex items-center justify-center" style={{ perspective: '1500px' }}>
          {images.map((image, index) => (
            <div
              key={image.id}
              className="absolute cursor-pointer transition-all duration-700 ease-out"
              style={getTransformStyle(index)}
              onClick={() => handleImageClick(index)}
            >
              <div className="relative group">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-56 h-80 md:w-72 md:h-96 lg:w-80 lg:h-[500px] xl:w-96 xl:h-[600px] object-cover rounded-2xl shadow-2xl group-hover:shadow-3xl transition-shadow duration-300"
                />

                {/* Overlay for non-active images */}
                {index !== activeIndex && (
                  <div className="absolute inset-0 bg-black/20 rounded-2xl transition-opacity duration-300" />
                )}

                {/* Title overlay for active image */}
                {index === activeIndex && (
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent rounded-b-2xl p-6 lg:p-8">
                    <h3 className="text-white font-bold text-xl lg:text-2xl xl:text-3xl">
                      {image.title}
                    </h3>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-12 space-x-3">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => handleImageClick(index)}
            className={`w-4 h-4 rounded-full transition-all duration-300 ${index === activeIndex
              ? 'bg-gradient-to-r from-blue-600 to-purple-600 scale-125'
              : 'bg-gray-300 hover:bg-gray-400'
              }`}
          />
        ))}
      </div>

      {/* Active Image Info */}
      {/* <div className="text-center mt-12">
        <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
          {images[activeIndex].title}
        </h3>
        <button className="px-10 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-lg">
          Learn More
        </button>
      </div> */}

      <style jsx>{`
        .shadow-3xl {
          box-shadow: 0 35px 60px -12px rgba(0, 0, 0, 0.25);
        }
      `}</style>
    </div>
  );
};

export default ThreeDImageListSlider;