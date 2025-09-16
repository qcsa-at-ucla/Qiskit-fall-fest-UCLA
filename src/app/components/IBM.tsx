import Link from 'next/link';
import Image from 'next/image';

export default function AboutUs() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Main About Us Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black flex-grow">
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-between items-start w-full gap-8 lg:gap-16">
            {/* Text Content Section */}
            <div className="lg:w-6/12 lg:ml-8 w-full">
              <div className="space-y-8 text-left">
                <h2 
                className="text-4xl font-bold font-kantumruy mb-6"
                style={{
                    background: 'linear-gradient(90deg, #9174FF 0%, #B471F2 25%, #F57CBD 50%, #B471F2 75%, #9174FF 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundSize: '100% 100%',
                    display: 'inline-block'
                }}
                >
                  Qiskit Fall Festival
                </h2>
                
                <div className="space-y-4">
                  <p className="text-2xl leading-relaxed font-kantumruy text-white">
                    Qiskit Fall Fest is a collection of quantum computing events that allows students, researchers and industry professionals to participate in various quantum-themed activities — including quantum challenges, hackathons, coding competitions, workshops, social events, and more. Each year, IBM® partners with a select group of university students and other volunteer hosts to help them plan and run the global roster of Fall Fest events. 
                  </p>
                </div>
                
                {/* Learn More Button */}
                <div className="pt-6">
                  <div className="flex justify-center">
                    <Link 
                      href="https://research.ibm.com/events/qiskit-fall-fest-2025" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-8 py-4 text-3xl font-kantumruy text-white font-bold rounded-full hover:opacity-80 shadow-lg hover:shadow-xl transform hover:scale-105 inline-block text-center transition-all duration-200"
                      style={{
                        background: 'linear-gradient(to right, #3b82f6, #8b5cf6, #f472b6)'
                      }}
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Image Section */}
            <div className="lg:w-6/12 lg:mr-8 w-full">
              <div className="flex justify-center lg:justify-end">
                <Image
                  src="/images/qiskit.png"
                  alt="Qiskit Fall Fest Logo"
                  width={600}
                  height={600}
                  className="object-contain max-w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}