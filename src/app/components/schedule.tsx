"use client";

import React, { useState } from 'react';

interface ScheduleItem {
  time: string;
  title: string;
  description: string;
}

interface DaySchedule {
  day: string;
  title: string;
  subtitle: string;
  location: string;
  capacity?: string;
  schedule: ScheduleItem[];
}

const scheduleData: DaySchedule[] = [
  {
    day: "Day 1",
    title: "Kickoff",
    subtitle: "Opening Ceremony & Networking",
    location: "Main Stage Hall + Patio | Hybrid (In-person + Livestream)",
    capacity: "100 in-person, ~300 online",
    schedule: [
      {
        time: "10:00 am – 11:00 am",
        title: "Opening Speaker",
        description: "Potential IBM speaker. Intro to this year's theme (e.g., history of quantum science & innovation). Broad, inspiring, non-technical talk."
      },
      {
        time: "11:00 am – 1:00 pm",
        title: "Networking + Refreshments",
        description: "Drinks & bites served; informal networking in hall and patio."
      },
      {
        time: "1:00 pm – 3:00 pm",
        title: "Career Panel",
        description: "10–20 professionals in quantum (academia + industry) discuss their work and paths into the field. Hybrid Q&A."
      },
      {
        time: "3:00 pm – 7:00/9:00 pm",
        title: "Speaker Sessions",
        description: "1–3 additional talks from experts on the future of quantum computing, applications, and advantages (broad audience focus)."
      }
    ]
  },
  {
    day: "Day 2",
    title: "Qiskit Workshop",
    subtitle: "Hands-on Learning with Qiskit",
    location: "Workshop Room (workspace style: tables, outlets, screens, whiteboards)",
    capacity: "Cap 100 in-person (application only) + ~300 online",
    schedule: [
      {
        time: "10:00 am – 1:00 pm",
        title: "Morning Workshop Session",
        description: "Guided learning with Qiskit experts (basic gates, quantum circuits, Grover's algorithm, transpilation, etc.)."
      },
      {
        time: "1:00 pm – 3:00 pm",
        title: "Catered Lunch + Socializing",
        description: "Networking break with provided meals."
      },
      {
        time: "3:00 pm – 6:00 pm",
        title: "Afternoon Workshop Session",
        description: "Hands-on Qiskit challenges with 5–20 experts roaming for help. One expert dedicated to online support."
      }
    ]
  },
  {
    day: "Day 3",
    title: "Hackathon & Closing Ceremony",
    subtitle: "Build & Present Your Quantum Project",
    location: "Workshop Room (for hacking) + Main Stage (for ceremony)",
    capacity: "50 hackers (application only) + 50–100 ceremony attendees",
    schedule: [
      {
        time: "9:00 am",
        title: "Hackathon Check-in",
        description: "Registration and team formation."
      },
      {
        time: "9:30 am – 5:00 pm",
        title: "Hackathon",
        description: "Topic announced, teams work on Jupyter notebooks. Experts available for support. Catering snack bar provided."
      },
      {
        time: "5:00 pm – 6:00 pm",
        title: "Team Presentations",
        description: "Each team presents 2–3 min + submits notebook. Judges review."
      },
      {
        time: "6:30 pm – 7:30 pm",
        title: "Closing Ceremony",
        description: "Closing speech (potential IBM speaker). 1–2 additional short speeches (e.g., UCLA alumni, IBM quantum). Build-up to awards."
      },
      {
        time: "7:30 pm – 8:00 pm",
        title: "Hackathon Winner Announcements",
        description: "Award ceremony and celebration."
      }
    ]
  }
];

const Schedule: React.FC = () => {
  const [expandedDay, setExpandedDay] = useState<number | null>(null);

  const toggleExpanded = (index: number) => {
    setExpandedDay(expandedDay === index ? null : index); 
  };

  return (
        <section className="py-16 bg-[black] text-white">
        <div className="container mx-auto px-4">
            <div className="text-center mb-12">
            <div className="bg-black flex flex-col items-center justify-center py-2">
            <h2 
            className="font-kantumruy text-4xl sm:text-3xl md:text-4xl font-semibold mb-4 sm:mb-6 md:mb-8 text-center"
                style={{
                    background: 'linear-gradient(to right, #3b82f6, #8b5cf6, #f472b6, #8b5cf6, #3b82f6)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent', 
                    backgroundClip: 'text'
                }}
                >
                Event Schedule
        </h2>
    </div>
          <p className="font-kantumruy text-gray-300 text-lg max-w-2xl mx-auto">
            Join us for three exciting days of quantum computing exploration, learning, and innovation
          </p>
        </div>

        {/* Schedule Divs */}
        <div className="max-w-4xl mx-auto space-y-6">
          {scheduleData.map((day, index) => (
            <div
              key={index}
              className="rounded-2xl p-8 cursor-pointer hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 relative overflow-hidden"
              style={{
                backgroundImage: 'url(/images/schedule_rectangle.png)',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat'
              }}
              onClick={() => toggleExpanded(index)}
            >
              {/* Background overlay for better text readability */}
              
              
              {/* Content */}
              <div className="relative z-10">
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className="text-6xl font-kantumruy text-white mb-3">
                      <span className="font-bold">{day.day}</span> - <span className="font-normal">{day.title}</span>
                    </h3>
                    
                    <p className="text-white/90 text-4xl mb-4 leading-relaxed font-kantumruy">{day.subtitle}</p>
                    <div className="flex items-center gap-2 text-white/80">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                      </svg>
                      <span className="text-2xl font-kantumruy">Location</span>
                    </div>
                  </div>
                  <div className="ml-4">
                    <svg
                      className={`w-8 h-8 text-white transition-transform duration-300 ${
                        expandedDay === index ? 'rotate-180' : ''
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </div>
                </div>
              </div>



              {/* Expanded Schedule Content */}
              {expandedDay === index && (
                <div className="relative z-10 mt-8 pt-6 border-t border-white/30">
                  <div className="space-y-4">
                    <div className="mb-4" >
                      <p className="text-white/90 text-lg mb-2">{day.location}</p>
                      {day.capacity && (
                        <p className="text-white/70">{day.capacity}</p>
                      )}
                    </div>
                    {day.schedule.map((item, itemIndex) => (
                      <div
                        key={itemIndex}
                        className="rounded-2xl p-8 cursor-pointer hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 relative overflow-hidden"
                        style={{
                          backgroundImage: 'url(/images/schedule_rectangle.png)',
                      
                          
                        }}
                      >
                        {/* Background overlay for better text readability */}
                      <div className="absolute inset-0 bg-black/30 rounded-lg"></div>
                        
                        <div className="flex flex-col md:flex-row md:items-start gap-4 relative z-10">
                          <div className="md:w-48 flex-shrink-0">
                            <span className="inline-block bg-white/20 text-white px-3 py-1 rounded-full text-sm font-kantumruy font-medium">
                              {item.time}
                            </span>
                          </div>
                          <div className="flex-1">
                            <h4 className="text-xl font-kantumruy font-semibold text-white mb-2">
                              {item.title}
                            </h4>
                            <p className="text-white/80 leading-relaxed font-kantumruy">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-400 text-2xl">
            Event schedule subject to change. Check back for updates closer to the event.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Schedule;