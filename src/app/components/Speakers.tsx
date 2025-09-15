import PersonCard from "./PersonCard";
import SpeakerCard from "./SpeakerCard";
import Link from 'next/link';

export default function Speakers() {
    const speakers = [
        { name: "Alexander Jürgens", img: "/img/alexander.jpg" },
        { name: "Nicolas Dirnegger", img: "/img/nicolas.jpg" },
        { name: "Victor Yu", img: "/img/victor.jpg" },
        { name: "Cody Fan", img: "/img/cody.jpg" },
    ];




  return (
    <section>
    <h2 
        className="mt-60 font-kantumruy text-4xl sm:text-5xl md:text-[64px] font-semibold mb-4 sm:mb-6 md:mb-8 text-center"
        style={{
            background: 'linear-gradient(to right, #3b82f6, #8b5cf6, #f472b6, #8b5cf6, #3b82f6)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
        }}
    > Meet the Speakers</h2>
        <div className = 'mt-20 mb-40 lg:mb-80 mx-auto max-w-5xl grid grid-cols-2 md:grid-cols-4 gap-8 px-4 place-items-center font-kantumruy text-2xl'>
            {speakers.map((s) => (
                <SpeakerCard key = {s.name} name={s.name} img = {s.img} />
            ))}

        </div>

        
        <div className="flex justify-center">
            <Link 
                    href="" 
                    className="px-16 py-6 text-3xl md:text-4xl lg:text-5xl font-kantumruy text-white font-semibold rounded-[38px] hover:opacity-80 shadow-lg hover:shadow-xl transform hover:scale-105 inline-block text-center transition-all duration-200"
                    style={{
                    background: 'linear-gradient(to right, #3b82f6, #8b5cf6, #f472b6)'
                    }}
                >
                    Register
            </Link>
        </div>

        <div className='grid grid-cols-2  gap-23 md:gap-30 lg:gap-28 xl:gap-20 place-items-center mb-40 md:mb-70 lg:mb-100 mt-20' >
            <div className = 'grid grid-cols-2 gap-2 md:gap-4 lg:gap-8'>
                <PersonCard img = '/images/grey.png'/>
                <div className = 'translate-y-13 md:translate-y-20 lg:translate-y-25 xl:translate-y-35'>
                    <PersonCard img = '/images/purple.png'/>
                </div>

            </div>
            <div className = 'grid grid-cols-2 gap-2 md:gap-4 lg:gap-8'>
                <div className = 'translate-y-13 md:translate-y-20 lg:translate-y-25 xl:translate-y-35'>
                    <PersonCard img = '/images/blue.png'/>
                </div>
                <PersonCard img = '/images/light.png'/>
            </div>

        </div>



    </section>
  )
}
