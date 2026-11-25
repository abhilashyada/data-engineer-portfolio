import experiences from "../data/experience.js";
import { motion, useReducedMotion } from "framer-motion";

import {
  Briefcase,
  Calendar,
  MapPin,
  Database,
  Check,
  Layers,
} from "lucide-react";

import Container from "../components/ui/Container";
import SectionHeading from "../components/ui/SectionHeading";
import SkillBadge from "../components/ui/SkillBadge";



export default function Experience() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="experience"
      className="relative py-20 sm:py-24 lg:py-28"
    >
      <Container>
        <SectionHeading
          eyebrow="Professional Journey"
          title="Work Experience"
          description="Building reliable enterprise data engineering solutions using modern data platforms, scalable pipelines and engineering best practices."
        />

        {/* Experience Timeline */}
        <div className="mx-auto max-w-5xl space-y-8">
          {experiences.map((experience, index) => (
            <motion.div
              key={`${experience.designation} · {experience.role}-${experience.duration}`}
              initial={
                reduceMotion
                  ? false
                  : { opacity: 0, y: 25 }
              }
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{
                duration: 0.6,
                delay: reduceMotion ? 0 : index * 0.15,
              }}
              className="relative pl-10 sm:pl-16"
            >
              {/* Timeline Line */}
              <div
                aria-hidden="true"
                className="absolute bottom-0 left-4 top-5 w-px bg-linear-to-b from-accent/70 to-border/30 sm:left-6"
              />

              {/* Timeline Icon */}
              <div className="absolute left-0 top-0 z-10 flex h-8 w-8 items-center justify-center rounded-full border border-accent/40 bg-background shadow-lg shadow-accent/10 sm:h-12 sm:w-12">
                <Briefcase
                  size={20}
                  className="text-accent"
                  aria-hidden="true"
                />
              </div>

              {/* Experience Card */}
              <article className="rounded-2xl border border-border bg-surface/70 p-5 transition-colors duration-300 hover:border-accent/30 sm:p-8">

                {/* Company Header */}
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-bold tracking-tight text-heading sm:text-3xl">
                      {experience.designation} · {experience.role}
                    </h3>

                    <p className="mt-2 text-base font-semibold text-accent sm:text-lg">
                      {experience.designation}
                      {" | "}
                      {experience.role}
                    </p>
                  </div>

                  {experience.current && (
                    <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1.5 text-xs font-semibold text-emerald-400">
                      <span className="h-2 w-2 rounded-full bg-emerald-400 motion-safe:animate-pulse" />
                      Current
                    </span>
                  )}
                </div>

                {/* Employment Details */}
                <div className="mt-5 flex flex-wrap gap-x-6 gap-y-3 text-sm text-muted">
                  <div className="flex items-center gap-2">
                    <Calendar
                      size={16}
                      className="text-accent"
                      aria-hidden="true"
                    />

                    <span>{experience.duration}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <MapPin
                      size={16}
                      className="text-accent"
                      aria-hidden="true"
                    />

                    <span>{experience.location}</span>
                  </div>
                </div>

                {/* Enterprise Project */}
                {experience.project && (
                  <div className="mt-7 rounded-xl border border-border bg-background/60 p-5 sm:p-6">
                    <div className="flex items-start gap-3">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-accent/20 bg-accent/10">
                        <Database
                          size={22}
                          className="text-accent"
                          aria-hidden="true"
                        />
                      </div>

                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-muted">
                          Enterprise Project
                        </p>

                        <h4 className="mt-1 text-lg font-bold text-heading">
                          {experience.project.title} ({experience.project.shortName})
                          <p className="mt-2 text-sm font-medium text-accent">
                          Client: {experience.project.client}
                        </p>
                        </h4>

                        <p className="mt-2 text-sm font-medium text-blue-400">
                          {experience.project.domain}
                          {" · "}
                          {experience.project.platform}
                        </p>
                      </div>
                    </div>

                    <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
                      {experience.project.description}
                    </p>
                  </div>
                )}

                {/* Responsibilities */}
                <div className="mt-8">
                  <h4 className="mb-5 flex items-center gap-2 text-lg font-bold text-heading">
                    <Briefcase
                      size={19}
                      className="text-accent"
                      aria-hidden="true"
                    />

                    Key Responsibilities
                  </h4>

                  <ul className="space-y-4">
                    {experience.responsibilities.map(
                      (responsibility) => (
                        <li
                          key={responsibility}
                          className="flex items-start gap-3 text-sm leading-relaxed text-muted sm:text-base"
                        >
                          <div className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-500/10">
                            <Check
                              size={13}
                              className="text-emerald-400"
                              aria-hidden="true"
                            />
                          </div>

                          <span>{responsibility}</span>
                        </li>
                      )
                    )}
                  </ul>
                </div>

                {/* Technology Stack */}
                <div className="mt-8 border-t border-border pt-6">
                  <h4 className="mb-4 flex items-center gap-2 text-lg font-bold text-heading">
                    <Layers
                      size={19}
                      className="text-accent"
                      aria-hidden="true"
                    />

                    Technology Stack
                  </h4>

                  <div className="flex flex-wrap gap-2.5">
                    {experience.technologies.map(
                      (technology) => (
                        <SkillBadge
                          key={technology}
                          variant="primary"
                          size="sm"
                        >
                          {technology}
                        </SkillBadge>
                      )
                    )}
                  </div>
                </div>
              </article>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
