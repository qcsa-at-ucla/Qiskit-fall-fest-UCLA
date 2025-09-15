'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

// Board member data - you can easily expand this to 12 members or more or less :D
const boardMembers = [
  {
    
    id: 1,
    name: "Oneka Singh",
    role: "Lead Organizer",
    major: "Physics",
    year: "1st Year Transfer",
    bio: "She is a student at UCLA studying physics, and will earn her bachelor's in physics in 2026. She really really loves physics--to the point where she is able to graduate at 19, and begin hands-on working in the quantum computing field. Currently, she is expanding quantum computing field experience, and is developing strong skills in quantum software and hardware, with a heavy focus on quantum information theory. She codes mainly in Python, and C++, and has experience working with Qiskit and AI. She is also fluent in two languages: English, and German. She also has built several quantum-related algorithms and projects with various passionate people, and has a great full-round work-collaboration ethic. She is also very active, engaged, and passionate in her work, and firmly stands by discipline, teamwork, and organization. If you are interested in quantum computing, do not hesitate to reach out, as she appreciates expanding her social circle, and working with new people to solve the challenges of tomorrow.",
    linkedin: "https://www.linkedin.com/in/oneka-singh-924360296/",
    image: "/images/oneka.png",
  },

  
  {
    id: 2,
    name: "Harshita Kukreja",
    role: "Co-Lead Organizer",
    major: "Computer Science and Engineering",
    year: "2nd Year",
    bio: "Harshita is a second-year Computer Science and Engineering student at UCLA, minoring in Disability Studies. She is passionate about digital accessibility and inclusive design, and recently launched NextA11y, a web accessibility bootcamp for middle and high school students in India. Outside of coding, Harshita enjoys 3D modeling in SOLIDWORKS, sketching, and exploring campus.",
    image: "/images/harshita.png",
    linkedin: "https://www.linkedin.com/in/harshita-kukreja-28h/"
  },
  {
    id: 3,
    name: "Clyde Villacrusis",
    role: "Co-Lead Organizer",
    major: "Computer Science",
    year: "4th Year",
    bio: "Helloo!! Clyde Villacrusis is an undergraduate 4th year Computer Science and Linguistics double major. He is apart of the QCSA's tech team and working on making an interactive and accessible website for all. He is extremely excited to learn more about Quantum Computing while also developing his tech skills. Besides QCSA. he also interned under UCLA Health to make their AI-powered application (still in progress) and he is also in fetch.ai x qcsa x bruin.ai research group to research more about predicting binding affinities using hybrid CNNs, traditional Machine learning modes, and quantum circuits! He also likes to play Valorant, Minecraft, nature, and caffeine. Hit him up anytime to learn or just to chat about anything!",
    image: "/images/clyde.png",
    linkedin: "https://www.linkedin.com/in/clydevillacrusis"
  },
 
  {
    id: 4,
    name: "Sanskriti Shindadkar",
    role: "Co-Lead Organizer",
    major: "Bioengineering",
    year: "4th Year",
    bio: "Sanskriti is a fourth year undergraduate bioengineering student at UCLA. She enjoys exploring quantum computing for chemistry and biological applications. She has previously led the industry collaboration with QCSA, BruinAI, and Fetch.ai to explore the use of hybrid quantum-CNNs for predicting protein-ligand binding energies. She loves hearing about projects other people are working on and are excited about, so contact her any time to chat over lunch :)",
    image: "/images/sanskriti.png",
    linkedin: "https://www.linkedin.com/in/sanskriti/"
  },
    {
    id: 5,
    name: "Naren Sathishkumar",
    role: "Co-Lead Organizer",
    major: "Computer Science",
    year: "2nd Year",
    bio: "Naren is a 2nd-year undergraduate computer science major. He's interested quantum optimization algorithms and building the latest in quantum software. He's currently researching heuristics to solve the qubit mapping problem. Outside of programming, he enjoys mountain biking and skiing in the mountains..",
    image: "/images/Naren.png",
    linkedin: "https://www.linkedin.com/in/naren-sathishkumar/"
  },
 
];



