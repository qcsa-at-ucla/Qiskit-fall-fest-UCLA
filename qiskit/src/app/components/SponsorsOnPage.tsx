import Sponsors from '../Components/Sponsors'

export default function BetweenPage() {
  return (
    <>
    <div className="flex flex-col items-center justify-center p-2 sm:p-4 lg:py-12">
    <h2 className="font-kantumruy text-[#234285] text-4xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6 md:mb-8 text-center">Past Sponsors</h2>
    <Sponsors direction="left" />
  </div>
</>
  );
}