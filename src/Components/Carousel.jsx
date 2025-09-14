import { useState, useEffect } from 'react';

const Carousel = ({ width = 1500, height = 500, items = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Default items if none provided
  const defaultItems = [
    { id: 1, content: "🌟 Samir Bala Manush", bgColor: "bg-indigo-500" },
    { id: 2, content: "🎉 Samir er Put  hEda", bgColor: "bg-pink-500" },
    { id: 3, content: "🚀 Chanyan r tanmoy kala", bgColor: "bg-teal-500" },
  ];

  const carouselItems = items.length > 0 ? items : defaultItems;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === carouselItems.length - 1 ? 0 : prevIndex + 1
      );
    }, 1000); // Change every 1 second

    return () => clearInterval(interval);
  }, [carouselItems.length]);

  return (
    <div className="flex flex-col items-center space-y-4">
      <div 
        className="relative overflow-hidden rounded-lg shadow-lg"
        style={{ width: `${width}px`, height: `${height}px` }}
      >
        <div 
          className="flex transition-transform duration-500 ease-in-out h-full"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {carouselItems.map((item, index) => (
            <div
              key={item.id || index}
              className={`flex-shrink-0 w-full h-full flex items-center justify-center text-white text-3xl font-bold ${item.bgColor || 'bg-gray-500'}`}
              style={{ minWidth: `${width}px` }}
            >
              {item.content || `Slide ${index + 1}`}
            </div>
          ))}
        </div>
      </div>

      {/* Dots indicator */}
      <div className="flex space-x-2">
        {carouselItems.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-colors duration-200 ${
              index === currentIndex ? 'bg-blue-600' : 'bg-gray-300'
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>

      {/* Current slide info */}
      {/* <p className="text-sm text-gray-600">
        Slide {currentIndex + 1} of {carouselItems.length}
      </p> */}
    </div>
  );
};

export default function LargeCarousel() {
  return (
    
      <Carousel />
   
  );
}