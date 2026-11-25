import { motion, useReducedMotion } from "framer-motion";
import { Code, Database, Layers } from "lucide-react";

import Button from "./Button";
import SkillBadge from "./SkillBadge";

export default function ProjectCard({ project }) {
  const reduceMotion = useReducedMotion();

  const {
    title,
    subtitle,
    description,
    image,
    imageAlt,
    category,
    featured = false,
    technologies = [],
    githubUrl,
  } = project;

  return (
    <motion.article
      whileHover={reduceMotion ? undefined : { y: -5 }}
      transition={{
        type: "spring",
        stiffness: 250,
        damping: 25,
      }}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface/70 transition-colors duration-300 hover:border-accent/40"
    >
      {/* Project Cover */}
      <div className="relative aspect-video overflow-hidden border-b border-border bg-background">
        {image ? (
          <img
            src={image}
            alt={imageAlt || `${title} project preview`}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-contain transition-transform duration-500 motion-safe:group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full flex-col items-center justify-center gap-4 bg-linear-to-br from-surface to-background">
            <div className="rounded-2xl border border-accent/20 bg-accent/10 p-5">
              <Database
                size={48}
                className="text-accent"
                aria-hidden="true"
              />
            </div>

            <span className="text-sm font-medium text-muted">
              Data Engineering Project
            </span>
          </div>
        )}

        {featured && (
          <span className="absolute left-4 top-4 rounded-full border border-accent/30 bg-background/90 px-3 py-1.5 text-xs font-semibold text-accent backdrop-blur-sm">
            Featured Project
          </span>
        )}
      </div>

      {/* Project Content */}
      <div className="flex flex-1 flex-col p-5 sm:p-7">
        {category && (
          <div className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-accent">
            <Layers size={14} aria-hidden="true" />
            {category}
          </div>
        )}

        <h3 className="text-2xl font-bold tracking-tight text-heading transition-colors group-hover:text-accent">
          {title}
        </h3>

        {subtitle && (
          <p className="mt-2 text-sm font-medium text-blue-400">
            {subtitle}
          </p>
        )}

        <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
          {description}
        </p>

        {/* Technology Stack */}
        {technologies.length > 0 && (
          <div className="mt-6">
            <h4 className="mb-3 text-sm font-semibold text-heading">
              Technology Stack
            </h4>

            <div className="flex flex-wrap gap-2">
              {technologies.map((technology) => (
                <SkillBadge
                  key={technology}
                  size="sm"
                  variant="primary"
                >
                  {technology}
                </SkillBadge>
              ))}
            </div>
          </div>
        )}

        {/* GitHub Source Code */}
        {githubUrl && (
          <div className="mt-auto pt-6">
            <div className="border-t border-border/70 pt-5">
              <Button
                href={githubUrl}
                variant="secondary"
                size="sm"
                icon={Code}
                iconPosition="left"
                external
              >
                Source Code
              </Button>
            </div>
          </div>
        )}
      </div>
    </motion.article>
  );
}