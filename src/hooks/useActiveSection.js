
import { useEffect, useState } from "react";

const sectionIds = [
  "home",
  "about",
  "experience",
  "skills",
  "projects",
  "certifications",
  "education",
  "contact",
];

export default function useActiveSection() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const updateActiveSection = () => {
      const scrollPosition = window.scrollY;
      const viewportHeight = window.innerHeight;
      const documentHeight =
        document.documentElement.scrollHeight;

      // Keep Home active at the top of the page.
      if (scrollPosition <= 20) {
        setActiveSection("home");
        return;
      }

      // Handle the last section at the bottom of the page.
      if (
        scrollPosition + viewportHeight >=
        documentHeight - 5
      ) {
        setActiveSection("contact");
        return;
      }

      // Detect the section below the fixed navigation bar.
      const detectionPoint = 120;

      const currentSection = [...sections]
        .reverse()
        .find(
          (section) =>
            section.getBoundingClientRect().top <=
            detectionPoint
        );

      setActiveSection(currentSection?.id || "home");
    };

    const observer = new IntersectionObserver(
      updateActiveSection,
      {
        root: null,
        rootMargin: "-80px 0px -60% 0px",
        threshold: 0,
      }
    );

    sections.forEach((section) => {
      observer.observe(section);
    });

    window.addEventListener(
      "scroll",
      updateActiveSection,
      { passive: true }
    );

    window.addEventListener(
      "resize",
      updateActiveSection
    );

    updateActiveSection();

    return () => {
      observer.disconnect();

      window.removeEventListener(
        "scroll",
        updateActiveSection
      );

      window.removeEventListener(
        "resize",
        updateActiveSection
      );
    };
  }, []);

  return activeSection;
}
