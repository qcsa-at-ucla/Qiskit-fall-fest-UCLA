import Sponsors from "./Components/SponsorsOnPage";
import Footer from "./Components/Footer";
import Header from "./Components/Header";

export default function Home() {
  return (
    <div>
      <Header />
      <main id="main-content">
        <Sponsors />
        {/* Add other components or content here as needed */}
      </main>
      <Footer />
    </div>
  );
}