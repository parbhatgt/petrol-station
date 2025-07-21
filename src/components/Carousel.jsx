import { useEffect, useState } from "react";

const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying] = useState(true);
  // Carousel slides data
  const slides = [
    {
      id: 1,
      imageGradient: "img/img1.webp",
    },
    {
      id: 2,
      imageGradient: "img/img2.webp",
    },
  ];

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, slides.length]);

  return (
    <div className="relative h-96 w-full overflow-hidden bg-gray-100">
      {/* Background blurred image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center filter blur-md scale-110 w-full"
        style={{
          backgroundImage: `url(${slides[currentSlide].imageGradient})`,
        }}
      ></div>

      {/* Centered foreground image */}
      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <img
          src={slides[currentSlide].imageGradient}
          alt="slide"
          className="h-full object-contain"
        />
      </div>
    </div>
  );
};

export default Carousel;
