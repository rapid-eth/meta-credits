const Featured = props => {
  return (
    <Atom.Container sx={{ py: 4 }}>
      <Atom.Box sx={{ textAlign: "center" }}>
        <Atom.Heading as="h2" sx={{ fontSize: [2, 2, 4, 5] }}>
          Community Powered Transactions
        </Atom.Heading>
        <Atom.Paragraph>
          Donec porttitor ligula lacus, eget blandit elit pellentesque id.
          Suspendisse tincidunt nec leo vitae dictum.
        </Atom.Paragraph>
      </Atom.Box>
      <Atom.Flex sx={{ flexWrap: "wrap", mt: 4 }}>
        <FeaturedItem
          title="Community Powered"
          subtitle="Ideas Chosen by Community"
          content="Proin a hendrerit libero, id aliquam nisl. Donec porttitor ligula lacus, eget blandit elit pellentesque id. Suspendisse tincidunt nec leo vitae dictum."
          sx={{
            mx: [0, 0, "1.5%"],
            width: ["100%", "100%", "30%"]
          }}
        />
        <FeaturedItem
          title="Idea Validation"
          subtitle="Ideas Chosen by Community"
          content="Proin a hendrerit libero, id aliquam nisl. Donec porttitor ligula lacus, eget blandit elit pellentesque id. Suspendisse tincidunt nec leo vitae dictum."
          sx={{
            mx: [0, 0, "1.5%"],
            width: ["100%", "100%", "30%"]
          }}
        />
        <FeaturedItem
          title="Self-Sustaining"
          subtitle="Ideas Chosen by Community"
          content="Proin a hendrerit libero, id aliquam nisl. Donec porttitor ligula lacus, eget blandit elit pellentesque id. Suspendisse tincidunt nec leo vitae dictum."
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
