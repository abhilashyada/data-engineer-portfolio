import education from "../data/education.js";
import { motion, useReducedMotion } from "framer-motion";

import {
  GraduationCap,
  Calendar,
  MapPin,
  BookOpen,
  CheckCircle,
  Layers,
} from "lucide-react";

import Container from "../components/ui/Container";
import SectionHeading from "../components/ui/SectionHeading";
import SkillBadge from "../components/ui/SkillBadge";

export default function Education() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="education"
      className="relative py-20 sm:py-24 lg:py-28"
    >
      <Container>

        {/* Section Heading */}
        <SectionHeading
          eyebrow="Academic Background"
          title="Education"
          description="The academic foundation behind my technical expertise and professional journey in data engineering."
        />

        {/* Education Cards */}
        <div className="mx-auto max-w-5xl space-y-8">
          {education.map((item, index) => (
            <motion.article
              key={item.id}
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
                duration: 0.6,
                delay: reduceMotion
                  ? 0
                  : index * 0.15,
              }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-surface/70 p-6 transition-colors duration-300 hover:border-accent/40 sm:p-8 lg:p-10"
            >

              {/* Decorative Background */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-accent/5 blur-3xl"
              />

              <div className="relative">

                {/* Education Header */}
                <div className="flex flex-col gap-5 sm:flex-row sm:items-start">

                  {/* Graduation Icon */}
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border border-accent/20 bg-accent/10 sm:h-20 sm:w-20">
                    <GraduationCap
                      size={36}
                      className="text-accent"
                      aria-hidden="true"
                    />
                  </div>

                  {/* Degree Information */}
                  <div className="flex-1">
                    <p className="text-xs font-semibold uppercase tracking-widest text-accent">
                      Undergraduate Degree
                    </p>

                    <h3 className="mt-2 text-2xl font-bold tracking-tight text-heading sm:text-3xl">
                      {item.degree}
                    </h3>

                    <p className="mt-2 text-base font-semibold text-blue-400 sm:text-lg">
                      {item.specialization}
                    </p>

                    <p className="mt-3 text-lg font-medium text-heading">
                      {item.institution}
                    </p>

                    {/* Graduation Details */}
                    <div className="mt-4 flex flex-wrap gap-x-6 gap-y-3 text-sm text-muted">
                      <div className="flex items-center gap-2">
                        <Calendar
                          size={17}
                          className="text-accent"
                          aria-hidden="true"
                        />

                        <span>
                          Graduated in {item.graduationYear}
                        </span>
                      </div>

                      <div className="flex items-center gap-2">
                        <MapPin
                          size={17}
                          className="text-accent"
                          aria-hidden="true"
                        />

                        <span>{item.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Completion Status */}
                  <div className="flex shrink-0">
                    <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-3 py-1.5 text-xs font-semibold text-emerald-400">
                      <CheckCircle
                        size={15}
                        aria-hidden="true"
                      />

                      {item.status}
                    </span>
                  </div>
                </div>

                {/* Academic Description */}
                <div className="mt-7 border-t border-border pt-6">
                  <p className="text-sm leading-relaxed text-muted sm:text-base">
                    {item.description}
                  </p>
                </div>

                {/* Academic Foundations */}
                <div className="mt-7">
                  <h4 className="mb-4 flex items-center gap-2 text-lg font-bold text-heading">
                    <Layers
                      size={20}
                      className="text-accent"
                      aria-hidden="true"
                    />

                    Academic Foundations
                  </h4>

                  <div className="flex flex-wrap gap-2.5">
                    {item.subjects.map((subject) => (
                      <SkillBadge
                        key={subject}
                        variant="primary"
                        size="sm"
                      >
                        {subject}
                      </SkillBadge>
                    ))}
                  </div>
                </div>

                {/* Academic Project */}
                {item.academicProject && (
                  <div className="mt-8 rounded-xl border border-border bg-background/60 p-5 sm:p-6">
                    <div className="flex items-start gap-4">

                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-accent/20 bg-accent/10">
                        <BookOpen
                          size={22}
                          className="text-accent"
                          aria-hidden="true"
                        />
                      </div>

                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wider text-accent">
                          Academic Project
                        </p>

                        <h4 className="mt-2 text-base font-semibold leading-relaxed text-heading sm:text-lg">
                          {item.academicProject.title}
                        </h4>
                      </div>

                    </div>
                  </div>
                )}

              </div>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}
