import { Dashboard } from "@templates";
import { Router } from "@reach/router";

import { Overview, Proposals } from "@pages";

const DashboardPage = props => (
  <Dashboard>
    <Router width="100%" style={{ height: "100%" }} primary={false}>
      <Overview path="/" />
      <Proposals path="/proposals" />
    </Router>
  </Dashboard>
);

export default DashboardPage;
