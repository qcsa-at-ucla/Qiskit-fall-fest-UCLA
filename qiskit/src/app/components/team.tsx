'use client';
import React, { useState } from 'react';
import Image from 'next/image';

// Board member data - you can easily expand this to 12 members or more or less :D
const boardMembers = [
  {
    id: 1,
    name: "Victor Yu",
    role: "President",
    major: "Physics",
    year: "2nd Year",
    bio: "Victor is a second year at UCLA studying Electrical Engineering with a minor in Mathematics. He works in the Petta Group to model the effects of cosmic rays on semiconductor spin qubits and to perform automated tune-up of quantum dot systems. He enjoys teaching others about quantum science, such as through QCSA's involvement in ACM Quantum. In his free time, he enjoys playing the piano, reading fantasy & science fiction, eating good food, and calisthenics. ",
    image: "/images/Victor Yu.png"
  },
  {
    id: 2,
    name: "Alexander Jurgens",
    role: "President",
    major: "EECS",
    year: "PhD Student",
    bio: "Alex is an EECS PhD student at the Narang Lab. He completed his BSc in Physics and MSc in Quantum Engineering at ETH Zürich in Switzerland and worked at IBM and the German Aerospace Center before joining UCLA in 2024. In his research, Alexander focuses on Quantum Algorithms and Learning Theory as well as optimization techniques and Machine Learning. On the rare occasion that he quantum tunnels outside the office he enjoys water sports, Brazilian Jiu Jitsu and all things Italian in nature.",
    image: "/images/alexander Jurgens.png"
  },
  {
    id: 3,
    name: "Nicolas Dirnegger",
    role: "Quantum Devices",
    major: "Electrical Engineering",
    year: "PhD Student",
    bio: "Nicolas received a Bachelor of Science in Electrical Engineering at ETH Zurich, Switzerland in 2022 and a Master of Science in Physics at the University of California, Los Angeles in 2023. He is currently pursuing a PhD in Electrical Engineering in the NarangLab. Currently, his main research focus is on quantum sensing and quantum networks. He also has research interests in quantum error correction and quantum computation. Feel free to reach out if you want to go surfing!",
    image: "/images/Nicolas Dirnegger.png"
  },
  // Add 9 more members following the same structure
  {
    id: 4,
    name: "Cody Fan",
    role: "Quantum Devices",
    major: "EE & Physics",
    year: "PhD Student",
    bio: "Cody received a double Bachelor of Science in Electrical Engineering and Physics from UCLA and a Masters of Science in Electrical Engineering from UCLA with a Distinguished Masters Thesis Award. He is currently pursuing a PhD at the Mesoscopic Optics and Quantum Electronics Lab as an NSF Graduate Research Fellow. Currently, his main research focus is on superconducting bosonic qubits and silicon color centers. Before starting graduate school, he interned at Stanford Research Institute as a Quantum Machine Learning Intern. In his free time, he enjoys producing music, cooking, fashion, and raving.",
    image: "/images/Cody Fan.png"
  },
  {
    id: 7,
    name: "Drew Downing",
    role: "Compliance",
    major: "Law",
    year: "4th Year",
    bio: "Drew is a 4th-year law student at UCLA, concentrating in Business Law & Policy, as well as Media, Entertainment, Technology & Sports Law. He additionally serves as a Chief Managing Editor for the UCLA Journal of Law & Technology, the Vice President of the Law & Entrepreneurship Association, and an Alumni & Career Outreach Chair for the AI Law Association. Before law school, he received his bachelor's degree in Mathematics & Philosophy from Boston University, minoring in Economics. After law school, he expects to pursue a career in transactional law in entrepreneurial sectors.",
    image: "/images/Drew.png"
  },
  {
    id: 8,
    name: "Samuel Oh",
    role: "Finances",
    major: "Computer Science & Economics",
    year: "3rd Year",
    bio: "Samuel is a 3rd-year Computer Science and Economics student at UCLA. He serves as Sector Head at Bruin Capital Management and is actively involved in multiple finance organizations on campus. Samuel previously served 18 months in the Republic of Korea Army, where he worked in Korean-English interpretation and military logistics. His past experiences also include internships in corporate finance and consulting. After graduation, he hopes to pursue a career in the finance industry.",
    image: "/images/Samuel.png"
  },
  {
    id: 9,
    name: "Ilaana Khan",
    role: "Events & Advertisement",
    major: "Physics",
    year: "2nd Year",
    bio: "Ilaana is an undergraduate at UCLA studying Biophysics and on the QCSA leadership board. She is involved in the research of computational fluid dynamics to model blood vessels, talent development via mixed-methods psychology, and modeling distant stars in the Milky Way galaxy. Ilaana has previously worked with the American Cancer Society, ACM, City of Austin Law Department, Society of Robotic Surgeons, and Ascension Seton Medical Center in Austin. At UCLA, Ilaana is an editor at the Society and Genetics Research Journal and co-manager of the Upsilon Lab CFD group. She is also a nationally registered Emergency Medical Technician. Outside of her academic involvements, Ilaana loves Roblox, Minecraft, and caffeine. ",
    image: "/images/ilaana.png"
  },
  {
    id: 10,
    name: "Naren Sathishkumar",
    role: "",
    major: "Computer Science",
    year: "2nd Year",
    bio: "Naren is a 2nd-year undergraduate computer science major. He's interested quantum optimization algorithms and building the latest in quantum software. He's currently researching heuristics to solve the qubit mapping problem. Outside of programming, he enjoys mountain biking and skiing in the mountains..",
    image: "/images/Naren.png"
  },
  {
    id: 11,
    name: "Connor Engel",
    role: "Technology Officer",
    major: "Computer Science",
    year: "3rd Year",
    bio: "Connor is a third-year undergraduate student majoring in Physics. He currently works as a research assistant in Professor Qianhui Shi’s laboratory, where he contributes to condensed matter physics. Connor is passionate about exploring the fundamental principles of physics and is particularly fascinated by the potential of photonics in advancing quantum computing technologies. He also has an adorable dog who is terrified of Connor getting weird ideas about boxes and superpositions.",
    image: "/images/Connor.png"
  },
  {
    id: 12,
    name: "Shreya Shirsathe",
    role: "Events & Advertisement",
    major: "Physics",
    year: "3rd Year",
    bio: "Shreya is a 3rd-year undergraduate Computer Engineering student. She is interested in quantum algorithms and hybrid quantum-classical systems. She enjoys connecting with others who share a passion for quantum computing and exploring how classical and quantum systems can work together. Outside of school, she enjoys snowboarding, dancing, and playing the guitar.",
    image: "/images/Shreya.png"
  },
  {
    id: 13,
    name: "Harshita Kukreja",
    role: "Head of Digital infrastructure",
    major: "Computer Science and Engineering",
    year: "2nd Year",
    bio: "Harshita is a second-year Computer Science and Engineering student at UCLA, minoring in Disability Studies. She is passionate about digital accessibility and inclusive design, and recently launched NextA11y, a web accessibility bootcamp for middle and high school students in India. Outside of coding, Harshita enjoys 3D modeling in SOLIDWORKS, sketching, and exploring campus.",
    image: "/images/harshita.png"
  },
  {
    id: 14,
    name: "Clyde Villacrusis",
    role: "Web Developer",
    major: "Computer Science",
    year: "4th Year",
    bio: "Helloo!! Clyde Villacrusis is an undergraduate 4th year Computer Science and Linguistics double major. He is apart of the QCSA's tech team and working on making an interactive and accessible website for all. He is extremely excited to learn more about Quantum Computing while also developing his tech skills. Besides QCSA. he also interned under UCLA Health to make their AI-powered application (still in progress) and he is also in fetch.ai x qcsa x bruin.ai research group to research more about predicting binding affinities using hybrid CNNs, traditional Machine learning modes, and quantum circuits! He also likes to play Valorant, Minecraft, nature, and caffeine. Hit him up anytime to learn or just to chat about anything!",
    image: "/images/clyde.png"
  },
  {
    id: 15,
    name: "Emma Zhang",
    role: "Web Developer",
    major: "Computer Science",
    year: "2nd Year",
    bio: "Emma is a second year undergraduate Computer Science student at UCLA with an interest in software development and AI. In her free time, she enjoys playing volleyball, visiting cafes, and learning Japanese.",
    image: "/images/emma.png"
  },
  {
    id: 16,
    name: "Kimberley Wu",
    role: "Designer",
    major: "Design Media Arts and Psychology",
    year: "2nd-Year",
    bio: "Kimberley is a second-year undergraduate studying Design Media Arts and Psychology. She is part of QCSA’s design team, creating engaging websites and developing their visual branding. She is excited to learn more about quantum science while building her design skills. Kimberley previously interned in communications at BOUSD and is currently involved in Daily Bruin, BruinLife, Adobe Creatives, and Stratist Prep. In her free time, she enjoys spontaneous side-quests, playing tennis, photography, and sketch-booking.",
    image: "/images/kimberley.png"
  },
  {
    id: 17,
    name: "Gina Namkung",
    role: "Designer",
    major: "Cognitive Science and Architecture",
    year: "2nd Year",
    bio: "Gina is a second year undergraduate Cognitive Science and Architecture student at UCLA. She is a part of the QCSA's design team and eager to create an intuitive and immersive website experience for all. Gina is passionate about learning more about the art of quantum while developing design skills. At UCLA Gina is involved in the Data-Graphics section of the Daily Bruin, secretary for the American Institute of Architecture Students, and worked as a designer for a journaling app called Rose Garden. In her free time you can find her exploring LA for new thrift finds and cafes.",
    image: "/images/gina.png"
  },
  {
    id: 18,
    name: "Sanskriti Shindadkar",
    role: "Researcher Lead",
    major: "Bioengineering",
    year: "4th Year",
    bio: "Sanskriti is a fourth year undergraduate bioengineering student at UCLA. She enjoys exploring quantum computing for chemistry and biological applications. She has previously led the industry collaboration with QCSA, BruinAI, and Fetch.ai to explore the use of hybrid quantum-CNNs for predicting protein-ligand binding energies. She loves hearing about projects other people are working on and are excited about, so contact her any time to chat over lunch :)",
    image: "/images/sanskriti.png"
  },
  {
    id: 19,
    name: "Sadman Ahmed Shanto",
    role: "President of USC QCSA",
    major: "PhD Candidate",
    year: "5th Year",
    bio: "Sadman Ahmed Shanto is a Ph.D. candidate in Physics at the University of Southern California, working in the Levenson-Falk Lab on superconducting quantum hardware. His research focuses on quasiparticle dynamics in superconducting circuits and the automation of quantum device design workflows. To learn more about his work and interests, you can visit https://sadmanahmedshanto.com/",
    image: "/images/shanto.png"
  }
];

export default function TeamPage() {
  const [clickMember, setClickMember] = useState<number | null>(null);

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
        Meet the Team
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {boardMembers.map((member) => (
          <div
            key={member.id}
            className="bg-gray-800 rounded-lg p-6 cursor-pointer transform transition-transform hover:scale-105"
            onClick={() => setClickMember(clickMember === member.id ? null : member.id)}
          >
            <div className="flex flex-col items-center">
              <div className="w-32 h-32 mb-4">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={128}
                  height={128}
                  className="rounded-full object-cover w-full h-full"
                  onError={(e) => { e.currentTarget.src = '/images/placeholder-profile.png'; }} 
                />
              </div>
              <h3 className="text-xl font-semibold mb-1 text-center">{member.name}</h3>
              <p className="text-gray-400 mb-1 text-center">{member.role}</p>
              <p className="text-gray-400 mb-1 text-center">{member.major}, {member.year}</p>
              
              {clickMember === member.id && (
                <div className="mt-4 text-sm text-gray-300 text-center">
                  <p>{member.bio}</p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}