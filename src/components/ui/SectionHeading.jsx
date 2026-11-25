
import { motion, useReducedMotion } from "framer-motion";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  className = "",
}) {
  const isCentered = align === "center";
  const reduceMotion = useReducedMotion();

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: reduceMotion ? 0 : 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 16,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const underlineVariants = {
    hidden: {
      opacity: 0,
      scaleX: 0,
    },
    visible: {
      opacity: 1,
      scaleX: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial={reduceMotion ? false : "hidden"}
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      className={`mb-12 ${
        isCentered ? "text-center" : "text-left"
      } ${className}`}
    >
      {/* Eyebrow Label */}
      {eyebrow && (
        <motion.span
          variants={itemVariants}
          className="mb-4 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          {eyebrow}
        </motion.span>
      )}

      {/* Section Title */}
      <motion.h2
        variants={itemVariants}
        className="text-3xl font-bold tracking-tight text-heading sm:text-4xl lg:text-5xl"
      >
        {title}
      </motion.h2>

      {/* Animated Gradient Underline */}
      <motion.div
        variants={underlineVariants}
        aria-hidden="true"
        className={`mt-5 h-1 w-16 rounded-full bg-linear-to-r from-primary to-accent ${
          isCentered
            ? "mx-auto origin-center"
            : "origin-left"
        }`}
      />

      {/* Section Description */}
      {description && (
        <motion.p
          variants={itemVariants}
          className={`mt-5 max-w-2xl text-base leading-relaxed text-muted sm:text-lg ${
            isCentered ? "mx-auto" : ""
          }`}
        >
          {description}
        </motion.p>
      )}
    </motion.div>
  );
}
