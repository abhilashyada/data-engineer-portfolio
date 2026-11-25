
import { motion, useReducedMotion } from "framer-motion";

const variants = {
  default:
    "border-border bg-surface text-muted hover:border-accent/50 hover:text-heading",

  primary:
    "border-primary/30 bg-primary/10 text-blue-400 hover:border-primary",

  accent:
    "border-accent/30 bg-accent/10 text-accent hover:border-accent",

  success:
    "border-emerald-500/30 bg-emerald-500/10 text-emerald-400 hover:border-emerald-500",

  purple:
    "border-violet-500/30 bg-violet-500/10 text-violet-400 hover:border-violet-500",
};

const sizes = {
  sm: "px-2.5 py-1 text-xs",
  md: "px-3.5 py-1.5 text-sm",
  lg: "px-4 py-2 text-base",
};

export default function SkillBadge({
  children,
  icon: Icon,
  variant = "default",
  size = "md",
  className = "",
}) {
  const reduceMotion = useReducedMotion();

  return (
    <motion.span
      className={`inline-flex cursor-default items-center gap-2 rounded-lg border font-medium transition-[border-color,color] duration-200 ${
        variants[variant] || variants.default
      } ${sizes[size] || sizes.md} ${className}`}
      whileHover={
        reduceMotion
          ? undefined
          : { y: -1 }
      }
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 25,
      }}
    >
      {Icon && (
        <Icon
          size={size === "sm" ? 14 : 16}
          aria-hidden="true"
          className="shrink-0"
        />
      )}

      {children}
    </motion.span>
  );
}
