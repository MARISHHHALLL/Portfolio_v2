import { About } from "@/components/site/about";
import { Contact } from "@/components/site/contact";
import { Hero } from "@/components/site/hero";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { StackGrid } from "@/components/site/stack-grid";
import { StatusBar } from "@/components/site/status-bar";
import { WorkLedger } from "@/components/site/work-ledger";

export default function Home() {
  return (
    <>
      <StatusBar />
      <SiteHeader />
      <main className="mx-auto w-full max-w-page px-6 md:px-8">
        <Hero />
        <div className="band-hatch" aria-hidden="true" />
        <WorkLedger />
        <div className="band-dots" aria-hidden="true" />
        <StackGrid />
        <div className="band-hatch" aria-hidden="true" />
        <About />
        <div className="band-dots" aria-hidden="true" />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
