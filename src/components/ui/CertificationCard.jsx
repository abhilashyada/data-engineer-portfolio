
import { motion, useReducedMotion } from "framer-motion";
import {
  Award,
  Calendar,
  ShieldCheck,
  ArrowUpRight,
} from "lucide-react";

import Button from "./Button";

export default function CertificationCard({ certification }) {
  const reduceMotion = useReducedMotion();

  const {
    title,
    issuer,
    issueDate,
    credentialId,
    credentialUrl,
    image,
    imageAlt,
    description,
  } = certification;

  return (
    <motion.article
      whileHover={reduceMotion ? undefined : { y: -5 }}
      transition={{
        type: "spring",
        stiffness: 250,
        damping: 25,
      }}
      className="group flex h-full flex-col rounded-2xl border border-border bg-surface/70 p-6 transition-[border-color,box-shadow] duration-300 hover:border-accent/40 hover:shadow-xl hover:shadow-primary/10 focus-within:border-accent/40"
    >
      {/* Certification Image or Icon */}
      <div className="mb-5 flex h-32 items-center justify-center rounded-xl border border-border/70 bg-background/60 p-4 transition-colors duration-300 group-hover:border-accent/20">
        {image ? (
          <img
            src={image}
            alt={imageAlt || `${title} certification`}
            loading="lazy"
            decoding="async"
            className="h-full w-full object-contain"
          />
        ) : (
          <div className="rounded-2xl border border-accent/20 bg-accent/10 p-4 transition-colors duration-300 group-hover:border-accent/40 group-hover:bg-accent/15">
            <Award
              size={48}
              className="text-accent"
              aria-hidden="true"
            />
          </div>
        )}
      </div>

      {/* Issuer */}
      <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-accent">
        {issuer}
      </p>

      {/* Certification Title */}
      <h3 className="text-xl font-bold leading-snug text-heading transition-colors group-hover:text-accent">
        {title}
      </h3>

      {/* Description */}
      {description && (
        <p className="mt-3 text-sm leading-relaxed text-muted">
          {description}
        </p>
      )}

      {/* Issue Date */}
      {issueDate && (
        <div className="mt-4 flex items-center gap-2 text-sm text-muted">
          <Calendar size={16} aria-hidden="true" />
          <span>Issued: {issueDate}</span>
        </div>
      )}

      {/* Credential ID */}
      {credentialId && (
        <div className="mt-3 flex items-start gap-2 text-xs text-muted">
          <ShieldCheck
            size={16}
            className="shrink-0 text-accent"
            aria-hidden="true"
          />

          <span className="break-all">
            Credential ID: {credentialId}
          </span>
        </div>
      )}

      {/* Credential Verification */}
      {credentialUrl && (
        <div className="mt-auto pt-6">
          <Button
            href={credentialUrl}
            variant="outline"
            size="sm"
            icon={ArrowUpRight}
            external
            className="w-full"
          >
            View Credential
          </Button>
        </div>
      )}
    </motion.article>
  );
}
