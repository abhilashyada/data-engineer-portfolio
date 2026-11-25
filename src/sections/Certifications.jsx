import certifications from "../data/certifications.js";
import { motion, useReducedMotion } from "framer-motion";

import {
  BookOpen,
  TrendingUp,
} from "lucide-react";

import Container from "../components/ui/Container";
import SectionHeading from "../components/ui/SectionHeading";
import CertificationCard from "../components/ui/CertificationCard";

// Professional Certifications

export default function Certifications() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="certifications"
      className="relative border-y border-border/40 bg-surface/20 py-20 sm:py-24 lg:py-28"
    >
      <Container>

        {/* Section Heading */}
        <SectionHeading
          eyebrow="Professional Credentials"
          title="Certifications"
          description="Professional certifications and continuous learning in modern data engineering, cloud technologies and analytics platforms."
        />

        {/* Certification Cards */}
        <div className="mx-auto grid max-w-7xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((certification, index) => (
            <motion.div
              key={certification.id}
              initial={
                reduceMotion
                  ? false
                  : { opacity: 0, y: 25 }
              }
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.15,
              }}
              transition={{
                duration: 0.5,
                delay: reduceMotion
                  ? 0
                  : (index % 3) * 0.15,
              }}
              className="h-full"
            >
              <CertificationCard
                certification={certification}
              />
            </motion.div>
          ))}
        </div>

        {/* Continuous Professional Development */}
        <motion.div
          initial={
            reduceMotion
              ? false
              : { opacity: 0, y: 20 }
          }
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.15,
          }}
          transition={{ duration: 0.5 }}
          className="relative mx-auto mt-10 max-w-7xl overflow-hidden rounded-2xl border border-accent/20 bg-linear-to-r from-primary/5 via-surface to-accent/5 p-6 sm:p-8"
        >

          {/* Decorative Background */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-accent/10 blur-3xl"
          />

          <div className="relative flex flex-col gap-5 sm:flex-row sm:items-start">

            {/* Learning Icon */}
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-accent/20 bg-accent/10">
              <BookOpen
                size={28}
                className="text-accent"
                aria-hidden="true"
              />
            </div>

            {/* Learning Description */}
            <div className="flex-1">
              <h3 className="text-xl font-bold tracking-tight text-heading sm:text-2xl">
                Continuous Professional Development
              </h3>

              <p className="mt-3 max-w-3xl text-sm leading-relaxed text-muted sm:text-base">
                I continuously expand my technical knowledge
                through hands-on projects, professional
                certifications and practical learning across
                modern data engineering platforms, cloud
                technologies and analytics solutions.
              </p>

              {/* Continuous Learning Badge */}
              <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/5 px-4 py-2">
                <TrendingUp
                  size={16}
                  className="text-accent"
                  aria-hidden="true"
                />

                <span className="text-xs font-medium text-accent sm:text-sm">
                  Committed to continuous learning
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
