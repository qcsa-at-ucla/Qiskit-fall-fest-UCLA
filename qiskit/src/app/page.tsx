import Sponsors from "./Components/Sponsors";
import Footer from "./Components/Footer";
import Header from "./Components/Header";

export default function Home() {
  return (
    <div>
      <Header />
      <main id="main-content">
        <Sponsors />
      </main>
      <Footer />
      {/* Add other components or content here as needed */}
    </div>
  );
}