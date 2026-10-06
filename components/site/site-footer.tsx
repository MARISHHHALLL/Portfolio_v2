import { NavLists, PROFILE, SocialsList } from "@/constants";
import { Logo } from "./logo";

export function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/[0.06]">
      <div className="mx-auto grid max-w-page gap-10 px-6 py-12 sm:grid-cols-2 md:px-8 lg:grid-cols-4">
        <div>
          <span role="img" aria-label={PROFILE.wordmark} className="inline-block">
            <Logo />
          </span>
          <p className="mt-4 max-w-[26ch] font-mono text-xs leading-relaxed text-fog">
            {PROFILE.role} building web and mobile products from Casablanca.
          </p>
        </div>
        <nav aria-label="Footer">
          <h2 className="mb-4 font-mono text-[11px] uppercase tracking-[0.1em] text-fog">
            Sitemap
          </h2>
          <ul className="flex flex-col gap-2.5 font-mono text-sm text-fog">
            {NavLists.map((item) => (
              <li key={item.href}>
                <a href={item.href} className="transition-colors hover:text-ash">
                  ~/{item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <div>
          <h2 className="mb-4 font-mono text-[11px] uppercase tracking-[0.1em] text-fog">
            Elsewhere
          </h2>
          <ul className="flex flex-col gap-2.5 font-mono text-sm text-fog">
            {SocialsList.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors hover:text-ash"
                >
                  {label}
                </a>
              </li>
            ))}
            <li>
              <a href={`mailto:${PROFILE.email}`} className="transition-colors hover:text-ash">
                Email
              </a>
            </li>
          </ul>
        </div>
        <p className="font-mono text-[11px] uppercase leading-relaxed tracking-[0.1em] text-fog lg:text-right">
          Casablanca, MA
          <br />© {year} {PROFILE.name}
        </p>
      </div>
    </footer>
  );
}