export default function TeamPage() {
  const [expandedMember, setExpandedMember] = useState<number | null>(null);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const check = () => setIsSmallScreen(window.innerWidth < 1024);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  return (
    <div className="min-h-screen bg-black via-blue-900 to-black text-white py-30 px-5">
      <Image
        src="/images/atom.png"
        alt="QCSA Logo"
        width={150}
        height={200}
        className="mx-auto mb-6" 
      />
      
      <h2
        className="font-kantumruy text-4xl sm:text-3xl md:text-6xl font-semibold mb-4 sm:mb-6 md:mb-8 text-center"
        style={{
          background: 'linear-gradient(to right, #8b5cf6, #8b5cf6, #f472b6, #8b5cf6, #3b82f6)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}
      >
        Registered Organizing Commitee
      </h2>
      
      
      {/* First row: Lead Organizer centered */}
      <div className="flex justify-center mb-12 max-w-6xl mx-auto">
        {boardMembers
          .filter(member => member.role === "Lead Organizer")
          .map((member) => {
          const isExpanded = expandedMember === member.id;
          const overlayActiveClass = isExpanded
            ? (isSmallScreen ? 'opacity-100 pointer-events-auto z-30' : 'opacity-100 pointer-events-auto')
            : 'opacity-0 pointer-events-none';

          return (
          <div
            key={member.id}
            className="relative bg-gray-800 rounded-lg p-6 transform transition-transform hover:scale-105 group w-80"
          >
            <div className="flex flex-col items-center relative z-0">
              <div className="w-32 h-32 mb-4">
                <Image
                  src={member.image}
                  alt={`${member.name} profile photo`}
                  width={128}
                  height={128}
                  className="rounded-full object-cover w-full h-full"
                  onError={(e) => { e.currentTarget.src = '/images/placeholder-profile.png'; }} 
                />
              </div>
              <h3 className="text-xl font-kantumruy font-semibold mb-1 text-center">{member.name}</h3>
              <p className="text-gray-400 mb-1 text-center font-kantumruy">{member.role}</p>
              <p className="text-gray-400 mb-1 text-center font-kantumruy">{member.major}, {member.year}</p>
            </div>

            {/* Info toggle button for mobile/keyboard users only */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setExpandedMember(expandedMember === member.id ? null : member.id);
              }}
              aria-expanded={expandedMember === member.id}
              aria-controls={`bio-${member.id}`}
              className="absolute top-3 right-3 z-20 bg-gray-700 text-white p-2 rounded-full focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500 lg:hidden"
            >
              <span className="sr-only">Toggle bio for {member.name}</span>
              i
            </button>

            {/* Bio overlay: clickable on desktop hover, toggleable on mobile */}
            <div
              id={`bio-${member.id}`}
              role="region"
              aria-hidden={!(expandedMember === member.id)}
              className={`absolute inset-0 bg-black bg-opacity-90 text-white p-3 transition-opacity duration-200 flex items-center justify-center text-sm md:text-xs text-center overflow-auto cursor-pointer
                ${overlayActiveClass} md:group-hover:opacity-100 md:group-hover:pointer-events-auto md:group-hover:z-30`}
              style={{backdropFilter: 'blur(4px)', WebkitOverflowScrolling: 'touch', touchAction: 'pan-y'}}
              onClick={(e) => {
                // Only navigate to LinkedIn if clicking on the overlay background, not the text content
                if (e.target === e.currentTarget && member.linkedin) {
                  window.open(member.linkedin, '_blank', 'noopener,noreferrer');
                }
              }}
            >
              <p className="max-h-[30vh] overflow-auto text-sm md:text-xs leading-5" style={{WebkitOverflowScrolling: 'touch'}}>{member.bio}</p>
            </div>
          </div>
          );
        })}
      </div>

      {/* Second row: Co-Lead Organizers in 4 columns */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {boardMembers
          .filter(member => member.role === "Co-Lead Organizer")
          .map((member) => {
          const isExpanded = expandedMember === member.id;
          const overlayActiveClass = isExpanded
            ? (isSmallScreen ? 'opacity-100 pointer-events-auto z-30' : 'opacity-100 pointer-events-auto')
            : 'opacity-0 pointer-events-none';

          return (
          <div
            key={member.id}
            className="relative bg-gray-800 rounded-lg p-6 transform transition-transform hover:scale-105 group"
          >
            <div className="flex flex-col items-center relative z-0">
              <div className="w-32 h-32 mb-4">
                <Image
                  src={member.image}
                  alt={`${member.name} profile photo`}
                  width={128}
                  height={128}
                  className="rounded-full object-cover w-full h-full"
                  onError={(e) => { e.currentTarget.src = '/images/placeholder-profile.png'; }} 
                />
              </div>
              <h3 className="text-xl font-kantumruy font-semibold mb-1 text-center">{member.name}</h3>
              <p className="text-gray-400 mb-1 text-center font-kantumruy">{member.role}</p>
              <p className="text-gray-400 mb-1 text-center font-kantumruy">{member.major}, {member.year}</p>
            </div>

            {/* Info toggle button for mobile/keyboard users only */}
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setExpandedMember(expandedMember === member.id ? null : member.id);
              }}
              aria-expanded={expandedMember === member.id}
              aria-controls={`bio-${member.id}`}
              className="absolute top-3 right-3 z-20 bg-gray-700 text-white p-2 rounded-full focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500 lg:hidden"
            >
              <span className="sr-only">Toggle bio for {member.name}</span>
              i
            </button>

            {/* Bio overlay: clickable on desktop hover, toggleable on mobile */}
            <div
              id={`bio-${member.id}`}
              role="region"
              aria-hidden={!(expandedMember === member.id)}
              className={`absolute inset-0 bg-black bg-opacity-90 text-white p-3 transition-opacity duration-200 flex items-center justify-center text-sm md:text-xs text-center overflow-auto cursor-pointer
                ${overlayActiveClass} md:group-hover:opacity-100 md:group-hover:pointer-events-auto md:group-hover:z-30`}
              style={{backdropFilter: 'blur(4px)', WebkitOverflowScrolling: 'touch', touchAction: 'pan-y'}}
              onClick={(e) => {
                // Only navigate to LinkedIn if clicking on the overlay background, not the text content
                if (e.target === e.currentTarget && member.linkedin) {
                  window.open(member.linkedin, '_blank', 'noopener,noreferrer');
                }
              }}
            >
              <p className="max-h-[30vh] overflow-auto text-sm md:text-xs leading-5" style={{WebkitOverflowScrolling: 'touch'}}>{member.bio}</p>
            </div>
          </div>
          );
        })}
      </div>

    </div>
  );
}