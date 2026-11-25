
import profile from "../data/profile.js";

import { motion, useReducedMotion } from "framer-motion";

import {
  ArrowRight,
  ArrowUpRight,
  Code,
  MapPin,
  Briefcase,
  ChevronDown,
} from "lucide-react";

import Container from "../components/ui/Container";
import Button from "../components/ui/Button";

function ProfilePortrait() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={
        reduceMotion
          ? false
          : { opacity: 0, y: 25, scale: 0.96 }
      }
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{
        duration: 0.8,
        delay: reduceMotion ? 0 : 0.2,
        ease: "easeOut",
      }}
      className="relative mx-auto w-full max-w-105 px-3 sm:px-5"
    >
      {/* Ambient Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-5 rounded-full bg-primary/15 blur-[80px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-2 rounded-full bg-accent/10 blur-[60px]"
      />

      {/* Decorative Frame */}
      <div
        aria-hidden="true"
        className="absolute inset-0 rotate-3 rounded-4xl border border-primary/25 bg-primary/5"
      />

      <div
        aria-hidden="true"
        className="absolute inset-0 -rotate-3 rounded-4xl border border-accent/20"
      />

      {/* Profile Photograph */}
      <motion.div
        whileHover={
          reduceMotion
            ? undefined
            : { y: -5, scale: 1.015 }
        }
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 25,
        }}
        className="relative overflow-hidden rounded-4xl border border-border bg-surface p-2 shadow-2xl"
      >
        <div className="relative aspect-4/5 overflow-hidden rounded-[1.6rem]">
          <img
            src="/images/profile/profile.webp"
            alt={`Portrait of ${profile.personal.fullName}`}
            loading="eager"
            fetchPriority="high"
            decoding="async"
            width={900}
            height={1200}
            className="h-full w-full object-cover object-[center_45%]"
          />

          {/* Subtle Bottom Gradient */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-t from-slate-950/30 to-transparent"
          />
        </div>
      </motion.div>

      {/* Decorative Accent */}
      <div
        aria-hidden="true"
        className="absolute -right-1 -top-3 h-16 w-16 rounded-tr-3xl border-r-2 border-t-2 border-accent/60"
      />

      <div
        aria-hidden="true"
        className="absolute -bottom-3 -left-1 h-16 w-16 rounded-bl-3xl border-b-2 border-l-2 border-primary/60"
      />
    </motion.div>
  );
}

export default function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="relative flex min-h-[calc(100svh-5rem)] items-center overflow-hidden py-16 sm:py-20 lg:py-24"
    >
      {/* Decorative Background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 overflow-hidden"
      >
        <div className="absolute -left-40 top-10 h-96 w-96 rounded-full bg-primary/10 blur-[120px]" />

        <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-accent/10 blur-[120px]" />

        <div className="absolute inset-0 bg-[linear-gradient(to_right,#33415515_1px,transparent_1px),linear-gradient(to_bottom,#33415515_1px,transparent_1px)] bg-size-[48px_48px]" />
      </div>

      <Container className="relative z-10">
        <div className="grid items-center gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">

          {/* Professional Introduction */}
          <motion.div
            initial={
              reduceMotion
                ? false
                : { opacity: 0, y: 25 }
            }
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="min-w-0"
          >
            {/* Employment Status */}
            {profile.employment.currentlyEmployed && (
              <div className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2">
                <span className="h-2 w-2 shrink-0 rounded-full bg-emerald-400 motion-safe:animate-pulse" />

                <span className="text-xs font-medium text-emerald-400 sm:text-sm">
                  Currently working at {profile.employment.company}
                </span>
              </div>
            )}

            <p className="mb-3 text-lg font-medium text-muted">
              Hello, I'm
            </p>

            {/* Name */}
            <h1
              id="hero-title"
              className="text-4xl font-extrabold leading-tight tracking-tight text-heading sm:text-6xl xl:text-7xl"
            >
              {profile.personal.fullName}
            </h1>

            {/* Professional Title */}
            <p className="mt-3 bg-linear-to-r from-blue-400 to-accent bg-clip-text text-3xl font-bold tracking-tight text-transparent sm:text-4xl xl:text-5xl">
              {profile.personal.professionalTitle}
            </p>

            {/* Professional Headline */}
            <p className="mt-7 max-w-xl text-lg font-medium leading-relaxed text-heading sm:text-xl">
              Building reliable data solutions.
              <br className="hidden sm:block" />
              Turning complexity into clarity.
            </p>

            {/* Personal Introduction */}
            <p className="mt-4 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
              I'm a Data Engineer passionate about solving
              complex data challenges, building scalable
              solutions, and transforming raw data into
              meaningful insights. Driven by curiosity,
              continuous learning, and a commitment to
              engineering excellence.
            </p>

            {/* Primary Actions */}
            <div className="mt-9 flex flex-wrap gap-3">
              <Button
                href="#projects"
                variant="primary"
                size="lg"
                icon={ArrowRight}
              >
                View Projects
              </Button>

              <Button
                href="#contact"
                variant="secondary"
                size="lg"
                icon={ArrowUpRight}
              >
                Contact Me
              </Button>
            </div>

            {/* Professional Social Links */}
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Button
                href={profile.socialLinks.github.url}
                variant="ghost"
                size="md"
                icon={Code}
                iconPosition="left"
                external
              >
                GitHub
              </Button>

              <Button
                href={profile.socialLinks.linkedin.url}
                variant="ghost"
                size="md"
                icon={Briefcase}
                iconPosition="left"
                external
              >
                LinkedIn
              </Button>
            </div>

            {/* Location */}
            <div className="mt-7 flex items-center gap-2 text-sm text-muted">
              <MapPin
                size={17}
                className="shrink-0 text-accent"
                aria-hidden="true"
              />

              <span>{profile.personal.location}</span>
            </div>
          </motion.div>

          {/* Personal Profile Photograph */}
          <ProfilePortrait />

        </div>

        {/* Scroll Indicator */}
        <motion.a
          href="#about"
          aria-label="Scroll to About section"
          animate={
            reduceMotion
              ? undefined
              : { y: [0, 6, 0] }
          }
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="mx-auto mt-14 flex w-fit flex-col items-center gap-2 text-muted transition-colors hover:text-accent"
        >
          <span className="text-xs uppercase tracking-widest">
            Explore Portfolio
          </span>

          <ChevronDown size={22} aria-hidden="true" />
        </motion.a>
      </Container>
    </section>
  );
}
