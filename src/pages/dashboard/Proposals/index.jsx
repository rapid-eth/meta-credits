/* --- Local --- */
import { ProposalList } from "@components";
/* --- Page : Component --- */
const ProposalPage = props => {
  return (
    <Atom.Box sx={{ width: "100%" }}>
      <Content />
      <Services />
    </Atom.Box>
  );
};

const Content = props => {
  return (
    <Atom.Box
      column
      sx={{
        bg: "smoke",
        py: 4,
        px: 4,
        width: "100%"
      }}
    >
      <Atom.Heading as="h5" sm m0 sx={{ color: "charcoal" }}>
        Manage
      </Atom.Heading>
      <Atom.Heading as="h3" normal xxl>
        Meta<Atom.Span sx={{ fontWeight: 700 }}>Proposals</Atom.Span>
      </Atom.Heading>
    </Atom.Box>
  );
};

const Services = props => {
  return (
    <Atom.Box sx={{ p: 4 }}>
      <ProposalList />
    </Atom.Box>
  );
};

const ContractEndpoint = props => {
  return (
    <Atom.Flex column card sx={{ my: 3 }}>
      <Atom.Flex between sx={{ borderBottom: "2px solid #000", pb: 3, mb: 3 }}>
        <Atom.Box>
          <Atom.Heading m0 sx={{ fontSize: [4, 4, 5] }}>
            {props.title}
          </Atom.Heading>
          <Atom.Span>{props.epoch}</Atom.Span>
        </Atom.Box>
        <Atom.Box>
          <Atom.Span>
            <strong>Reserves:</strong> {props.statistics.fuelReserves}
          </Atom.Span>
          <Atom.Span sx={{ ml: 3 }}>
            <strong>Spent:</strong> {props.statistics.fuelSpent}
          </Atom.Span>
        </Atom.Box>
      </Atom.Flex>
      <Atom.Box>
        <Atom.Box>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href={`https://rinkeby.etherscan.io/address/${props.address}`}
          >
            <Atom.Heading m0>Address</Atom.Heading>
            <Atom.Span>{props.address}</Atom.Span>
          </a>
        </Atom.Box>
        <Atom.Box sx={{ mt: 3 }}>
          <Atom.Heading m0>Endpoint</Atom.Heading>
          <Atom.Span>{props.lambda}</Atom.Span>
        </Atom.Box>
      </Atom.Box>
      <Atom.Box sx={{ mt: 3 }}>
        <Atom.Button white>Details</Atom.Button>
      </Atom.Box>
    </Atom.Flex>
  );
};

const MetaEndpoint = props => {
  return <Atom.Flex></Atom.Flex>;
};

export default ProposalPage;
