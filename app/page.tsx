import { TopBar } from "@/components/site/TopBar";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { TrustStrip } from "@/components/site/TrustStrip";
import { About } from "@/components/site/About";
import { Programs } from "@/components/site/Programs";
import { WhyUs } from "@/components/site/WhyUs";
import { FacultyTeaser } from "@/components/site/FacultyTeaser";
import { EnquiryCTA } from "@/components/site/EnquiryCTA";
import { Footer } from "@/components/site/Footer";

export default function HomePage() {
  return (
    <>
      <TopBar />
      <Header />
      <main id="main-content">
        <Hero />
        <TrustStrip />
        <About />
        <Programs />
        <WhyUs />
        <FacultyTeaser />
        <EnquiryCTA />
      </main>
      <Footer />
    </>
  );
}
