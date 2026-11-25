import profile from "../data/profile.js";
import { motion, useReducedMotion } from "framer-motion";

import {
  Workflow,
  Layers,
  ShieldCheck,
  Database,
  Briefcase,
  GraduationCap,
  MapPin,
} from "lucide-react";

import Container from "../components/ui/Container";
import SectionHeading from "../components/ui/SectionHeading";

const expertise = [
  {
    title: "Data Pipeline Engineering",
    description:
      "Developing reliable ETL pipelines and automated data orchestration workflows using Microsoft Fabric.",
    icon: Workflow,
  },
  {
    title: "Lakehouse Architecture",
    description:
      "Implementing Bronze, Silver and Gold layers to transform raw data into analytics-ready datasets.",
    icon: Layers,
  },
  {
    title: "Data Quality & Reliability",
    description:
      "Implementing data validation, reconciliation and quality checks to ensure accurate and consistent data.",
    icon: ShieldCheck,
  },
  {
    title: "Data Transformation",
    description:
      "Processing and transforming datasets using SQL, Python, PySpark and Delta Lake.",
    icon: Database,
  },
];

const professionalDetails = [
  {
    title: "{profile.employment.company}",
    description: "Project Engineer · {profile.professional.title}ing",
    icon: Briefcase,
  },
  {
    title: "B.Tech — Computer Science and Engineering",
    description: "CMR Engineering College · 2023",
    icon: GraduationCap,
  },
  {
    title: "Hyderabad, India",
    description: "Professional Location",
    icon: MapPin,
  },
];

export default function About() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="relative border-y border-border/40 bg-surface/20 py-20 sm:py-24 lg:py-28"
    >
      <Container>
        <div id="about-title">
          <SectionHeading
            eyebrow="Get to Know Me"
            title="About Me"
            description="Turning complex data into reliable, actionable business insights through modern {profile.professional.title}ing practices."
          />
        </div>

        <div className="grid items-stretch gap-8 lg:grid-cols-2">

          {/* Professional Summary */}
          <motion.div
            initial={
              reduceMotion
                ? false
                : { opacity: 0, y: 25 }
            }
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-border bg-surface/70 p-6 sm:p-8"
          >
            <h3 className="text-2xl font-bold tracking-tight text-heading">
              My Professional Journey
            </h3>

            <div className="mt-6 space-y-5 text-base leading-relaxed text-muted">
              <p>
                I am a{" "}
                <span className="font-semibold text-accent">
                  {profile.professional.title} at Wipro
                </span>
                , working on enterprise {profile.professional.title}ing
                solutions using Microsoft Fabric and modern
                Lakehouse architectures.
              </p>

              <p>
                My professional experience involves developing
                ETL pipelines, transforming data using SQL and
                PySpark, implementing Medallion Architecture,
                and performing data validation and reconciliation
                to ensure reliable datasets.
              </p>

              <p>
                I focus on building maintainable data workflows
                that support business analytics while following
                data quality, governance and engineering best
                practices.
              </p>

              <p>
                Beyond my professional responsibilities, I build
                hands-on {profile.professional.title}ing projects to strengthen
                my expertise in modern data platforms, automated
                pipelines and end-to-end analytics solutions.
              </p>
            </div>

            {/* Professional Information */}
            <div className="mt-8 space-y-5 border-t border-border pt-7">
              {professionalDetails.map((detail) => {
                const Icon = detail.icon;

                return (
                  <div
                    key={detail.title}
                    className="flex items-start gap-4"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-accent/20 bg-accent/10">
                      <Icon
                        size={20}
                        className="text-accent"
                        aria-hidden="true"
                      />
                    </div>

                    <div>
                      <p className="font-semibold text-heading">
                        {detail.title}
                      </p>

                      <p className="mt-1 text-sm leading-relaxed text-muted">
                        {detail.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Technical Expertise Cards */}
          <div className="grid gap-5 sm:grid-cols-2">
            {expertise.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.article
                  key={item.title}
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
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.45,
                    delay: reduceMotion ? 0 : index * 0.1,
                  }}
                  className="group flex flex-col rounded-2xl border border-border bg-surface/70 p-6 transition-colors duration-300 hover:border-accent/40"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl border border-accent/20 bg-accent/10 transition-colors group-hover:bg-accent/20">
                    <Icon
                      size={24}
                      className="text-accent"
                      aria-hidden="true"
                    />
                  </div>

                  <h3 className="text-lg font-bold leading-snug text-heading transition-colors group-hover:text-accent">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {item.description}
                  </p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
