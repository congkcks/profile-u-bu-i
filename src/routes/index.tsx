import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Marquee } from "@/components/site/Marquee";
import { About } from "@/components/site/About";
import { TechStack } from "@/components/site/TechStack";
import { Expertise } from "@/components/site/Expertise";
import { Projects } from "@/components/site/Projects";
import { Pipeline } from "@/components/site/Pipeline";
import { Experience } from "@/components/site/Experience";
import { BeyondTheCode } from "@/components/site/BeyondTheCode";
import { Contact } from "@/components/site/Contact";

const title = "Nolan N. — AI Engineer | Computer Vision & Industrial AI";
const description =
  "AI Engineer specializing in Computer Vision, Industrial AI, LLM systems and production-grade .NET applications.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Nolan N.",
          jobTitle: "AI Engineer",
          worksFor: { "@type": "Organization", name: "SotaVision / SOTATEK" },
          address: { "@type": "PostalAddress", addressLocality: "Hanoi", addressCountry: "VN" },
          knowsAbout: [
            "Computer Vision",
            "Deep Learning",
            "Industrial AI",
            "LLM",
            "C#",
            ".NET",
          ],
        }),
      },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <About />
        <TechStack />
        <Expertise />
        <Projects />
        <Pipeline />
        <Experience />
        <BeyondTheCode />
        <Contact />
      </main>
    </div>
  );
}
