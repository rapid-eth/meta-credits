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
              Propose a Project
            </Atom.Heading>
            <Atom.Paragraph>
              Submit your project to the MetaCred network for review and approval. If your project is approved, your dApp will have all of its associated activities funded via MetaTransactions, up to a limit designated by the amount of funding support your proposal receives.
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
