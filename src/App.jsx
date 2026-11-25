import { MotionConfig } from "framer-motion";

// Layout Components
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";

// Portfolio Sections
import Hero from "./sections/Hero";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Certifications from "./sections/Certifications";
import Education from "./sections/Education";
import Contact from "./sections/Contact";

// Global Ambient Background
function AmbientBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
    >
      {/* Deep Navy Base */}
      <div className="absolute inset-0 bg-background" />

      {/* Upper Right Blue Glow */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 90% 10%, rgba(37, 99, 235, 0.10), transparent 45%)",
        }}
      />

      {/* Lower Left Cyan Glow */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 10% 90%, rgba(6, 182, 212, 0.07), transparent 45%)",
        }}
      />

      {/* Subtle Background Grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(rgba(148, 163, 184, 0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(148, 163, 184, 0.025) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />
    </div>
  );
}

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="relative isolate flex min-h-screen flex-col bg-background text-heading">

        {/* Global Ambient Background */}
        <AmbientBackground />

        {/* Accessible Skip Navigation */}
        <a
          href="#main-content"
          className="fixed left-4 top-4 z-100 -translate-y-32 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-white shadow-lg focus:translate-y-0 focus:outline-2 focus:outline-offset-4 focus:outline-accent"
        >
          Skip to main content
        </a>

        {/* Global Navigation */}
        <Navbar />

        {/* Main Portfolio Content */}
        <main
          id="main-content"
          tabIndex={-1}
          className="relative z-10 flex-1 pt-20"
        >

          {/* Home / Hero */}
          <Hero />

          {/* Professional Introduction */}
          <About />

          {/* Professional Experience */}
          <Experience />

          {/* Technical Skills */}
          <Skills />

          {/* Featured Projects */}
          <Projects />

          {/* Professional Certifications */}
          <Certifications />

          {/* Academic Background */}
          <Education />

          {/* Professional Contact */}
          <Contact />

        </main>

        {/* Global Footer */}
        <div className="relative z-10">
          <Footer />
        </div>

      </div>
    </MotionConfig>
  );
}