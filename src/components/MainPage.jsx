import {
  About,
  Contact,
  Experience,
  Hero,
  Navbar,
  Works,
  StarsCanvas,
  Footer,
} from ".";
import * as React from "react";

const App = () => {
  return (
    <div className="relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar isHome={true} />
        <Hero />
      </div>
      <About />
      <Experience />
      <Works />
      <div className="relative z-0">
        <Contact />
        <StarsCanvas />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default App;
