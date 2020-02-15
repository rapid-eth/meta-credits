import { FormCreateOrganization } from "@forms";

/* --- Component --- */
const Component = props => {
  return (
    <Atom.Flex sx={{ py: 5 }}>
      <Atom.BackgroundGradient sx={{ bg: "blue" }} />
      <Atom.Container>
        <Atom.Flex alignCenter>
          <Atom.Box sx={{ color: "white", flex: 1, p: 4 }}>
            <Atom.Heading sx={{ fontSize: [3, 3, 5] }}>
              Validate Your Idea
            </Atom.Heading>
            <Atom.Paragraph>
              Mauris nec erat iaculis mi molestie pellentesque. In eu pretium
              quam. Fusce pellentesque fringilla volutpat. Proin a hendrerit
              libero, id aliquam nisl. Donec porttitor ligula lacus, eget
              blandit elit pellentesque id. Suspendisse tincidunt nec leo vitae
              dictum.
            </Atom.Paragraph>
          </Atom.Box>
          <Atom.Box sx={{ color: "white", flex: 1, p: 4 }}>
            <FormCreateOrganization />
          </Atom.Box>
        </Atom.Flex>
      </Atom.Container>
    </Atom.Flex>
  );
};
export default Component;
