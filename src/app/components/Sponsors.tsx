"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const InfiniteCarousel = ({ direction = 'left' }: { direction?: 'left' | 'right' }) => {
  const [reducedMotion, setReducedMotion] = useState(false);

  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);
    
    const handleChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  const sponsors = [
    { name: 'Sponsor1', logo: '/images/replacement.png', url: 'https://about.google/' },
    { name: 'Sponsor2', logo: '/images/replacement.png', url: 'https://nvidia.com' },
    { name: 'Sponsor3', logo: '/images/replacement.png', url: 'https://rigetti.com' },
  ];

  const handleKeyDown = (e: React.KeyboardEvent, sponsor: { name: string; logo: string; url: string }) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      window.open(sponsor.url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <>
      <style>{`
        @keyframes scrollLeft {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        @keyframes scrollRight {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
        
        .animate-scroll-left {
          animation: scrollLeft 25s linear infinite;
        }
        
        .animate-scroll-right {
          animation: scrollRight 25s linear infinite;
        }
        
        .animate-scroll-left.paused,
        .animate-scroll-right.paused {
          animation-play-state: paused;
        }
        
        /* Respect reduced motion preference */
        @media (prefers-reduced-motion: reduce) {
          .animate-scroll-left,
          .animate-scroll-right {
            animation: none !important;
          }
        }
        
{/* Screen reader friendly list */}
<div className="sr-only">
  <h3>Complete list of sponsors:</h3>
  <ul>
    {sponsors.map((sponsor, index) => (
      <li key={index}>
        <a href={sponsor.url} target="_blank" rel="noopener noreferrer">
          {sponsor.name}
        </a>
      </li>
    ))}
  </ul>
</div>
      `}</style>
      
      <section className="w-full py-2" style={{ backgroundColor: 'black' }} aria-label="Sponsor carousel" >
        <div className="w-full px-4">
          <div 
            className="relative overflow-hidden"
            role="region"
            aria-label="Scrolling sponsor logos"
            aria-live="polite"
          >
            {/* Gradient overlays - hidden from screen readers */}
            <div 
              className="absolute left-0 top-0 w-16 sm:w-24 md:w-32 h-full z-10 pointer-events-none" 
              style={{ background: 'linear-gradient(to right, black, transparent)' }}
              aria-hidden="true"
            ></div>
            <div 
              className="absolute right-0 top-0 w-16 sm:w-24 md:w-32 h-full z-10 pointer-events-none" 
              style={{ background: 'linear-gradient(to left, black, transparent)' }}
              aria-hidden="true"
            ></div>
            
            {/* Scrolling container */}
            <div 
              className={`flex ${!reducedMotion ? (direction === 'left' ? 'animate-scroll-left' : 'animate-scroll-right') : ''}`}
            >
              {/* First set of logos */}
              {sponsors.map((sponsor, index) => (
                <a
                  key={`first-${index}`}
                  href={sponsor.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-shrink-0 mx-4 sm:mx-6 md:mx-8 flex items-center justify-center h-20 w-32 sm:h-24 sm:w-36 md:h-28 md:w-44 lg:h-40 lg:w-60 rounded-lg transition-all duration-300 cursor-pointer hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  style={{
                    background: 'linear-gradient(to right, #C3B5FF, #DFB1F9, #F0B3EB, #DFB1F9, #C3B5FF)',
                    boxShadow: '0 10px 15px -3px rgba(51, 102, 255, 0.1), 0 4px 6px -2px rgba(51, 102, 255, 0.05)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = '0 25px 50px -12px rgba(51, 102, 255, 0.25)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(51, 102, 255, 0.1), 0 4px 6px -2px rgba(51, 102, 255, 0.05)';
                  }}
                  onKeyDown={(e) => handleKeyDown(e, sponsor)}
                  aria-label={`Visit ${sponsor.name} website`}
                  tabIndex={0}
                >
                  <Image
                    src={sponsor.logo}
                    alt={`${sponsor.name} logo`}
                    width={220}
                    height={80}
                    className="max-w-full max-h-full object-contain grayscale hover:grayscale-0 focus:grayscale-0 transition-all duration-300"
                    loading="lazy"
                    unoptimized
                  />
                </a>
              ))}
              
              {/* Duplicate set for seamless loop - hidden from screen readers and keyboard navigation */}
              {sponsors.map((sponsor, index) => (
                <a
                  key={`second-${index}`}
                  href={sponsor.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mb-32 flex-shrink-0 mx-4 sm:mx-6 md:mx-8 flex items-center justify-center h-20 w-32 sm:h-24 sm:w-36 md:h-28 md:w-44 lg:h-40 lg:w-60 rounded-lg transition-all duration-300 cursor-pointer hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  style={{
                    background: 'linear-gradient(to right, #C3B5FF, #DFB1F9, #F0B3EB, #DFB1F9, #C3B5FF)',
                    boxShadow: '0 10px 15px -3px rgba(51, 102, 255, 0.1), 0 4px 6px -2px rgba(51, 102, 255, 0.05)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = '0 25px 50px -12px rgba(51, 102, 255, 0.25)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = '0 10px 15px -3px rgba(51, 102, 255, 0.1), 0 4px 6px -2px rgba(51, 102, 255, 0.05)';
                  }}
                  aria-hidden="true"
                  tabIndex={-1}
                >
                  <Image
                    src={sponsor.logo}
                    alt=""
                    width={220}
                    height={80}
                    className="max-w-full max-h-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
                    loading="lazy"
                    unoptimized
                  />
                </a>
              ))}
            </div>
          </div>
          
          {/* Screen reader friendly list */}
          <div className="sr-only">
            <h3>Complete list of sponsors:</h3>
            <ul>
              {sponsors.map((sponsor, index) => (
                <li key={index}>
                  <a href={sponsor.url} target="_blank" rel="noopener noreferrer">
                    {sponsor.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Contact information */}
          <div className="text-center mt-8 mb-6">
            <p className="text-white text-2xl  font-kantumruy">
              If you&apos;re an interested sponsor or have any inquiries,<br />
              please contact us at{' '}
              <a
                href="mailto:quantum.ucla@gmail.com"
                className="transition-colors duration-200 gradient-text text-2xl font-bold font-kantumruy"
                style={{
                  backgroundImage: 'linear-gradient(90deg, #fb7185 0%, #a78bfa 50%, #60a5fa 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  color: 'transparent'
                }}
              >
                quantum.ucla@gmail.com
              </a>
            </p>
          </div>
          
          <Image
            src="/images/atom1.png"
            alt="QCSA Logo"
            width={150}
            height={200}
            className="mx-auto mb-6 block" 
          />
        </div>
      </section>
    </>
  );
};

export default InfiniteCarousel;