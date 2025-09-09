type PersonCardProps = {
    img: string;
}


export default function PersonCard({img}: PersonCardProps) {
  return (
    <div className = 'flex flex-col items-center w-20 md:w-35 lg:w-40 xl:w-50'>
        <img src={img} className = 'w-full h-full object-contain'></img>

    </div>
  )
}
