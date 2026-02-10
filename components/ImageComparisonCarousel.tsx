import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ImageIcon } from 'lucide-react';

interface ImagePair {
  title: string;
  original: string;
  processed: string;
}

interface ImageComparisonCarouselProps {
  pairs: ImagePair[];
}

const ImageComparisonCarousel: React.FC<ImageComparisonCarouselProps> = ({ pairs }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % pairs.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [pairs.length, isPaused]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % pairs.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + pairs.length) % pairs.length);
  };

  return (
    <div 
      className="w-full max-w-4xl mx-auto mb-12 bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="p-4 bg-gray-50 border-b border-gray-100 flex justify-between items-center flex-row-reverse">
        <div className="flex items-center gap-2 text-blue-800">
            <ImageIcon size={20} />
            <h3 className="font-bold text-gray-700">גלריית זיהויים (Detection Gallery)</h3>
        </div>
        <div className="flex gap-2 flex-row-reverse">
           {pairs.map((_, idx) => (
             <div 
               key={idx}
               className={`h-2 rounded-full transition-all duration-500 ${idx === currentIndex ? 'w-6 bg-blue-600' : 'w-2 bg-gray-300'}`}
             />
           ))}
        </div>
      </div>
      
      <div className="relative group">
        <div className="p-4 md:p-6">
          <AnimatePresence mode='wait'>
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="space-y-4"
            >
              <h4 className="text-lg md:text-xl font-bold text-blue-900 text-center mb-2">
                {pairs[currentIndex].title}
              </h4>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="font-medium text-gray-500 text-sm text-center">מקור (Original)</div>
                  <div className="aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden border border-gray-200 relative">
                    <img 
                      src={pairs[currentIndex].original} 
                      alt="Original" 
                      className="w-full h-full object-contain bg-black/5"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="font-medium text-gray-500 text-sm text-center">תוצאה (Model Output)</div>
                  <div className="aspect-[4/3] bg-gray-100 rounded-lg overflow-hidden border border-gray-200 relative">
                    <img 
                      src={pairs[currentIndex].processed} 
                      alt="Processed" 
                      className="w-full h-full object-contain bg-black/5"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Buttons */}
        <button 
          onClick={prevSlide}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-md text-gray-700 transition-all opacity-0 group-hover:opacity-100 focus:opacity-100 z-10"
          aria-label="Previous"
        >
          <ChevronRight size={24} />
        </button>
        <button 
          onClick={nextSlide}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-2 rounded-full shadow-md text-gray-700 transition-all opacity-0 group-hover:opacity-100 focus:opacity-100 z-10"
          aria-label="Next"
        >
          <ChevronLeft size={24} />
        </button>
      </div>
    </div>
  );
};

export default ImageComparisonCarousel;