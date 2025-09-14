import React, { useState, useEffect } from 'react';

const TypewriterSection = () => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  
  const fullText = "Welcome to our amazing platform . We fuck RIKI, We fuck Chayan, We fuck Tanmoy";
  
  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(prev => prev + fullText[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, 50); // Typing speed
      
      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);
  
  // Cursor blinking effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);
    
    return () => clearInterval(cursorInterval);
  }, []);
  
  const handleGetStarted = () => {
    console.log('Get Started clicked');
    // Add your navigation logic here
  };
  
  const handleLearnMore = () => {
    console.log('Learn More clicked');
    // Add your navigation logic here
  };
  
  return (
    <div className=" flex items-center justify-center px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Typewriter Text */}
        <div className="mb-12">
          <h1 className="text-2xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
            <span className="inline-block">
              {displayText}
              <span 
                className={`inline-block w-1 h-12 md:h-16 lg:h-20 bg-purple-400 ml-2 ${
                  showCursor ? 'opacity-100' : 'opacity-0'
                } transition-opacity duration-100`}
              />
            </span>
          </h1>
        </div>
        
        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={handleGetStarted}
            className="group relative px-8 py-4 bg-purple-600 text-white font-semibold rounded-lg text-lg
                     hover:bg-purple-700 transform hover:scale-105 transition-all duration-300 
                     shadow-lg hover:shadow-purple-500/25 min-w-[200px]
                     before:absolute before:inset-0 before:rounded-lg before:bg-gradient-to-r 
                     before:from-purple-400 before:to-pink-400 before:opacity-0 
                     hover:before:opacity-20 before:transition-opacity before:duration-300"
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              Get Started
              <svg className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" 
                   fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                      d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </button>
          
          <button
            onClick={handleLearnMore}
            className="group px-8 py-4 border-2 border-purple-400 text-purple-300 font-semibold 
                     rounded-lg text-lg hover:bg-purple-400 hover:text-slate-900 
                     transform hover:scale-105 transition-all duration-300 min-w-[200px]
                     hover:shadow-lg hover:shadow-purple-400/25"
          >
            <span className="flex items-center justify-center gap-2">
              Learn More
              <svg className="w-5 h-5 transform group-hover:rotate-12 transition-transform duration-300" 
                   fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </span>
          </button>
        </div>
        
        {/* Subtle animation elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-10 w-2 h-2 bg-purple-400 rounded-full opacity-60 animate-pulse" />
          <div className="absolute top-1/3 right-10 w-1 h-1 bg-pink-400 rounded-full opacity-40 animate-ping" />
          <div className="absolute bottom-1/4 left-1/4 w-1.5 h-1.5 bg-blue-400 rounded-full opacity-50 animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute bottom-1/3 right-1/4 w-1 h-1 bg-purple-300 rounded-full opacity-30 animate-ping" style={{ animationDelay: '2s' }} />
        </div>
      </div>
    </div>
  );
};

export default TypewriterSection;