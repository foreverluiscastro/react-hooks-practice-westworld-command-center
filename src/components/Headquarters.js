import React from "react";
import { Grid } from "semantic-ui-react";
import "../stylesheets/Headquarters.css";
import ColdStorage from "./ColdStorage";
import Details from "./Details";
import LogPanel from './LogPanel';

function Headquarters({
  inactiveHosts,
  onSelect,
  selected,
  areas,
  onActiveToggle,
  onMassActivate
}) {
  return (
    <Grid celled="internally">
      <Grid.Column width={8}>{/* Something goes here.... */}<ColdStorage inactiveHosts={inactiveHosts} onSelect={onSelect} selected={selected}/></Grid.Column>
      <Grid.Column width={5}>
        <Details
        selected={selected}
        areas={areas}
        onActiveToggle={onActiveToggle}
        />
      </Grid.Column>
      <Grid.Column width={3}>
        {/* and here. Take visual cues from the screenshot/video in the Readme. */}
        <LogPanel onMassActivate={onMassActivate}/>
      </Grid.Column>
    </Grid>
  );
}

export default Headquarters;
