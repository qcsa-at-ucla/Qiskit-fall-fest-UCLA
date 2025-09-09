import SponsorsText from "./Components/SponsorsText";
import Sponsors from "./Components/Sponsors";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import IBM from "./Components/IBM";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main id="main-content" className="flex-grow">
        <IBM />
        <SponsorsText />
        <Sponsors />
        {/* Add other components or content here as needed */}
      </main>
      <Footer />
    </div>
  );
}