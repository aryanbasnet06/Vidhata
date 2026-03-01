import React from "react";
import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { ImpactMetrics } from "./components/ImpactMetrics";
import { About } from "./components/About";
import { Programs } from "./components/Programs";
import { Partners } from "./components/Partners";
import { WorkInAction } from "./components/WorkInAction";
import { RecognitionSection } from "./components/RecognitionSection";
import { GetInvolved } from "./components/GetInvolved";
import { VolunteerTrajectory } from "./components/VolunteerTrajectory";
import { Team } from "./components/Team";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-white">
      <Navigation />

      <main className="w-full">
        <Hero />
        <About />
        <Programs />
        <Partners />
        <WorkInAction />
        <RecognitionSection />
        <GetInvolved />
        <ImpactMetrics />
        <VolunteerTrajectory />
        <Team />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
