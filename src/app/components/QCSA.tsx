import Link from 'next/link';
import Image from 'next/image';

export default function QCSA() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Main About Us Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black flex-grow">
        <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row justify-between items-start w-full gap-8 lg:gap-16">
            {/* Image Section - Now on the left */}
            <div className="lg:w-6/12 lg:ml-8 w-full">
              <div className="flex justify-center lg:justify-start">
                <div 
                  className="w-full max-w-md lg:max-w-lg xl:max-w-xl relative rounded-lg"
                  style={{ background: 'linear-gradient(to right,#C3B5FF, #DFB1F9, #F0B3EB, #DFB1F9, #C3B5FF)', }}
                >
                  {/* Placeholder for image content */}
                  <div className="w-full h-80 lg:h-96 rounded-lg"></div>
                </div>
              </div>
            </div>
            
            {/* Text Content Section - Now on the right */}
            <div className="lg:w-6/12 lg:mr-8 w-full">
              <div className="space-y-8 text-left">
              <h2 
                className="text-4xl md:text-5xl font-bold font-kantumruy mb-6"
                style={{
                    background: 'linear-gradient(90deg, #9174FF 0%, #B471F2 25%, #F57CBD 50%, #B471F2 75%, #9174FF 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundSize: '100% 100%',
                    display: 'inline-block'
                }}
                >
                QCSA
                </h2>


                <div className="space-y-4">
                  <p className="text-lg md:text-xl leading-relaxed font-kantumruy text-white">
                    We&apos;re UCLA’s premier quantum science and technology organization, bringing together undergraduates and graduates under CQSE. We host talks by faculty, students, and partner institutions, covering the full spectrum of quantum information science: from quantum computers and sensors to algorithms and beyond.
                  </p>
                </div>
                
                {/* Learn More Button */}
                <div className="pt-6">
                  <div className="flex justify-start">
                    <Link 
                      href="https://qcsa.vercel.app/" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-8 py-4 text-lg font-kantumruy text-white font-semibold rounded-full hover:opacity-80 shadow-lg hover:shadow-xl transform hover:scale-105 inline-block text-center transition-all duration-200"                      style={{
                        background: 'linear-gradient(to right, #3b82f6, #8b5cf6, #f472b6)'
                      }}
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}