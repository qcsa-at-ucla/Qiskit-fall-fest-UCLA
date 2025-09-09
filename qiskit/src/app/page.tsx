import Sponsors from "./components/Sponsors";
import Footer from "./components/Footer";
import Header from "./components/Header";
import QiskitFallFest from "./components/qiskit_fall_fest";

export default function Home() {
  return (
    <div>
      <Header />
      <QiskitFallFest />
      <main id="main-content">
        <Sponsors />
      </main>
      <Footer />
      {/* Add other components or content here as needed */}
    </div>
  );
}