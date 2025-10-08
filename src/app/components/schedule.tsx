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
    location: "Boelter Hall: 8500",
    capacity: "50-60 in-person + online",
    schedule: [
      {
        time: "12:30 pm – 2:00 pm",
        title: "Workshop Part I",
        description: "Workshop I: Guided learning with Qiskit experts (basic gates, quantum circuits, Grover's algorithm, transpilation, etc.)."
      },
      {
        time: "2:00 pm – 3:00 pm",
        title: "Speaker Presentation + Q&A + 15 min break",
        description: "Speaker talk from IBM or UCLA professor on quantum computing fundamentals and future directions."
      },
      {
        time: "3:00 pm – 4:30 pm",
        title: "Workshop Part II",
        description: "Hands-on Qiskit challenges with experts roaming for help."
      }
    ]
  },

  {
    day: "Day 2",
    title: "Hackathon & Closing Ceremony",
    subtitle: "Build & Present Your Quantum Project",
    location: "Boelter Hall: 8500 for Hackathon and Mong for Closing Ceremony",
    capacity: "50 hackers (application only) + 50–100 ceremony attendees",
    schedule: [
      {
        time: "12:30 pm – 3:30 pm",
        title: "Hackathon Check-in",
        description: "Registration and team formation. Feel free to come early at Boelter 8500 around 9 am to meet others and form teams!"
      },
      {
        time: "3:30 pm – 6:00 pm",
        title: "Speaker Presentation + 15 min break",
        description: "Speaker talk from IBM or UCLA professor on quantum computing applications and future directions."
      },
      {
        time: "6:00 pm – 8:30 pm",
        title: "Closing Ceremony at Mong Learning Center (Engineering VI)",
        description: "Project presentations, judging, awards, and networking!"
      },

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