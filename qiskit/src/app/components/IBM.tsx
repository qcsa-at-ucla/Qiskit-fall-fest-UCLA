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
                  className="text-4xl md:text-5xl font-bold font-kantumruy mb-6"
                  style={{
                    background: 'linear-gradient(to right, #3b82f6 0%, #8b5cf6 25%, #f472b6 50%, #8b5cf6 75%, #3b82f6 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}
                >
                  IBM Qiskit
                </h2>
                
                <div className="space-y-4">
                  <p className="text-lg md:text-xl leading-relaxed font-kantumruy text-white">
                    yap yap yap
                  </p>
                </div>
                
                {/* Learn More Button */}
                <div className="pt-6">
                  <div className="flex justify-start">
                    <Link 
                      href="../about/" 
                      className="px-8 py-4 text-lg font-kantumruy text-white font-semibold rounded-full hover:opacity-80 transition-opacity duration-200 shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform inline-block text-center"
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
                <div 
                  className="w-full max-w-md lg:max-w-lg xl:max-w-xl relative rounded-lg"
                  style={{ backgroundColor: '#c8a8e9' }}
                >
                  {/* Placeholder for image content */}
                  <div className="w-full h-80 lg:h-96 rounded-lg"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}