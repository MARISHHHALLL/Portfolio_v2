import { PROFILE, SocialsList } from "@/constants";
import { CopyEmail } from "./copy-email";
import { LocalTime } from "./local-time";

export function Hero() {
  return (
    <section
      id="top"
      aria-labelledby="hero-name"
      className="grid min-h-[calc(100svh-5.5rem)] content-center gap-12 pb-16 pt-36 md:pb-24 md:pt-40 lg:grid-cols-[1fr_auto] lg:items-end"
    >
      <div className="boot flex flex-col">
        <h1
          id="hero-name"
          className="font-display text-[clamp(2.75rem,9vw,6rem)] font-bold uppercase leading-[0.92] tracking-[-0.025em] text-paper"
        >
          {PROFILE.name}
        </h1>
        <p className="mt-5 font-mono text-[11px] font-medium uppercase tracking-[0.14em] text-fog md:text-sm">
          {PROFILE.role} <span className="text-fog/40">·</span> web + mobile{" "}
          <span className="text-fog/40">·</span> {PROFILE.city}
        </p>
        <div className="mt-10 max-w-[62ch]">
          <p className="font-mono text-sm leading-relaxed text-fog md:text-base md:leading-relaxed">
            I build products end to end: the Next.js front, the Node API
            behind it, and the React Native app when it needs to live on a
            phone. Right now that means{" "}
            <a
              href="#leeetr"
              className="font-semibold text-ash underline decoration-ash/40 underline-offset-[3px] hover:decoration-ash"
            >
              Leeetr
            </a>
            , digital business cards for web and mobile.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-2">
            <CopyEmail />
            {SocialsList.map(({ Icon, href, label, handle }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noreferrer"
                className="press inline-flex items-center gap-2 rounded-xs border border-hairline bg-graphite px-3 py-2.5 font-mono text-xs text-ash hover:border-ash/30"
              >
                <Icon className="size-3.5" aria-hidden="true" />
                <span>{label}</span>
                <span className="hidden text-fog sm:inline">/{handle}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
      <LocalTime />
    </section>
  );
}
