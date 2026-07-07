import Contact from "@/components/sections/contact";
import Footer from "@/components/sections/footer";
import Hero from "@/components/sections/hero";
import HowDoWeManage from "@/components/sections/how-do-we-manage";
import Newsroom from "@/components/sections/newsroom";
import Partners from "@/components/sections/partners";
import Team from "@/components/sections/team";
import WhatDoWeDo from "@/components/sections/what-do-we-do";
import WhatDoWeOffer from "@/components/sections/what-do-we-offer";
import WhoAreWe from "@/components/sections/who-are-we";
import WhyAreWeHere from "@/components/sections/why-are-we-here";
import WorkTogether from "@/components/sections/work-together";
import { Navbar } from "@/components/structure/navbar";
import { StructuredData } from "@/components/structured-data";
import { siteUrl, siteName, siteDescription } from "@/lib/site";

const WEBSITE_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteName,
  url: siteUrl,
  description: siteDescription,
};

export default function HomePage() {
  return (
    <>
      <StructuredData data={WEBSITE_JSON_LD} />
      <Navbar />
      <main>
        <Hero />
        <WhoAreWe />
        <WhyAreWeHere />
        <WhatDoWeDo />
        <WhatDoWeOffer />
        <HowDoWeManage />
        <WorkTogether />
        {/*<Team />
        <Partners />
        <Newsroom />*/}
        <Contact />
      </main>
      <Footer />
    </>
  );
}
