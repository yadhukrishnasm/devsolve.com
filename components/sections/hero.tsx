import { WarliGathering } from "@/components/art/warli-gathering";
import { ArtFrame } from "@/components/ui/art-frame";
import { Container } from "@/components/ui/container";
import { CtaLink } from "@/components/ui/cta-link";

const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-14 pb-16 md:pt-20 md:pb-24">
      <Container className="relative z-10">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-16">
          <div>
            <p className="text-lg font-semibold text-brand">DevSolve</p>
            <h1 className="mt-3 text-4xl leading-[1.15] font-bold tracking-tight text-ink sm:text-5xl">
              The Institute for Development and Leadership
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft md:text-xl">
              A global institute in evolution, dedicated to providing
              development solutions through knowledge, skills, and advanced
              technologies.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-5">
              <CtaLink href="#contact" variant="primary">
                Contact Us
              </CtaLink>
              <CtaLink href="#who-are-we" variant="underline">
                Know more about us
              </CtaLink>
            </div>
          </div>

          <ArtFrame
            art={<WarliGathering className="h-full w-full" />}
            caption="People coming together under one tree — Warli folk art"
          />
        </div>
      </Container>
    </section>
  );
};

export default Hero;
