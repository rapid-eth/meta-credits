import { FormCreateOrganization } from "@forms";

/* --- Component --- */
const Community = props => {
  return (
    <Atom.Flex sx={{ py: 5 }}>
      <Atom.BackgroundGradient sx={{ bg: "blue" }} />
      <Atom.Container>
        <Atom.Flex alignCenter>
          <Atom.Box sx={{ color: "white", flex: 1, p: 4 }}>
            <Atom.Image src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80" />
          </Atom.Box>
          <Atom.Box sx={{ color: "white", flex: 1, p: 4 }}>
            <Atom.Heading sx={{ fontSize: [3, 3, 5] }}>
              A Network of Builders
            </Atom.Heading>
            <Atom.Heading sx={{ fontSize: [1, 1, 2] }}>
              Support a Growing Network
            </Atom.Heading>
            <Atom.Paragraph>
              Join the MetaCredits organization and help the future of
              decentralized applications. Be a part of a community shaping the
              landscape for future decentralized applications.
            </Atom.Paragraph>
            <Molecule.Link to="/join">
              <Atom.Button white>Join Community</Atom.Button>
            </Molecule.Link>
          </Atom.Box>
        </Atom.Flex>
      </Atom.Container>
    </Atom.Flex>
  );
};
export default Community;
