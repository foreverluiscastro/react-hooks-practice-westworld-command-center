import React from "react";
import { Card } from "semantic-ui-react";
import Host from './Host';

function HostList() {
  return (
    <Card.Group itemsPerRow={6}>{/* What do you think, partner? */}</Card.Group>
  );
}

export default HostList;
