import { FC, ReactElement } from "react";
import Navbar from "./components/Navbar/Navbar";

import HeroSection from "./components/HeroSection/HeroSection";
import Footer from "./components/Footer/Footer";
import About from "./components/About/About";
import ProjectsSection from "./components/Projects/Projects";
const App: FC = (): ReactElement => {
  return (
    <div className="min-h-100 flex flex-col">
      <Navbar />

      <main className="mx-auto max-w-3xl px-4 sm:px-6 md:max-w-5xl ">
        <HeroSection />
        <About />
        <ProjectsSection />
        <Footer />
      </main>
    </div>
  );
};

export default App;
