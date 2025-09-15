import Image from 'next/image';

export default function QiskitFallFest() {
  return (
    <section className="w-full min-h-screen bg-black flex items-center justify-center py-20 px-4">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        
        {/* Left Content */}
        <div className="flex-1 text-left">
          <h1 className="text-white text-7xl mb-14 font-kantumruy">
            IBM Qiskit
          </h1>
          
            <Image
              src="/images/Fall_fest_2025.png"
              alt="Fall Fest 2025"
              width={520}
              height={140}
              className="object-contain"
            />
        </div>

        {/* Center Logo */}
        <div className="flex-shrink-0">
          <div className="w-64 h-64 lg:w-80 lg:h-80 relative">
            <Image
              src="/images/qiskit_fall_fest.png"
              alt="Qiskit Fall Fest 2025 Logo"
              fill
              className="object-contain"
            />
          </div>
        </div>

        {/* Right Content */}
        <div className="flex-1 text-right flex flex-col items-end">
          {/* <div className="text-white text-lg lg:text-xl mb-4">
            Specific Date
          </div> */}
          
          <div className="text-white text-4xl mb-4 px-0 font-kantumruy">
            October 17th - 19th
          </div>
          
          <button className=" px-16 py-10 text-2xl lg:text-5xl font-kantumruy font-bold text-white rounded-full bg-gradient-to-r from-[#4589FF] via-[#A56EFF] to-[#FF7EB6] hover:opacity-90 transition-opacity duration-300 shadow-lg">
            Register
          </button>
        </div>
      </div>
    </section>
  );
}