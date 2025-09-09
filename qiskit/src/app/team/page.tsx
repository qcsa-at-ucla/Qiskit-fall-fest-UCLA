import Footer from "../components/Footer";
import Header from "../components/Header";
import React from "react";
import TeamPage from "../components/team";

export default function Team() {
      return (
        <div className="min-h-screen flex flex-col">
          <Header />
          {/* <main id="main-content"> */}
          <TeamPage />
                <Footer />
          </div>
  );
}