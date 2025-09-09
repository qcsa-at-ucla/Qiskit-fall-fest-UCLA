
type SpeakerProps = {
    name: string;
    img: string;
}

export default function SpeakerCard({name, img} : SpeakerProps ) {
  return (
    <div className="flex flex-col items center w-40">
        <div className="w-40 h-40 rounded-full bg-white overflow-hidden flex items-center justify-center">
            <img
            src={img}
            alt={name}
            className="w-full h-full object-cover"
            />
        </div>
        <p className="mt-8 text-white text-center w-full">{name}</p>
    </div>
  )
}
