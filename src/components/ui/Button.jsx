
import { motion, useReducedMotion } from "framer-motion";

const variants = {
  primary:
    "bg-linear-to-r from-primary to-accent text-slate-950 hover:shadow-lg hover:shadow-primary/25",

  secondary:
    "border border-border bg-surface text-heading hover:border-accent hover:text-accent",

  outline:
    "border border-accent/50 bg-transparent text-accent hover:bg-accent/10",

  ghost:
    "bg-transparent text-muted hover:bg-surface hover:text-heading",
};

const sizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-5 py-3 text-sm",
  lg: "px-7 py-3.5 text-base",
};

export default function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  icon: Icon,
  iconPosition = "right",
  className = "",
  external = false,
  download,
  type = "button",
  ...props
}) {
  const reduceMotion = useReducedMotion();

  const Component = href ? motion.a : motion.button;

const baseStyles =
  "inline-flex cursor-pointer items-center justify-center gap-2.5 rounded-xl font-semibold transition-[color,background-color,border-color,box-shadow] duration-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50";

  const styles = `${baseStyles} ${
    variants[variant] || variants.primary
  } ${sizes[size] || sizes.md} ${className}`;

  const linkProps = href
    ? {
        href,
        ...(external
          ? {
              target: "_blank",
              rel: "noopener noreferrer",
            }
          : {}),
        ...(download ? { download } : {}),
      }
    : { type };

  return (
    <Component
      className={styles}
      whileHover={reduceMotion ? undefined : { y: -3 }}
      whileTap={reduceMotion ? undefined : { scale: 0.97 }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 25,
      }}
      {...linkProps}
      {...props}
    >
      {Icon && iconPosition === "left" && (
        <Icon size={18} aria-hidden="true" />
      )}

      {children}

      {Icon && iconPosition === "right" && (
        <Icon size={18} aria-hidden="true" />
      )}
    </Component>
  );
}
