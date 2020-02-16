/* --- Components --- */

import FeaturedSection from "./FeaturedSection";
import RegisterSection from "./RegisterSection";
import CommunitySection from "./CommunitySection";

/* --- Components --- */
const HomePage = props => {
  return (
    <Atom.Box sx={{ width: "100%" }}>
      <Showcase />
      <RegisterSection />
      <FeaturedSection />
      <CommunitySection />
    </Atom.Box>
  );
};

const Showcase = props => {
  return (
    <>
      <Atom.Flex center column sx={{ boxShadow: 0, py: 5, width: "100%" }}>
        <Atom.BackgroundGradient sx={{ bg: "smoke" }} />
        <Atom.Container
          sx={{
            maxWidth: ["100%", "100%", 880, 1080],
            py: [5]
          }}
        >
          <Atom.Flex center column>
            <Atom.Heading as="h1" mega>
              MetaCred
            </Atom.Heading>
            <Atom.Heading as="h4" md>
              A Generalized MetaTransaction Funding Protocol & Self-Sustaining
              Transaction Payment Network
            </Atom.Heading>
            <Atom.Box sx={{ textAlign: "center" }}>
            <Atom.Paragraph>
              MetaCred is a product designed to allow developers and end users
              with a 0 balance of any crypto currency to participate in the
              budding Ethereum ecosystem - and to allow donators / investors to
              know their money is going to a good cause.
            </Atom.Paragraph>
            </Atom.Box>
          </Atom.Flex>
        </Atom.Container>
      </Atom.Flex>
    </>
  );
};

export default HomePage;
