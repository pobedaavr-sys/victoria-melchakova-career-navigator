import { useState, useEffect, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "./ui/button";

interface SliderProps {
  children: React.ReactNode[];
  cardsPerView?: { mobile: number; tablet: number; desktop: number };
  darkMode?: boolean;
}

export const Slider = ({ 
  children, 
  cardsPerView = { mobile: 2, tablet: 4, desktop: 6 },
  darkMode = false 
}: SliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(cardsPerView.desktop);
  const sliderRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);

  const totalItems = children.length;
  const totalSlides = Math.ceil(totalItems / itemsPerView);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerView(cardsPerView.mobile);
      } else if (window.innerWidth < 1200) {
        setItemsPerView(cardsPerView.tablet);
      } else {
        setItemsPerView(cardsPerView.desktop);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [cardsPerView]);

  useEffect(() => {
    setCurrentIndex(0);
  }, [itemsPerView]);

  const goToSlide = (index: number) => {
    if (index >= 0 && index < totalSlides) {
      setCurrentIndex(index);
    }
  };

  const goToPrevious = () => {
    const newIndex = currentIndex === 0 ? totalSlides - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const newIndex = currentIndex === totalSlides - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const difference = touchStartX.current - touchEndX.current;
    if (Math.abs(difference) > 50) {
      if (difference > 0) {
        goToNext();
      } else {
        goToPrevious();
      }
    }
  };

  return (
    <div className="relative w-full">
      <div className="overflow-hidden" ref={sliderRef}>
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {children.map((child, index) => (
            <div
              key={index}
              className="flex-shrink-0 px-2"
              style={{
                width: `${100 / itemsPerView}%`,
              }}
            >
              {child}
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Arrows */}
      <Button
        variant="ghost"
        size="icon"
        onClick={goToPrevious}
        className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 rounded-full shadow-medium ${
          darkMode ? "bg-white/10 hover:bg-white/20 text-white" : "bg-white hover:bg-secondary"
        }`}
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        onClick={goToNext}
        className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 rounded-full shadow-medium ${
          darkMode ? "bg-white/10 hover:bg-white/20 text-white" : "bg-white hover:bg-secondary"
        }`}
      >
        <ChevronRight className="h-6 w-6" />
      </Button>

      {/* Dots Navigation */}
      <div className="flex justify-center gap-2 mt-8">
        {Array.from({ length: totalSlides }).map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all ${
              currentIndex === index
                ? darkMode 
                  ? "w-8 bg-white" 
                  : "w-8 bg-primary"
                : darkMode
                ? "w-2 bg-white/40"
                : "w-2 bg-muted-foreground/40"
            }`}
            aria-label={`Перейти к слайду ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
