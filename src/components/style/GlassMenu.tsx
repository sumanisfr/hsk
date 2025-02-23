"use client"

import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface MenuItemProps {
  link: string;
  text: string;
  image: string;
  posterImage: string;
  description: string;
  number: number;
}

interface GlassMenuProps {
  items?: MenuItemProps[];
}

const GlassMenu: React.FC<GlassMenuProps> = ({ items = [] }) => {
  return (
    <div className="w-full h-full">
      <nav className="max-w-7xl mx-auto py-4 sm:py-8 px-2 sm:px-4">
        {items.map((item, idx) => (
          <MenuItem key={idx} {...item} />
        ))}
      </nav>
    </div>
  );
};

const MenuItem: React.FC<MenuItemProps> = ({ 
  link, 
  text, 
  image, 
  posterImage, 
  description, 
  number 
}) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const itemRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const posterImageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (textRef.current) {
      gsap.to(textRef.current, {
        scrollTrigger: {
          trigger: textRef.current,
          start: 'top center',
          end: 'bottom center',
          scrub: 1,
        },
        scale: 1.05,
        duration: 1
      });
    }
  }, []);

  const handleClick = () => {
    if (!isExpanded) {
      // Opening animation sequence
      gsap.timeline()
        .to(imageRef.current, {
          x: '100%',
          opacity: 0,
          duration: 0.4,
          ease: "power2.inOut"
        })
        .to(contentRef.current, {
          height: "auto",
          duration: 0.2,
          ease: "power2.out"
        }, "-=0.2")  // Start slightly before previous animation ends
        .to(contentRef.current, {
          opacity: 1,
          duration: 0.2,
          ease: "power2.out"
        }, "-=0.4")
        .to(posterImageRef.current, {
          scale: 1.05,
          duration: 0.6,
          ease: "power2.inOut"
        }, "-=0.4")  // Fade in while expanding
    } else {
      // Closing animation sequence
      gsap.timeline()
        .to(contentRef.current, {
          opacity: 0,
          duration: 0.3,
          ease: "power2.in"
        })
        .to(contentRef.current, {
          height: 0,
          duration: 0.5,
          ease: "power2.inOut"
        }, "-=0.1")
        .to(imageRef.current, {
          x: '0%',
          opacity: 1,
          duration: 0.4,
          ease: "power2.out"
        }, "-=0.3");  // Bring image back while content is collapsing
    }
    setIsExpanded(!isExpanded);
  };

  return (
    <div 
      ref={itemRef}
      className="mb-4 cursor-pointer"
      onClick={handleClick}
    >
      <div className="relative bg-[#23232f] hover:bg-[#2a2a38] transition-all duration-300 rounded-lg overflow-hidden backdrop-blur-md">
        {/* Main Content */}
        <div className="flex items-center justify-between gap-4 p-3 sm:p-4 min-h-[5rem] sm:h-24">
          {/* Position Number */}
          <div className="text-sm sm:text-xl font-bold text-gray-500 mr-3 sm:mr-4 flex-shrink-0">
            {number.toString().padStart(2, '0')}
          </div>

          {/* Team Name */}
          <div className="flex-1 min-w-0" ref={textRef}>
            <h2 className="text-xl sm:text-4xl font-bold text-white tracking-wider truncate">
              {text}
            </h2>
          </div>

          {/* Car Image */}
          <div 
            ref={imageRef}
            className="flex-shrink-0 w-32 sm:w-80 h-12 sm:h-16 relative ml-2 sm:ml-4"
          >
            <img
              src={image}
              alt={text}
              className="absolute top-1/2 -translate-y-1/2 right-0 h-full object-contain"
            />
          </div>

        </div>
        
        {/* Expanded Content */}
        <div 
          ref={contentRef}
          className="overflow-hidden h-0 opacity-0 transition-all duration-300"
        >
          <div className="p-4 sm:p-6 border-t border-gray-700">
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <div className="flex-1">
                <p className="text-gray-300 mb-4 text-sm sm:text-base">{description}</p>
                <button className="w-full sm:w-auto px-6 py-2 bg-red-600 hover:bg-red-700 text-white rounded-full transition-colors duration-300">
                  View Events
                </button>
              </div>
              <div ref={posterImageRef} className="w-full sm:w-64 h-48 sm:h-64 rounded-lg overflow-hidden flex-shrink-0">
                <img src={posterImage} alt="Poster" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlassMenu;