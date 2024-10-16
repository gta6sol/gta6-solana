import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { SectionTitle } from "@/components/SectionTitle";
import { Benefits } from "@/components/Benefits";
import { Video } from "@/components/Video";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";
import { Cta } from "@/components/Cta";

import { benefitOne, benefitTwo } from "@/components/data";
export default function Home() {
  return (
    <Container>
      <Hero />

      <SectionTitle
        preTitle="How To Buy?"
        title="Contract Address Down Below"
      >
        GTA6Diiz5M65NtMYoCJJnSh6fD7iryi6SGsxwfWPEv9c
      </SectionTitle>

      <SectionTitle
        preTitle="GTA6 Solana Benefits"
        title=" Why should you trust us to support your dedication?"
      >
        We're a team that grew up with the iconic GTA series—GTA 4, Vice City, and GTA 5 shaped our childhoods. 
        Our love for the game runs deep, and now we're here to unite fans and build a strong, passionate community that celebrates GTA!
      </SectionTitle>

      <Benefits data={benefitOne} />
      <Benefits imgPos="right" data={benefitTwo} />

      <SectionTitle
        preTitle="Latest Trailer"
        title="Take 90 Seconds to Focus on What Fuels Your Passion"
      >
        This is the long-awaited GTA6 trailer, Released on December 5, 2023. 
        Maybe it's been a while since you've watched it, but don't worry, we've brought it here for you. 
        Take a moment to immerse yourself once again, letting these scenes bring back memories of your childhood and touch that vulnerable part of your heart where your deepest love and anticipation reside.
      </SectionTitle>

      <Video videoId="QdBZY2fkU-0" />

{/*       <SectionTitle
        preTitle="Testimonials"
        title="Here's what our supporter commented"
      >
        Testimonials is a great way to increase the brand trust and awareness.
        Use this section to highlight your popular customers.
      </SectionTitle>

      <Testimonials /> */}

      <SectionTitle preTitle="FAQ" title="Frequently Asked Questions">
        Answer your customers possible questions here, it will increase the
        conversion rate as well as support or chat requests.
      </SectionTitle>

      <Faq />
      <Cta />
    </Container>
  );
}
