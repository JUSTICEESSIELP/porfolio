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

      <HeroSection />
      <About />
      <ProjectsSection />
      <Footer />
    </div>
  );
};

export default App;
