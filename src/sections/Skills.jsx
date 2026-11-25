
import { motion, useReducedMotion } from "framer-motion";

import {
  skillCategories,
  coreSkills,
} from "../data/skills.js";

import {
  Cloud,
  Code,
  Database,
  Layers,
  BarChart3,
  Terminal,
  Target,
  BrainCircuit,
} from "lucide-react";

import Container from "../components/ui/Container";
import SectionHeading from "../components/ui/SectionHeading";
import SkillBadge from "../components/ui/SkillBadge";

const iconMap = {
  cloud: Cloud,
  code: Code,
  layers: Layers,
  database: Database,
  "chart-column": BarChart3,
  terminal: Terminal,
  "brain-circuit": BrainCircuit,
};

const iconStyles = {
  primary: "border-primary/20 bg-primary/10 text-primary",
  accent: "border-accent/20 bg-accent/10 text-accent",
  purple: "border-violet-400/20 bg-violet-400/10 text-violet-400",
  success: "border-emerald-400/20 bg-emerald-400/10 text-emerald-400",
  default: "border-border bg-card text-muted",
};

export default function Skills() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="skills"
      className="relative border-y border-border/40 bg-surface/20 py-20 sm:py-24 lg:py-28"
    >
      <Container>
        <SectionHeading
          eyebrow="Tools & Technologies"
          title="Technical Expertise"
          description="Technologies, platforms and engineering practices for building reliable data pipelines, modern Lakehouse architectures, analytics solutions and AI-assisted workflows."
        />

        {/* Technical Skill Categories */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((category, index) => {
            const Icon = iconMap[category.icon] || Database;

            const isAICategory =
              category.id === "ai-emerging-technologies";

            return (
              <motion.article
                key={category.id}
                initial={
                  reduceMotion
                    ? false
                    : { opacity: 0, y: 25 }
                }
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={
                  reduceMotion
                    ? undefined
                    : { y: -5 }
                }
                viewport={{
                  once: true,
                  amount: 0.15,
                }}
                transition={{
                  duration: 0.45,
                  delay: reduceMotion
                    ? 0
                    : (index % 3) * 0.1,
                }}
                className={`group flex h-full flex-col rounded-2xl border border-border bg-surface/70 p-6 transition-colors duration-300 hover:border-accent/40 sm:p-7 ${
                  isAICategory
                    ? "sm:col-span-2 lg:col-span-3"
                    : ""
                }`}
              >
                {/* Category Icon */}
                <div
                  className={`mb-5 flex h-12 w-12 items-center justify-center rounded-xl border ${
                    iconStyles[category.variant] ||
                    iconStyles.default
                  }`}
                >
                  <Icon
                    size={25}
                    aria-hidden="true"
                  />
                </div>

                {/* Category Title */}
                <h3 className="text-xl font-bold tracking-tight text-heading transition-colors group-hover:text-accent">
                  {category.title}
                </h3>

                {/* Category Description */}
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {category.description}
                </p>

                {/* Skill Badges */}
                <div className="mt-6 flex flex-wrap gap-2.5">
                  {category.skills.map((skill) => (
                    <SkillBadge
                      key={skill}
                      variant={category.variant}
                      size="sm"
                    >
                      {skill}
                    </SkillBadge>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Core Professional Focus */}
        <motion.div
          initial={
            reduceMotion
              ? false
              : { opacity: 0, y: 20 }
          }
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
          className="relative mt-10 overflow-hidden rounded-2xl border border-accent/20 bg-linear-to-r from-primary/5 via-surface to-accent/5 p-6 sm:p-8"
        >
          {/* Decorative Glow */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-16 -top-16 h-48 w-48 rounded-full bg-accent/10 blur-3xl"
          />

          <div className="relative">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-accent/20 bg-accent/10">
                <Target
                  size={25}
                  className="text-accent"
                  aria-hidden="true"
                />
              </div>

              <div>
                <h3 className="text-xl font-bold text-heading">
                  Core Professional Focus
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-muted">
                  Technologies and engineering practices
                  central to my professional data
                  engineering experience.
                </p>
              </div>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              {coreSkills.map((skill) => (
                <SkillBadge
                  key={skill}
                  variant="accent"
                  size="md"
                >
                  {skill}
                </SkillBadge>
              ))}
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
