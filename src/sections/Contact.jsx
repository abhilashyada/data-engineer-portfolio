import profile from "../data/profile.js";
import { motion, useReducedMotion } from "framer-motion";

import {
  Mail,
  Briefcase,
  Code,
  MapPin,
  ArrowUpRight,
  FileText,
  Download,
  MessageCircle,
} from "lucide-react";

import Container from "../components/ui/Container";
import SectionHeading from "../components/ui/SectionHeading";
import Button from "../components/ui/Button";

// Professional Contact Information

const contactDetails = [
  {
    id: "email",
    title: "Email",
    value: profile.contact.email,
    href: profile.socialLinks.email.url,
    icon: Mail,
    external: false,
  },
  {
    id: "linkedin",
    title: "LinkedIn",
    value: profile.socialLinks.linkedin.username,
    href: profile.socialLinks.linkedin.url,
    icon: Briefcase,
    external: true,
  },
  {
    id: "github",
    title: "GitHub",
    value: profile.socialLinks.github.username,
    href: profile.socialLinks.github.url,
    icon: Code,
    external: true,
  },
  {
    id: "location",
    title: "Location",
    value: profile.contact.location,
    href: null,
    icon: MapPin,
    external: false,
  },
];


// Resume Configuration
const resume = profile.resume;

// Reusable Contact Card
function ContactCard({ contact }) {
  const Icon = contact.icon;

  const cardStyles = `group flex w-full items-center gap-4 rounded-xl border border-border bg-background/60 p-4 transition-[border-color,background-color,box-shadow] duration-300 sm:p-5 ${
    contact.href
      ? "cursor-pointer hover:border-accent/40 hover:bg-surface/80 hover:shadow-lg hover:shadow-primary/5 focus-visible:border-accent"
      : "cursor-default"
  }`;

  const content = (
    <>
      <div
        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-accent/20 bg-accent/10 transition-colors duration-300 ${
          contact.href
            ? "group-hover:border-accent/40 group-hover:bg-accent/20"
            : ""
        }`}
      >
        <Icon
          size={21}
          className="text-accent"
          aria-hidden="true"
        />
      </div>

      <div className="min-w-0 flex-1">
        <h4 className="font-semibold text-heading">
          {contact.title}
        </h4>

        <p className="mt-1 wrap-break-word text-sm leading-relaxed text-muted">
          {contact.value}
        </p>
      </div>

      {contact.href && (
        <ArrowUpRight
          size={19}
          className="shrink-0 text-muted transition-[color,translate] duration-300 group-hover:text-accent motion-safe:group-hover:translate-x-0.5 motion-safe:group-hover:-translate-y-0.5"
          aria-hidden="true"
        />
      )}
    </>
  );

  if (contact.href) {
    return (
      <a
        href={contact.href}
        target={contact.external ? "_blank" : undefined}
        rel={
          contact.external
            ? "noopener noreferrer"
            : undefined
        }
        className={cardStyles}
      >
        {content}
      </a>
    );
  }

  return (
    <div className={cardStyles}>
      {content}
    </div>
  );
}

export default function Contact() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="contact"
      className="relative overflow-hidden border-t border-border/40 bg-surface/20 py-20 sm:py-24 lg:py-28"
    >

      {/* Decorative Background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 h-72 w-72 rounded-full bg-primary/5 blur-3xl"
      />

      <Container className="relative">

        {/* Section Heading */}
        <SectionHeading
          eyebrow="Get in Touch"
          title="Let's Connect"
          description="Let's connect and discuss data engineering, modern data platforms, technical collaborations and professional opportunities."
        />

        <div className="grid items-stretch gap-8 lg:grid-cols-2">

          {/* Contact Information */}
          <motion.div
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
            transition={{ duration: 0.6 }}
            className="rounded-2xl border border-border bg-surface/70 p-6 sm:p-8"
          >

            {/* Contact Heading */}
            <div className="flex items-center gap-3">
              <MessageCircle
                size={25}
                className="text-accent"
                aria-hidden="true"
              />

              <h3 className="text-2xl font-bold tracking-tight text-heading">
                Get in Touch
              </h3>
            </div>

            <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
              Interested in discussing data engineering,
              technical collaborations or professional
              opportunities? Feel free to connect with me
              through any of the following channels.
            </p>

            {/* Contact Cards */}
            <div className="mt-7 space-y-4">
              {contactDetails.map((contact) => (
                <ContactCard
                  key={contact.id}
                  contact={contact}
                />
              ))}
            </div>

          </motion.div>

          {/* Professional Resume */}
          <motion.div
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
              delay: reduceMotion ? 0 : 0.15,
            }}
            className="relative flex flex-col justify-center overflow-hidden rounded-2xl border border-accent/20 bg-linear-to-br from-primary/5 via-surface to-accent/5 p-6 sm:p-8 lg:p-10"
          >

            {/* Resume Card Glow */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-accent/10 blur-3xl"
            />

            <div className="relative">

              {/* Resume Icon */}
              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl border border-accent/20 bg-accent/10">
                <FileText
                  size={32}
                  className="text-accent"
                  aria-hidden="true"
                />
              </div>

              <p className="text-xs font-semibold uppercase tracking-widest text-accent">
                Professional Profile
              </p>

              <h3 className="mt-3 text-2xl font-bold tracking-tight text-heading sm:text-3xl">
                Professional Resume
              </h3>

              <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
                Explore a detailed overview of my
                professional experience, technical expertise,
                industry certifications, academic background
                and hands-on data engineering projects.
              </p>

              {/* Resume Contents */}
              <div className="mt-7 space-y-4">
                {[
                  "Professional Data Engineering Experience",
                  "Technical Skills & Modern Data Platforms",
                  "Professional Certifications",
                  "End-to-End Data Engineering Projects",
                  "Academic Qualifications",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3"
                  >
                    <div
                      aria-hidden="true"
                      className="mt-2 h-2 w-2 shrink-0 rounded-full bg-accent"
                    />

                    <span className="text-sm leading-relaxed text-muted">
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              {/* Resume Download */}
              <div className="mt-8">
                {resume.available ? (
                  <Button
                    href={resume.url}
                    download={resume.fileName}
                    variant="primary"
                    size="lg"
                    icon={Download}
                  >
                    Download Resume
                  </Button>
                ) : (
                  <button
                    type="button"
                    disabled
                    className="inline-flex cursor-not-allowed items-center justify-center gap-2 rounded-xl border border-border bg-surface px-6 py-3 text-sm font-semibold text-muted opacity-70"
                  >
                    <Download
                      size={19}
                      aria-hidden="true"
                    />

                    Download Resume
                  </button>
                )}

                <p className="mt-3 text-xs leading-relaxed text-muted">
                  {resume.available
                    ? "PDF format · Professional resume"
                    : "Updated professional resume coming soon."}
                </p>
              </div>

            </div>
          </motion.div>

        </div>
      </Container>
    </section>
  );
}
