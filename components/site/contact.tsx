import { PROFILE, SocialsList } from "@/constants";
import { CopyEmail } from "./copy-email";

export function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="py-20 md:py-28"
    >
      <h2
        id="contact-title"
        className="font-display text-3xl font-bold uppercase leading-none tracking-tight text-paper md:text-5xl"
      >
        Get in touch
      </h2>
      <p className="mt-4 max-w-[52ch] font-mono text-sm leading-relaxed text-fog md:text-base">
        Available for new opportunities. Send a line about what you&apos;re
        making and I&apos;ll get back to you.
      </p>
      <a
        href={`mailto:${PROFILE.email}`}
        className="mt-8 inline-block break-all font-mono text-lg text-ash underline decoration-ash/30 underline-offset-[6px] transition-colors hover:text-paper hover:decoration-paper md:text-2xl"
      >
        {PROFILE.email}
      </a>
      <div className="mt-6 flex flex-wrap items-center gap-2">
        <CopyEmail />
        {SocialsList.map(({ Icon, href, label }) => (
          <a
            key={href}
            href={href}
            target="_blank"
            rel="noreferrer"
            className="press inline-flex items-center gap-2 rounded-xs border border-hairline bg-graphite px-3 py-2.5 font-mono text-xs text-ash hover:border-ash/30"
          >
            <Icon className="size-3.5" aria-hidden="true" />
            {label}
          </a>
        ))}
      </div>
    </section>
  );
}
