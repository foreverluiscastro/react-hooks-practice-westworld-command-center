import React from "react";
import { Segment } from "semantic-ui-react";
import Area from './Area';

function WestworldMap({ areas }) {

  const renderAreas = areas.map((area) => <Area key={area.id} area={area}/>)

  return <Segment id="map">{/* What should we render on the map? */}{renderAreas}</Segment>;
}

export default WestworldMap;
