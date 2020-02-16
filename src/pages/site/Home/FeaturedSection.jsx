const Featured = props => {
  return (
    <Atom.Container sx={{ py: 4 }}>
      <Atom.Box sx={{ textAlign: "center" }}>
        <Atom.Heading as="h2" sx={{ fontSize: [2, 2, 4, 5] }}>
          Communities Empowering Communities
        </Atom.Heading>
        <Atom.Paragraph>
          Reducing the barrier of entry to the Ethereum ecosystem.
        </Atom.Paragraph>
      </Atom.Box>
      <Atom.Flex sx={{ flexWrap: "wrap", mt: 4 }}>
        <FeaturedItem
          title="Bootstrapping Development"
          subtitle="Deploy dApps with no gas"
          content="Developers with no access to Ether can now become a part of our ecosystem and deploy contracts / dApps to mainnet, and can be sure users can interact with these contracts / dApps."
          sx={{
            mx: [0, 0, "1.5%"],
            width: ["100%", "100%", "30%"]
          }}
        />
        <FeaturedItem
          title="Reducing Friction"
          subtitle="Zero barrier to entry"
          content="Users with little or no access to Ether can now interact with  impactful dApps - allowing us to truly bank the unbanked, and eliminating our ecosystem's barrier to entry of needing to first obtain Ether."
          sx={{
            mx: [0, 0, "1.5%"],
            width: ["100%", "100%", "30%"]
          }}
        />
        <FeaturedItem
          title="Maximizing ROI"
          subtitle="Zero-waste, optimally-efficient grants"
          content="Donators / investors can know exactly where their money is being spent and that it is going to a good cause, as all money input into the system can ONLY be spent on gas costs."
          sx={{
            mx: [0, 0, "1.5%"],
            width: ["100%", "100%", "30%"]
          }}
        />

        <Atom.Flex center column sx={{ width: "100%" }}>
          <Atom.Span>
            <Molecule.Link to="/about">
              <Atom.Button white>Learn More</Atom.Button>
            </Molecule.Link>
          </Atom.Span>
        </Atom.Flex>
      </Atom.Flex>
    </Atom.Container>
  );
};

const FeaturedItem = props => {
  return (
    <Atom.Box card sx={props.sx}>
      <Atom.Heading sx={{ fontSize: [3, 3, 4] }}>{props.title}</Atom.Heading>
      <Atom.Heading as="h5" sx={{ fontSize: [1, 1, 2] }}>
        {props.subtitle}
      </Atom.Heading>
      <Atom.Paragraph>{props.content}</Atom.Paragraph>
    </Atom.Box>
  );
};

export default Featured;
