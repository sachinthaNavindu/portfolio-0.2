import { useState, useEffect } from "react";

const TypingEffect = () => {
  const fullText = ["Software Engineer", "Fullstack Developer"];
  const [displayText, setDisplayText] = useState("");
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!isDeleting && currentIndex < fullText[currentTextIndex].length) {
        setDisplayText(prev => prev + fullText[currentTextIndex][currentIndex]);
        setCurrentIndex(prev => prev + 1);
      } else if (isDeleting && currentIndex > 0) {
        setDisplayText(prev => prev.slice(0, -1));
        setCurrentIndex(prev => prev - 1);
      } else if (!isDeleting && currentIndex === fullText[currentTextIndex].length) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && currentIndex === 0) {
        setIsDeleting(false);
        setCurrentTextIndex((prev) => (prev + 1) % fullText.length);
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [currentIndex, currentTextIndex, isDeleting]);

  return (
    <div className="h-[60px] sm:h-[80px] md:h-[100px] flex items-start">
      <div className="relative">
        <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
          {displayText}
        </span>
        <span className="absolute -right-3 top-0 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white animate-pulse">
          |
        </span>
      </div>
    </div>
  );
};

export default TypingEffect;