import QiskitFallFest from "./components/qiskit_fall_fest";
import SponsorsText from "./components/SponsorsText";
import Sponsors from "./components/Sponsors";
import Footer from "./components/Footer";
import Header from "./components/Header";
import IBM from "./components/IBM";
import QCSA from "./components/QCSA";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <QiskitFallFest />
      {/* <main id="main-content"> */}
      <main id="main-content" className="flex-grow">
        <QCSA />
        <IBM />
        <SponsorsText />
        <Sponsors />
        {/* Add other components or content here as needed */}
      </main>
      <Footer />
    </div>
  );
}