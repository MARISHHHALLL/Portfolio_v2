import Link from "next/link";
import { NavLists, PROFILE } from "@/constants";
import { Logo } from "./logo";

/* Logo + shell-path nav. The `~/` paths deliberately echo the prompt in
   portfolio-terminal, so the two portfolios read as one person's machine. */
export function SiteHeader() {
  return (
    <header className="fixed inset-x-0 top-8 z-40 border-b border-white/[0.06] bg-ink/85 backdrop-blur-md supports-[backdrop-filter]:bg-ink/70">
      <div className="mx-auto flex h-14 max-w-page items-center justify-between gap-3 px-4 sm:gap-6 sm:px-6 md:px-8">
        <Link
          href="/"
          className="press inline-block rounded-hair"
          aria-label={`${PROFILE.name}, home`}
        >
          <Logo />
        </Link>
        <nav aria-label="Sections">
          <ul className="flex items-center gap-0.5 sm:gap-1">
            {NavLists.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="press block rounded-hair px-1.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.08em] text-fog hover:bg-white/[0.04] hover:text-ash sm:px-3 sm:text-[11px] sm:tracking-[0.1em]"
                >
                  <span className="hidden text-fog/50 sm:inline">~/</span>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
