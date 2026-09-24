import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Ticker from "./components/Ticker";
import Positioning from "./components/Positioning";
import Pillars from "./components/Pillars";
import CaseStudies from "./components/CaseStudies";
import Team from "./components/Team";
import Global from "./components/Global";
import Insights from "./components/Insights";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-ink-900 font-sans">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-6 focus:top-6 focus:z-[100] focus:bg-bone-100 focus:px-5 focus:py-3 focus:text-sm focus:font-medium focus:text-ink-900"
      >
        Skip to content
      </a>

      <Nav />

      <main id="main">
        <Hero />
        <Ticker />
        <Positioning />
        <Pillars />
        <CaseStudies />
        <Team />
        <Global />
        <Insights />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}
