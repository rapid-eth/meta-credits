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
              MetaCredits
            </Atom.Heading>
            <Atom.Heading as="h4" md>
              A Self-Sustaining Ethereum Transaction Payment Network
            </Atom.Heading>
          </Atom.Flex>
        </Atom.Container>
      </Atom.Flex>
    </>
  );
};

export default HomePage;
