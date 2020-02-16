import { FormCreateOrganization } from "@forms";

/* --- Component --- */
const Community = props => {
  return (
    <div>
      <div>
        <Atom.Flex sx={{ py: 5 }}>
          <Atom.BackgroundGradient sx={{ bg: "blue" }} />
          <Atom.Container>
            <Atom.Flex alignCenter>
              <Atom.Box sx={{ color: "white", flex: 1, p: 4 }}>
                <Atom.Image src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80" />
              </Atom.Box>
              <Atom.Box sx={{ color: "white", flex: 1, p: 4 }}>
                <Atom.Heading sx={{ fontSize: [3, 3, 5] }}>
                  Activating Untapped Networks
                </Atom.Heading>
                <Atom.Heading sx={{ fontSize:[1, 1, 2] }}>
                  Increasing the collective brainpower of the Ethereum ecosystem
                </Atom.Heading>
                <Atom.Paragraph>
                  Disparities of wealth are not correlated to intelligence. People without the means to bootstrap into this ecosystem are no less valuable than those with it. By giving impoverished developers the ability to participate, we can activate a whole new pool of unique perspectives.
                </Atom.Paragraph>
                <Molecule.Link to="/join">
                  <Atom.Button white>Join Community</Atom.Button>
                </Molecule.Link>
              </Atom.Box>
            </Atom.Flex>
          </Atom.Container>
        </Atom.Flex>
      </div>
      <div>
        <Atom.Flex sx={{ py: 5 }}>
          <Atom.BackgroundGradient sx={{ bg: "blue" }} />
          <Atom.Container>
            <Atom.Flex alignCenter>
              <Atom.Box sx={{ color: "white", flex: 1, p: 4 }}>
                <Atom.Heading sx={{ fontSize: [3, 3, 5] }}>
                  Ethereum Where It's Needed Most
                </Atom.Heading>
                <Atom.Heading sx={{ fontSize: [1, 1, 2] }}>
                  Web3 Inclusion for the Underprivileged
                </Atom.Heading>
                <Atom.Paragraph>
                  How can we expect the unbanked to obtain their first cryptocurrency? Let alone obtain sufficient ETH to fund their activities on the Ethereum network if they're using it on a daily basis... MetaCred brings Ethereum to where it's needed most - to the disadvantaged regions of the world.
                </Atom.Paragraph>
                <Molecule.Link to="/join">
                  <Atom.Button white>Join Community</Atom.Button>
                </Molecule.Link>
              </Atom.Box>
              <Atom.Box sx={{ color: "white", flex: 1, p: 4 }}>
                <Atom.Image src="https://images.unsplash.com/photo-1531206715517-5c0ba140b2b8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80" />
              </Atom.Box>
            </Atom.Flex>
          </Atom.Container>
        </Atom.Flex>
      </div>
      <div>
        <Atom.Flex sx={{ py: 5 }}>
          <Atom.BackgroundGradient sx={{ bg: "blue" }} />
          <Atom.Container>
            <Atom.Flex alignCenter>
              <Atom.Box sx={{ color: "white", flex: 1, p: 4 }}>
                <Atom.Image src="https://images.unsplash.com/photo-1559225306-3f60aa7b39a3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2167&q=80" />
              </Atom.Box>
              <Atom.Box sx={{ color: "white", flex: 1, p: 4 }}>
                <Atom.Heading sx={{ fontSize: [3, 3, 5] }}>
                  Maximally Efficient Deployment of Capital
                </Atom.Heading>
                <Atom.Heading sx={{ fontSize: [1, 1, 2] }}>
                  Even just 0.1 ETH can go a long way in bootstrapping an ecosystem
                </Atom.Heading>
                <Atom.Paragraph>
                  Your pocket change may be sufficient to bootstrap an entire ecosystem. And, with MetaCred, you can know your funding is ONLY being spent on Ethereum gas costs - ensuring that every single $/Eth put into the system is optimally utilized.
                </Atom.Paragraph>
                <Molecule.Link to="/join">
                  <Atom.Button white>Join Community</Atom.Button>
                </Molecule.Link>
              </Atom.Box>
            </Atom.Flex>
          </Atom.Container>
        </Atom.Flex>
      </div>
    </div>
  );
};
export default Community;
