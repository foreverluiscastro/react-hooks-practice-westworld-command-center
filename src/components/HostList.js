import React from "react";
import { Card } from "semantic-ui-react";
import Host from './Host';

function HostList({ selected , onSelect , hosts }) {

  const renderHosts = hosts.map((host) => <Host key={host.id} host={host} selected={selected} onSelect={onSelect}/>)

  return (
    <Card.Group itemsPerRow={6}>{/* What do you think, partner? */}{renderHosts}</Card.Group>
  );
}

export default HostList;
