
import { motion, useReducedMotion } from "framer-motion";

import {
  Code,
  ArrowUpRight,
  FolderOpen,
} from "lucide-react";

import {
  featuredProjects,
  otherProjects,
} from "../data/projects.js";

import Container from "../components/ui/Container";
import SectionHeading from "../components/ui/SectionHeading";
import ProjectCard from "../components/ui/ProjectCard";
import Button from "../components/ui/Button";



export default function Projects() {
  const reduceMotion = useReducedMotion();


  return (
    <section
      id="projects"
      className="relative py-20 sm:py-24 lg:py-28"
    >
      <Container>
        <SectionHeading
          eyebrow="Hands-on Implementations"
          title="Featured Projects"
          description="Practical data engineering implementations showcasing automated pipelines, modern data architectures, data quality practices and end-to-end analytics solutions."
        />

        {/* Featured Projects */}
        {featuredProjects.length > 0 && (
          <div className="mx-auto max-w-5xl space-y-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={
                  reduceMotion
                    ? false
                    : { opacity: 0, y: 30 }
                }
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.1,
                }}
                transition={{
                  duration: 0.6,
                  delay: reduceMotion
                    ? 0
                    : index * 0.15,
                }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>
        )}

        {/* Additional Projects */}
        {otherProjects.length > 0 && (
          <div className="mt-14">
            <div className="mb-7 flex items-center gap-3">
              <FolderOpen
                size={24}
                className="text-accent"
                aria-hidden="true"
              />

              <h3 className="text-2xl font-bold text-heading">
                More Projects
              </h3>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {otherProjects.map((project, index) => (
                <motion.div
                  key={project.id}
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
                    amount: 0.1,
                  }}
                  transition={{
                    duration: 0.5,
                    delay: reduceMotion
                      ? 0
                      : (index % 2) * 0.1,
                  }}
                  className="h-full"
                >
                  <ProjectCard project={project} />
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* GitHub Call to Action */}
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
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto mt-12 max-w-5xl rounded-2xl border border-border bg-surface/50 p-6 text-center sm:p-10"
        >
          <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-accent/20 bg-accent/10">
            <Code
              size={28}
              className="text-accent"
              aria-hidden="true"
            />
          </div>

          <h3 className="text-xl font-bold text-heading sm:text-2xl">
            Explore More on GitHub
          </h3>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-muted sm:text-base">
            Explore my source code, technical
            implementations and hands-on data
            engineering projects on GitHub.
          </p>

          <div className="mt-6 flex justify-center">
            <Button
              href="https://github.com/abhilashyada"
              variant="secondary"
              size="lg"
              icon={ArrowUpRight}
              external
            >
              View GitHub Profile
            </Button>
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
