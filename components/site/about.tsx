export function About() {
  return (
    <section id="about" aria-labelledby="about-title" className="py-16 md:py-24">
      <div className="grid gap-8 md:grid-cols-[14rem_1fr] md:gap-10">
        <h2
          id="about-title"
          className="font-display text-2xl font-bold text-ash md:text-3xl"
        >
          About
        </h2>
        <div className="max-w-[68ch] space-y-4 font-mono text-sm leading-relaxed text-fog md:text-base md:leading-relaxed">
          <p>
            I&apos;m a developer in Casablanca who likes owning a product from
            the first screen to the server it runs on. Most of my days are
            spent in <strong className="font-semibold text-ash">Next.js</strong>{" "}
            and <strong className="font-semibold text-ash">React</strong>, with{" "}
            <strong className="font-semibold text-ash">Node</strong> and{" "}
            <strong className="font-semibold text-ash">NestJS</strong> behind
            them and <strong className="font-semibold text-ash">React Native</strong>{" "}
            when the product needs a phone.
          </p>
          <p>
            Since late 2024 most of that has gone into Leeetr: the web app, the
            iOS and Android app, and the API behind both. Alongside it I built
            the super-admin back office for mariages.io.
          </p>
          <p>
            If you&apos;re hiring or building something, the fastest way to
            reach me is{" "}
            <a
              href="#contact"
              className="font-semibold text-ash underline decoration-ash/40 underline-offset-[3px] hover:decoration-ash"
            >
              email
            </a>
            .
          </p>
        </div>
      </div>
    </section>
  );
}
