import React from "react";
import { Segment } from "semantic-ui-react";
import Area from './Area';

function WestworldMap({ areas , activeHosts , selected , onSelect }) {

  const renderAreas = areas.map((area) => <Area key={area.id} name={area.name} limit={area.limit} hosts={activeHosts} selected={selected} onSelect={onSelect}/>)

  return <Segment id="map">{/* What should we render on the map? */}{renderAreas}</Segment>;
}

export default WestworldMap;
