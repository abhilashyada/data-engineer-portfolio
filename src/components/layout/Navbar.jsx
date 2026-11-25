
import profile from "../../data/profile.js";
import { useEffect, useState } from "react";

import {
  Database,
  Menu,
  X,
  ArrowUpRight,
} from "lucide-react";

import {
  motion,
  AnimatePresence,
  useReducedMotion,
} from "framer-motion";

import Container from "../ui/Container";
import Button from "../ui/Button";
import useActiveSection from "../../hooks/useActiveSection.js";

const navigation = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Education", href: "#education" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const reduceMotion = useReducedMotion();
  const activeSection = useActiveSection();
  const handleNavigation = (event, href) => {
  if (
    event.metaKey ||
    event.ctrlKey ||
    event.shiftKey ||
    event.altKey
  ) {
    return;
  }

  const target = document.getElementById(href.slice(1));

  if (!target) return;

  event.preventDefault();
  setIsOpen(false);

  if (window.location.hash !== href) {
    window.history.pushState(null, "", href);
  }

  target.scrollIntoView({
    behavior: "instant",
    block: "start",
  });
};

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
        isScrolled || isOpen
          ? "border-border/70 bg-background/95 shadow-lg backdrop-blur-xl"
          : "border-transparent bg-background/80 backdrop-blur-md"
      }`}
    >
      <Container>
        <nav
          aria-label="Main navigation"
          className="flex h-20 items-center justify-between gap-4"
        >
          {/* Brand Identity */}
          <a
            href="#home"
            onClick={(event) => handleNavigation(event, "#home")}
            className="group flex shrink-0 items-center gap-3"
            aria-label={`${profile.personal.fullName} — Home`}
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-accent/30 bg-accent/10 transition-colors group-hover:bg-accent/20">
              <Database
                size={23}
                className="text-accent"
                aria-hidden="true"
              />
            </div>

            <div>
              <span className="block text-base font-bold tracking-tight text-heading">
                {profile.personal.fullName}
              </span>

              <span className="block text-xs font-medium tracking-wide text-accent">
                {profile.personal.professionalTitle}
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-5 xl:flex">
            {navigation.map((item) => {
              const isActive =
                activeSection === item.href.slice(1);

              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(event) => handleNavigation(event, item.href)}
                  aria-current={
                    isActive ? "location" : undefined
                  }
                  className={`relative py-2 text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? "text-accent"
                      : "text-muted hover:text-accent"
                  }`}
                >
                  {item.label}

                  {/* Active Navigation Underline */}
                  {isActive && (
                    <motion.span
                      layoutId={
                        reduceMotion
                          ? undefined
                          : "desktop-active-navigation"
                      }
                      initial={false}
                      transition={{
                        type: "spring",
                        stiffness: 350,
                        damping: 30,
                        duration: reduceMotion ? 0 : undefined,
                      }}
                      aria-hidden="true"
                      className="absolute inset-x-0 bottom-0 h-0.5 rounded-full bg-accent"
                    />
                  )}
                </a>
              );
            })}
          </div>

          {/* Desktop Contact Button */}
          <div className="hidden xl:block">
            <Button
              href="#contact"
              onClick={(event) => handleNavigation(event, "#contact")}
              variant={
                activeSection === "contact"
                  ? "outline"
                  : "primary"
              }
              size="sm"
              icon={ArrowUpRight}
              aria-current={
                activeSection === "contact"
                  ? "location"
                  : undefined
              }
            >
              Contact
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            type="button"
            onClick={() => setIsOpen((previous) => !previous)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-surface text-heading transition-colors hover:border-accent hover:text-accent xl:hidden"
          >
            {isOpen ? (
              <X size={24} aria-hidden="true" />
            ) : (
              <Menu size={24} aria-hidden="true" />
            )}
          </button>
        </nav>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              id="mobile-navigation"
              initial={
                reduceMotion
                  ? false
                  : { opacity: 0, height: 0 }
              }
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{
                duration: reduceMotion ? 0 : 0.25,
              }}
              className="overflow-hidden xl:hidden"
            >
              <div className="max-h-[calc(100dvh-5rem)] space-y-1 overflow-y-auto border-t border-border pb-5 pt-3">
                {navigation.map((item) => {
                  const isActive =
                    activeSection === item.href.slice(1);

                  return (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={(event) => handleNavigation(event, item.href)}
                      aria-current={
                        isActive ? "location" : undefined
                      }
                      className={`flex items-center justify-between rounded-lg border px-4 py-3 text-sm font-medium transition-colors duration-200 ${
                        isActive
                          ? "border-accent/20 bg-accent/10 text-accent"
                          : "border-transparent text-muted hover:bg-surface hover:text-accent"
                      }`}
                    >
                      {item.label}

                      {isActive && (
                        <span
                          aria-hidden="true"
                          className="h-2 w-2 rounded-full bg-accent"
                        />
                      )}
                    </a>
                  );
                })}

                <div className="pt-3">
                  <Button
                    href="#contact"
                    variant={
                      activeSection === "contact"
                        ? "outline"
                        : "primary"
                    }
                    icon={ArrowUpRight}
                    className="w-full"
                    onClick={(event) => handleNavigation(event, "#contact")}
                    aria-current={
                      activeSection === "contact"
                        ? "location"
                        : undefined
                    }
                  >
                    Contact Me
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </header>
  );
}
