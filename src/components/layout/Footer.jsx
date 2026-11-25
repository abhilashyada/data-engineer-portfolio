import profile from "../../data/profile.js";
import { motion, useReducedMotion } from "framer-motion";

import {
  Database,
  Code,
  Briefcase,
  Mail,
  ArrowUp,
  ChevronRight,
  MapPin,
} from "lucide-react";

import Container from "../ui/Container";

// Footer Navigation Links
const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

// Core {profile.personal.professionalTitle}ing Expertise
const expertise = [
  "Microsoft Fabric",
  "{profile.personal.professionalTitle}ing",
  "Apache Spark",
  "SQL & Python",
  "Lakehouse Architecture",
  "ETL / ELT Pipelines",
];

// Professional Social Links

const socialLinks = [
  {
    label: "GitHub",
    href: profile.socialLinks.github.url,
    icon: Code,
  },
  {
    label: "LinkedIn",
    href: profile.socialLinks.linkedin.url,
    icon: Briefcase,
  },
  {
    label: "Email",
    href: profile.socialLinks.email.url,
    icon: Mail,
  },
];


export default function Footer() {
  const reduceMotion = useReducedMotion();

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-border/50 bg-background">

      {/* Decorative Background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -left-32 h-72 w-72 rounded-full bg-primary/5 blur-3xl"
      />

      <Container className="relative">

        {/* Main Footer Content */}
        <div className="grid gap-10 py-12 sm:grid-cols-2 sm:py-16 lg:grid-cols-12 lg:gap-12">

          {/* Professional Branding */}
          <div className="sm:col-span-2 lg:col-span-5">

            {/* Portfolio Logo */}
            <a
              href="#home"
              className="group inline-flex items-center gap-3"
              aria-label="{profile.personal.fullName} - Home"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-accent/20 bg-accent/10 transition-colors group-hover:bg-accent/20">
                <Database
                  size={25}
                  className="text-accent"
                  aria-hidden="true"
                />
              </div>

              <div>
                <p className="text-lg font-bold tracking-tight text-heading">
                  {profile.personal.fullName}
                </p>

                <p className="text-xs font-medium tracking-wide text-accent">
                  {profile.personal.professionalTitle}
                </p>
              </div>
            </a>

            {/* Professional Description */}
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted">
              Building scalable data pipelines, reliable
              data platforms and meaningful analytics
              solutions using modern cloud technologies
              and {profile.personal.professionalTitle}ing practices.
            </p>

            {/* Location */}
            <div className="mt-5 flex items-center gap-2 text-sm text-muted">
              <MapPin
                size={17}
                className="text-accent"
                aria-hidden="true"
              />

              <span>
                Hyderabad, Telangana, India
              </span>
            </div>

            {/* Social Links */}
            <div className="mt-6 flex flex-wrap gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;

                return (
                  <motion.a
                    key={social.id}
                    href={social.href}
                    target={
                      social.external
                        ? "_blank"
                        : undefined
                    }
                    rel={
                      social.external
                        ? "noopener noreferrer"
                        : undefined
                    }
                    aria-label={social.label}
                    title={social.label}
                    whileHover={
                      reduceMotion
                        ? undefined
                        : { y: -3 }
                    }
                    whileTap={
                      reduceMotion
                        ? undefined
                        : { scale: 0.95 }
                    }
                    className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-surface/70 text-muted transition-colors hover:border-accent/40 hover:bg-accent/10 hover:text-accent"
                  >
                    <Icon
                      size={20}
                      aria-hidden="true"
                    />
                  </motion.a>
                );
              })}
            </div>
          </div>

          {/* Quick Navigation */}
          <nav
            aria-label="Footer navigation"
            className="lg:col-span-3"
          >
            <h3 className="mb-5 text-base font-bold text-heading">
              Quick Links
            </h3>

            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="group inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-accent"
                  >
                    <ChevronRight
                      size={14}
                      className="text-accent/60 transition-transform motion-safe:group-hover:translate-x-1"
                      aria-hidden="true"
                    />

                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Core Expertise */}
          <div className="lg:col-span-4">
            <h3 className="mb-5 text-base font-bold text-heading">
              Core Expertise
            </h3>

            <ul className="space-y-3">
              {expertise.map((skill) => (
                <li
                  key={skill}
                  className="flex items-center gap-3 text-sm text-muted"
                >
                  <span
                    aria-hidden="true"
                    className="h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                  />

                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="flex flex-col gap-5 border-t border-border/50 py-6 sm:flex-row sm:items-center sm:justify-between">

          {/* Copyright Information */}
          <div>
            <p className="text-sm text-muted">
              © {currentYear} {profile.personal.fullName}. All rights reserved.
            </p>

            <p className="mt-2 text-xs leading-relaxed text-muted/80">
              Built with{" "}
              <span className="text-accent">
                React
              </span>
              ,{" "}
              <span className="text-accent">
                Tailwind CSS
              </span>
              {" & "}
              <span className="text-accent">
                Framer Motion
              </span>
              .
            </p>
          </div>

          {/* Back to Top */}
          <motion.a
            href="#home"
            aria-label="Back to top of the page"
            whileHover={
              reduceMotion
                ? undefined
                : { y: -3 }
            }
            whileTap={
              reduceMotion
                ? undefined
                : { scale: 0.97 }
            }
            className="group inline-flex w-fit items-center justify-center gap-2 rounded-xl border border-border bg-surface/70 px-4 py-2.5 text-sm font-medium text-muted transition-colors hover:border-accent/40 hover:bg-accent/10 hover:text-accent"
          >
            Back to Top

            <ArrowUp
              size={17}
              className="transition-transform motion-safe:group-hover:-translate-y-1"
              aria-hidden="true"
            />
          </motion.a>

        </div>
      </Container>
    </footer>
  );
}