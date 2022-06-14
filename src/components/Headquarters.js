import React from "react";
import { Grid } from "semantic-ui-react";
import "../stylesheets/Headquarters.css";
import ColdStorage from "./ColdStorage";
import Details from "./Details";
import LogPanel from './LogPanel';

function Headquarters() {
  return (
    <Grid celled="internally">
      <Grid.Column width={8}>{/* Something goes here.... */}<ColdStorage/></Grid.Column>
      <Grid.Column width={5}>
        <Details />
      </Grid.Column>
      <Grid.Column width={3}>
        {/* and here. Take visual cues from the screenshot/video in the Readme. */}
        <LogPanel/>
      </Grid.Column>
    </Grid>
  );
}

export default Headquarters;
