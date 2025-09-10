'use client';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

// Board member data - you can easily expand this to 12 members or more or less :D
const boardMembers = [
  {
    id: 2,
    name: "Ilaana Khan",
    role: "Events & Advertisement",
    major: "Physics",
    year: "2nd Year",
  bio: "Ilaana is an undergraduate at UCLA studying Biophysics and on the QCSA leadership board. She is involved in the research of computational fluid dynamics to model blood vessels, talent development via mixed-methods psychology, and modeling distant stars in the Milky Way galaxy. Ilaana has previously worked with the American Cancer Society, ACM, City of Austin Law Department, Society of Robotic Surgeons, and Ascension Seton Medical Center in Austin. At UCLA, Ilaana is an editor at the Society and Genetics Research Journal and co-manager of the Upsilon Lab CFD group. She is also a nationally registered Emergency Medical Technician. Outside of her academic involvements, Ilaana loves Roblox, Minecraft, and caffeine. ",
  image: "/images/ilaana.png",
  linkedin: "https://www.linkedin.com/"
  },
  {
    id: 3,
    name: "Harshita Kukreja",
    role: "Head of Digital infrastructure",
    major: "Computer Science and Engineering",
    year: "2nd Year",
    bio: "Harshita is a second-year Computer Science and Engineering student at UCLA, minoring in Disability Studies. She is passionate about digital accessibility and inclusive design, and recently launched NextA11y, a web accessibility bootcamp for middle and high school students in India. Outside of coding, Harshita enjoys 3D modeling in SOLIDWORKS, sketching, and exploring campus.",
  image: "/images/harshita.png",
  linkedin: "https://www.linkedin.com/"
  },
  {
    id: 4,
    name: "Clyde Villacrusis",
    role: "Web Developer",
    major: "Computer Science",
    year: "4th Year",
    bio: "Helloo!! Clyde Villacrusis is an undergraduate 4th year Computer Science and Linguistics double major. He is apart of the QCSA's tech team and working on making an interactive and accessible website for all. He is extremely excited to learn more about Quantum Computing while also developing his tech skills. Besides QCSA. he also interned under UCLA Health to make their AI-powered application (still in progress) and he is also in fetch.ai x qcsa x bruin.ai research group to research more about predicting binding affinities using hybrid CNNs, traditional Machine learning modes, and quantum circuits! He also likes to play Valorant, Minecraft, nature, and caffeine. Hit him up anytime to learn or just to chat about anything!",
  image: "/images/clyde.png",
  linkedin: "https://www.linkedin.com/in/clydevillacrusis"
  },
  {
    id: 5,
    name: "Sanskriti Shindadkar",
    role: "Researcher Lead",
    major: "Bioengineering",
    year: "4th Year",
    bio: "Sanskriti is a fourth year undergraduate bioengineering student at UCLA. She enjoys exploring quantum computing for chemistry and biological applications. She has previously led the industry collaboration with QCSA, BruinAI, and Fetch.ai to explore the use of hybrid quantum-CNNs for predicting protein-ligand binding energies. She loves hearing about projects other people are working on and are excited about, so contact her any time to chat over lunch :)",
  image: "/images/sanskriti.png",
  linkedin: "https://www.linkedin.com/"
  },
   {
    id: 6,
    name: "Emma Zhang",
    role: "Web Developer",
    major: "Computer Science",
    year: "2nd Year",
    bio: "Emma is a second year undergraduate Computer Science student at UCLA with an interest in software development and AI. In her free time, she enjoys playing volleyball, visiting cafes, and learning Japanese.",
  image: "/images/emma.png",
  linkedin: "https://www.linkedin.com/"
  },
  
 
  {
    id: 7,
    name: "Kimberley Wu",
    role: "Designer",
    major: "Design Media Arts and Psychology",
    year: "2nd-Year",
    bio: "Kimberley is a second-year undergraduate studying Design Media Arts and Psychology. She is part of QCSA’s design team, creating engaging websites and developing their visual branding. She is excited to learn more about quantum science while building her design skills. Kimberley previously interned in communications at BOUSD and is currently involved in Daily Bruin, BruinLife, Adobe Creatives, and Stratist Prep. In her free time, she enjoys spontaneous side-quests, playing tennis, photography, and sketch-booking.",
  image: "/images/kimberley.png",
  linkedin: "https://www.linkedin.com/"
  },
  {
    id: 8,
    name: "Gina Namkung",
    role: "Designer",
    major: "Cognitive Science and Architecture",
    year: "2nd Year",
    bio: "Gina is a second year undergraduate Cognitive Science and Architecture student at UCLA. She is a part of the QCSA's design team and eager to create an intuitive and immersive website experience for all. Gina is passionate about learning more about the art of quantum while developing design skills. At UCLA Gina is involved in the Data-Graphics section of the Daily Bruin, secretary for the American Institute of Architecture Students, and worked as a designer for a journaling app called Rose Garden. In her free time you can find her exploring LA for new thrift finds and cafes.",
  image: "/images/gina.png",
  linkedin: "https://www.linkedin.com/"
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
        Meet the Organizers
      </h2>
      <div className="flex justify-center mb-24">
        <a
          href="https://qcsa.vercel.app/about"
          target="_blank"
          rel="noopener noreferrer"
          role="button"
          aria-label="Meet the rest of the board - opens in new tab"
          className="mt-4 inline-block px-6 py-2 rounded-md text-lg font-semibold focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500"
          style={{
            background: 'linear-gradient(to right, #8b5cf6, #f472b6, #3b82f6)',
            color: '#fff'
          }}
        >
          Meet the Rest of the Board
        </a>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {boardMembers.map((member) => {
          const isExpanded = expandedMember === member.id;
          // If expanded via toggle but we're on desktop, allow clicks to pass through
          const overlayActiveClass = isExpanded
            ? (isSmallScreen ? 'opacity-100 pointer-events-auto z-30' : 'opacity-100 pointer-events-none')
            : 'opacity-0 pointer-events-none';

          return (
          <div
            key={member.id}
            className="relative bg-gray-800 rounded-lg p-6 transform transition-transform hover:scale-105 group"
            onClick={(e) => {
              // On small screens, tapping the card toggles the bio. Prevent link navigation by disabling anchor pointer events on small screens.
              if (isSmallScreen) {
                e.stopPropagation();
                setExpandedMember(expandedMember === member.id ? null : member.id);
              }
            }}
          >
            {/* Full-card link to LinkedIn (opens in new tab). It's visually hidden but keyboard-focusable. */}
            <a
              href={member.linkedin ?? '#'}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${member.name} on LinkedIn (opens in new tab)`}
              className={`absolute inset-0 z-10 focus:outline-none ${isSmallScreen ? 'pointer-events-none' : ''}`}
              onClick={(e) => {
                // Clear any expanded bio and remove focus so overlay doesn't remain visible
                setExpandedMember(null);
                // blur the anchor to avoid persistent focus when returning to the tab
                (e.currentTarget as HTMLAnchorElement).blur();
              }}
            >
              <span className="sr-only">Open {member.name} on LinkedIn</span>
            </a>

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
              <h3 className="text-xl font-semibold mb-1 text-center">{member.name}</h3>
              <p className="text-gray-400 mb-1 text-center">{member.role}</p>
              <p className="text-gray-400 mb-1 text-center">{member.major}, {member.year}</p>
            </div>

            {/* Info toggle button for mobile/keyboard users. Does not trigger link due to z-index. */}
            <button
              type="button"
              onClick={(e) => {
                // Prevent the card-level onClick from firing
                e.stopPropagation();
                if (isSmallScreen) {
                  // On mobile, the button should open LinkedIn in a new tab
                  const url = member.linkedin ?? '#';
                  if (url && url !== '#') {
                    window.open(url, '_blank', 'noopener,noreferrer');
                    // close overlay if it was open
                    setExpandedMember(null);
                  }
                } else {
                  // On desktop, allow the button to toggle the bio for keyboard users
                  setExpandedMember(expandedMember === member.id ? null : member.id);
                }
              }}
              aria-expanded={expandedMember === member.id}
              aria-controls={`bio-${member.id}`}
              className="absolute top-3 right-3 z-20 bg-gray-700 text-white p-2 rounded-full focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500"
            >
              <span className="sr-only">{isSmallScreen ? `Open ${member.name} on LinkedIn` : `Toggle bio for ${member.name}`}</span>
              i
            </button>

            {/* Bio overlay: visible on hover/focus (desktop) or when toggled (mobile/keyboard).
                pointer-events are disabled when hidden so the underlying link remains clickable. */}
            <div
              id={`bio-${member.id}`}
              role="region"
              aria-hidden={!(expandedMember === member.id)}
              className={`absolute inset-0 bg-black bg-opacity-90 text-white p-3 transition-opacity duration-200 flex items-center justify-center text-sm md:text-xs text-center overflow-auto
                ${overlayActiveClass} md:group-hover:opacity-100 md:group-hover:pointer-events-none md:group-hover:z-30`}
              style={{backdropFilter: 'blur(4px)', WebkitOverflowScrolling: 'touch', touchAction: 'pan-y'}}
              onClick={(e) => {
                // If user taps the overlay background on small screens (not the scrollable content), close it.
                if (isSmallScreen && e.target === e.currentTarget) {
                  setExpandedMember(null);
                }
              }}
            >
              <p className="max-h-[60vh] overflow-auto text-sm md:text-xs leading-5" style={{WebkitOverflowScrolling: 'touch'}}>{member.bio}</p>
            </div>
          </div>
          );
        })}
      </div>
    </div>
  );
}